require("dotenv").config();
const { ORIGIN_FRONTEND, ENVIRONMENT, DB_HOST, DB_USER, DB_PASS, DB_DATABASE } =
  process.env;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var fileUpload = require("express-fileupload");
var cors = require("cors");
const cookieParser = require("cookie-parser");
const cookie = require("cookie-signature");
const jwt = require("jsonwebtoken");
// const session = require('express-session');

// const { response } = require('express');
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: ORIGIN_FRONTEND,
    credentials: true,
  })
);

// app.use(session({
//   key: 'userId',
//   secret: SESSION_SECRET,
//   store: sessionStore,
//   proxy: true,
//   resave: false,
//   saveUninitialized: false,
//   rolling: true,
//   cookie: {
//       maxAge: 120 * 60 * 1000, //minutes * seconds * miliseconds
//       secure: true,
//       httpOnly: true,
//       sameSite: 'none'
//   }
// }));

//connection configurations
var db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_DATABASE,
});

//  var db = mysql.createConnection({
//    host: 'localhost',
//    user: 'rwa022023',
//    password: 'csdigital2023',
//    database: 'rwa022023'
//  });
// connect to database
db.connect();
// default route
app.get("/", function (req, res) {
  return res.send({ error: true, message: "hello" });
});
// db.query("SELECT * from Users",(result, error) => {console.log(result, error)} )

//KORISNICI
//Registracija Usera
app.post("/api/registerUser", function (req, res) {
  var hashPwd;
  const {
    Username,
    FirstName,
    LastName,
    Email,
    PhoneNumber,
    Password,
    RepeatedPassword,
  } = req.body;

  db.query(
    `SELECT Username FROM users
    WHERE Username = '${Username}'`,
    function (error, result) {
      if (error != null) {
        console.log(error);
        res.json(false);
      } else {
        if (result.length >= 1) {
          res.json(false);
        } else if (
          FirstName.length == 0 ||
          LastName.length == 0 ||
          Email.length == 0 ||
          PhoneNumber.length == 0
        ) {
          res.json(false);
        } else if (Password != RepeatedPassword) {
          res.json(false);
        } else {
          bcrypt
            .genSalt(saltRounds)
            .then((salt) => {
              console.log("Salt: ", salt);
              return bcrypt.hash(Password, salt);
            })
            .then((hash) => {
              console.log(hash);
              db.query(
                `INSERT INTO users (Username, FirstName, LastName, Email, PhoneNumber, RoleId, Password)
              VALUE('${Username}', '${FirstName}', '${LastName}', '${Email}', '${PhoneNumber}', 3, '${hash}')`,
                (error, result) => {
                  if (error) {
                    console.log(error);
                    res.json(false);
                  } else {
                    res.json(true);
                  }
                }
              );
            })
            .catch((err) => console.error(err.message));
        }
      }
    }
  );
});
//Registracija Trenera(role = 2) ili Admina(role = 1)
app.post("/api/registerAdmin", function (req, res) {
  var hashPwd;
  const {
    Username,
    FirstName,
    LastName,
    Email,
    PhoneNumber,
    Password,
    RepeatedPassword,
    selected,
  } = req.body;

  db.query(
    `SELECT Username FROM users
    WHERE Username = '${Username}'`,
    function (error, result) {
      if (error != null) {
        console.log(error);
        res.json(false);
      } else {
        if (result.length >= 1) {
          res.json(false);
        } else if (
          FirstName.length == 0 ||
          LastName.length == 0 ||
          Email.length == 0 ||
          PhoneNumber.length == 0
        ) {
          res.json(false);
        } else if (Password != RepeatedPassword) {
          res.json(false);
        } else {
          bcrypt
            .genSalt(saltRounds)
            .then((salt) => {
              console.log("Salt: ", salt);
              return bcrypt.hash(Password, salt);
            })
            .then((hash) => {
              console.log(hash);
              db.query(
                `INSERT INTO users (Username, FirstName, LastName, Email, PhoneNumber, RoleId, Password)
              VALUE('${Username}', '${FirstName}', '${LastName}', '${Email}', '${PhoneNumber}', '${selected}', '${hash}')`,
                (error, result) => {
                  if (error) {
                    console.log(error);
                    res.json(false);
                  } else {
                    res.json(true);
                  }
                }
              );
            })
            .catch((err) => console.error(err.message));
        }
      }
    }
  );
});
//Login Usera
app.post("/api/loginUser", function (req, res) {
  const { Username, Password } = req.body;
  console.log("Username" + Username);
  db.query(
    `SELECT * FROM users
    WHERE Username = '${Username}'`,
    function (error, result) {
      console.log(result);
      if (error != null) {
        console.log(error);
        res.status(500).json({
          msg: error.message,
          res: false,
        });
      } else if (result.length > 0) {
        bcrypt.compare(
          Password,
          result[0].Password,
          function (errorpwd, respwd) {
            if (errorpwd != null) {
              console.error(err.message);
              res.status(500).json({
                msg: "Login fail",
                res: false,
              });
            }

            console.log(result[0].Username);
            const token = jwt.sign(
              {
                user: {
                  id: result[0].Id,
                  username: result[0].Username,
                  name: result[0].FirstName,
                  surname: result[0].LastName,
                  email: result[0].Email,
                  phoneNumber: result[0].PhoneNumber,
                  role: result[0].RoleId,
                },
              },
              "SECRETKEY",
              {
                expiresIn: "7d",
              }
            );
            if (ENVIRONMENT === "local") {
              res.cookie("kvsum-token", token, {
                secure: false,
                httpOnly: false,
                sameSite: "lax",
                domain: "localhost",
              });
            } else {
              res.cookie("kvsum-token", token, {
                secure: true,
                httpOnly: true,
                sameSite: "lax",
              });
            }

            res.status(200).json({
              msg: "Logged in!",
              res: true,
            });
          }
        );
      } else {
        console.log("Username not found");
        res.status(404).json({
          msg: "Login fail",
          success: false,
        });
      }
    }
  );
});
//Token login provjera
app.get("/api/login", function (req, res) {
  console.log(req.cookies);

  let token = req.cookies["kvsum-token"];
  jwt.verify(token, "SECRETKEY", (error, decoded) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        msg: "error",
        error: error,
      });
    } else if (decoded == null) {
      res.status(403).json({
        msg: "Invalid token",
      });
    } else {
      console.log(decoded);
      res.status(200).json({
        msg: "User logged in",
        user: decoded.user,
      });
    }
  });
});
//Log out usera
app.delete("/api/logoutUser", function (req, res) {
  console.log("zali uci u login: ", res.cookies);
  res.clearCookie("kvsum-token");
  console.log("zali uci u login: ", res.cookies);

  res.json(true);
});
//Display trenera
app.get("/api/coaches", function (req, res) {
  db.query(`SELECT * FROM users where RoleId = 2 `, function (error, result) {
    if (error) {
      res.status(500).json({
        msg: "error",
      });
    } else if (result.length <= 0) {
      res.status(404).json({
        msg: "No news",
      });
    } else {
      res.status(200).json({
        msg: "Coaches",
        output: result,
      });
    }
  });
});
//Display svih korisnika
app.get("/api/users", function (req, res) {
  db.query(`SELECT * FROM users where RoleId = 3`, function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({
        msg: "error",
      });
    } else if (result.length <= 0) {
      res.status(404).json({
        msg: "No news",
      });
    } else {
      res.status(200).json({
        msg: "Users",
        output: result,
      });
    }
  });
});
//Display jednog korisnika
app.get("/api/user/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT * FROM users where RoleId = 3 and Id = ${id} LIMIT 1`,
    function (error, result) {
      if (error) {
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No news",
        });
      } else {
        res.status(200).json({
          msg: "Users",
          result: result[0],
        });
      }
    }
  );
});

//NOVOSTI
//Kreiranje novosti
app.post("/api/createNews", function (req, res) {
  console.log(req.files);
  const myFile = req.files.selectedFile;
  var Title = req.body.Title;
  var Description = req.body.Description;
  var CreatorId = req.body?.Userid;
  let date = new Date().toJSON().slice(0, 10);
  console.log("body: ", req.body);

  myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }

    db.query(
      `INSERT INTO news(Title, Decsription, ImageName, CreationDate, CreatorId, isDeleted)
            VALUES('${Title}', '${Description}','${myFile.name}', '${date}',  ${CreatorId}, false)`,
      (error, result) => {
        if (error) {
          console.log(error);
          res.json(false);
        } else {
          return res.json({ name: myFile.name, path: `/${myFile.name}` });
        }
      }
    );
  });
});
//prikaz svih novosti
app.get("/api/news", function (req, res) {
  db.query(
    `SELECT n.*, u.Username FROM news n JOIN users u on n.CreatorId = u.id where isDeleted = false`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No news",
        });
      } else {
        res.status(200).json({
          msg: "News",
          news: result,
        });
      }
    }
  );
});
//prikaz samo određenih novosti
app.get("/api/new/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT n.*, u.Username FROM news n join users u on n.CreatorId = u.id where n.Id = ? LIMIT 1`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        console.log(result);
        res.status(404).json({
          msg: "No news",
        });
      } else {
        res.status(200).json({
          msg: "news",
          result: result[0],
        });
      }
    }
  );
});
//uređivanje novosti
app.put("/api/updatenews/:id", function (req, res) {
  const { Title, Description } = req.body;
  let date = new Date().toJSON().slice(0, 10);
  var id = req.params["id"];
  db.query(
    `UPDATE news SET Title = '${Title}', Decsription = '${Description}', ModifcationDate = '${date}' where Id = ?`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
          result: false,
        });
      } else if (result.affectedRows == 1) {
        res.status(200).json({
          msg: "Uspjesno Uređeno!",
          result: true,
        });
      } else {
        res.status(404).json({
          msg: "No exercises",
          result: false,
        });
      }
    }
  );
});
//brisanje novosti
app.get("/api/delnews/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id, " je id koji dobijemo");
  db.query(
    "UPDATE news SET isDeleted = true WHERE id =?",
    [id],
    function (errorupd, resultupd) {
      if (errorupd) {
        console.log(errorupd);
        res.status(500).json({
          msg: "error",
        });
      } else {
        res.status(200).json({
          msg: "Uspjesno obrisano!",
        });
      }
    }
  );
});

//VJEZBE
//kreiranje vjezbe
app.post("/api/createexercise", function (req, res) {
  const { Title, Description, store } = req.body;
  let date = new Date().toJSON().slice(0, 10);

  var CreatorId = store.user.id;
  console.log("kreator id: " + CreatorId);

  db.query(
    `INSERT INTO exercises(Title, Description, IsDeleted, CreationDate, CreatorId )
            VALUES('${Title}', '${Description}', false ,'${date}', ${CreatorId} )`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//prikaz svih vjezbi
app.get("/api/exercises", function (req, res) {
  db.query(
    `SELECT e.*, u.Username FROM exercises e JOIN users u on e.CreatorId = u.Id where e.isDeleted = false`,
    function (error, result) {
      if (error) {
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No exercises",
        });
      } else {
        res.status(200).json({
          msg: "Exercises",
          exercises: result,
        });
      }
    }
  );
});
//Prikaz samo određene vjezbe
app.get("/api/exercise/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT  e.*, u.Username FROM exercises e JOIN users u on e.CreatorId = u.Id where e.isDeleted = false and e.id = ? LIMIT 1`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No exercises",
        });
      } else {
        res.status(200).json({
          msg: "Exercises",
          result: result[0],
        });
      }
    }
  );
});
//delete vjezba
app.get("/api/delexercises/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id, " je id koji dobijemo");
  db.query(
    "UPDATE exercises SET isDeleted = true WHERE id =?",
    [id],
    function (errorupd, resultupd) {
      if (errorupd) {
        console.log(errorupd);
        res.status(500).json({
          msg: "error",
        });
      } else {
        res.status(200).json({
          msg: "Uspjesno obrisano!",
        });
      }
    }
  );
});
//update vjezbi
app.put("/api/updateexercise/:id", function (req, res) {
  const { Title, Description } = req.body;
  var id = req.params["id"];
  db.query(
    `UPDATE exercises SET Title = '${Title}', Description = '${Description}' where id = ?`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
          result: false,
        });
      } else if (result.affectedRows == 1) {
        res.status(200).json({
          msg: "Uspjesno Uređeno!",
          result: true,
        });
      } else {
        res.status(404).json({
          msg: "No exercises",
          result: false,
        });
      }
    }
  );
});

//KATEGORIJE
//Kreiranje kategorije
app.post("/api/createcategory", function (req, res) {
  const { Title, Userid } = req.body;
  let date = new Date().toJSON().slice(0, 10);
  var CreatorId = Userid;
  db.query(
    `INSERT INTO training_category(Title, IsDeleted, CreationDate, CreatorId )
            VALUES('${Title}', false ,'${date}', ${CreatorId} )`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//Prikaz svih kategorija
app.get("/api/categories", function (req, res) {
  db.query(
    `SELECT t.*, u.Username FROM training_category t JOIN users u on t.CreatorId = u.Id where t.isDeleted = false`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No categories",
        });
      } else {
        res.status(200).json({
          msg: "Categories",
          categories: result,
        });
      }
    }
  );
});
//Prikaz samo određene kategorije
app.get("/api/category/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT  t.*, u.Username FROM training_category t JOIN users u on t.CreatorId = u.Id where t.isDeleted = false and t.id = ? LIMIT 1`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No category",
        });
      } else {
        res.status(200).json({
          msg: "Category",
          result: result[0],
        });
      }
    }
  );
});
//Uređivanje kategorije
app.put("/api/updatecategory/:id", function (req, res) {
  const { Title } = req.body;
  var id = req.params["id"];
  db.query(
    `UPDATE training_category SET Title = '${Title}' where id = ?`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
          result: false,
        });
      } else if (result.affectedRows == 1) {
        res.status(200).json({
          msg: "Uspjesno Uređeno!",
          result: true,
        });
      } else {
        res.status(404).json({
          msg: "No exercises",
          result: false,
        });
      }
    }
  );
});
//Brisanje kategorije
app.get("/api/delcategory/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id, " je id koji dobijemo");
  db.query(
    "UPDATE training_category SET isDeleted = true WHERE id =?",
    [id],
    function (errorupd, resultupd) {
      if (errorupd) {
        console.log(errorupd);
        res.status(500).json({
          msg: "error",
        });
      } else {
        res.status(200).json({
          msg: "Uspjesno obrisano!",
        });
      }
    }
  );
});

//TRENINZI
//Kreiranje treninga
app.post("/api/createtraining", function (req, res) {
  const { Title, Userid, selected } = req.body;
  let date = new Date().toJSON().slice(0, 10);
  var CreatorId = Userid;
  console.log(selected, "selected");
  db.query(
    `INSERT INTO training(Title, IsDeleted, CreationDate, CreatorId, CategoryId )
            VALUES('${Title}', false ,'${date}', ${CreatorId}, ${selected})`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//Display treninga
app.get("/api/trainings", function (req, res) {
  db.query(
    `SELECT t.*, u.Username, tc.Title as category FROM training t JOIN users u on t.CreatorId = u.Id JOIN training_category tc on t.CategoryId= tc.id where t.isDeleted = false`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No Trainings",
        });
      } else {
        res.status(200).json({
          msg: "Categories",
          training: result,
        });
      }
    }
  );
});
//Display jednog treninga
app.get("/api/training/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT  t.*, u.Username, tc.Title as category FROM training t JOIN users u on t.CreatorId = u.Id JOIN training_category tc on t.CategoryId= tc.id where t.isDeleted = false and t.id = ? LIMIT 1`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No training",
        });
      } else {
        res.status(200).json({
          msg: "Training",
          result: result[0],
        });
      }
    }
  );
});
//Prikaz treninga u ovisnosti o kategoriji (top 4)
app.get("/api/trainingscat/:id", function (req, res) {
  var id = req.params["id"];
  console.log(req.params);
  db.query(
    `SELECT  t.*, u.Username, tc.Title as category FROM training t JOIN users u on t.CreatorId = u.Id JOIN training_category tc on t.CategoryId= tc.id where t.isDeleted = false and t.CategoryId = ? LIMIT 4`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else {
        res.status(200).json({
          msg: "Categories",
          training: result,
        });
      }
    }
  );
});
//Uređivanje treninga
app.put("/api/updatetraining/:id", function (req, res) {
  const { Title, selected } = req.body;
  var id = req.params["id"];
  db.query(
    `UPDATE training SET Title = '${Title}', CategoryId = ${selected} where id = ?`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
          result: false,
        });
      } else if (result.affectedRows == 1) {
        res.status(200).json({
          msg: "Uspjesno Uređeno!",
          result: true,
        });
      } else {
        res.status(404).json({
          msg: "No exercises",
          result: false,
        });
      }
    }
  );
});
//Brisanje treninga
app.get("/api/deltraining/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id, " je id koji dobijemo");
  db.query(
    "UPDATE training SET isDeleted = true WHERE id =?",
    [id],
    function (errorupd, resultupd) {
      if (errorupd) {
        console.log(errorupd);
        res.status(500).json({
          msg: "error",
        });
      } else {
        res.status(200).json({
          msg: "Uspjesno obrisano!",
        });
      }
    }
  );
});

//TRENING-VJEZBA
//Kreiranje treninga-vjezbe
app.post("/api/createtraexe/:id", function (req, res) {
  const { RepetitionNumber, Series, Duration, ExerciseId } = req.body;
  dur = Duration;
  rep = RepetitionNumber;
  if (Duration == "") {
    dur = 0;
  }
  if (RepetitionNumber == "") {
    rep = 0;
  }

  console.log(Duration, "duration");
  var id = req.params["id"];
  db.query(
    `INSERT INTO training_exercise(RepetitionNumber, Series, Duration, TrainingId, ExerciseId, isDeleted )
            VALUES(${rep} ,${Series}, ${dur}, ${id}, ${ExerciseId}, false)`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//Prikaz jedne vjezbe jednog treninga
app.get("/api/traexe/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT  te.*, t.Title as training, e.Title as exercise FROM training_exercise te JOIN  training t on te.TrainingId = t.id JOIN exercises e on te.ExerciseId= e.id where te.isDeleted = false and te.id = ? LIMIT 1`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No training",
        });
      } else {
        res.status(200).json({
          msg: "Training",
          result: result[0],
        });
      }
    }
  );
});
//Prikaz svih vjezbi jednog treninga
app.get("/api/trainingexe/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT te.*, t.Title as training, e.Title as exercise FROM training_exercise te JOIN  training t on te.TrainingId = t.id JOIN exercises e on te.ExerciseId= e.id where te.isDeleted = false and t.id = ?`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No Trainings",
        });
      } else {
        res.status(200).json({
          msg: "Categories",
          result: result,
        });
      }
    }
  );
});
//Uređivanje vjezbe u treningu
app.put("/api/updateaexe/:id", function (req, res) {
  const { RepetitionNumber, Series, Duration, ExerciseId } = req.body;
  var id = req.params["id"];
  db.query(
    `UPDATE training_exercise SET RepetitionNumber = ${RepetitionNumber}, Series = ${Series}, Duration = ${Duration}, ExerciseId = ${ExerciseId} where id = ?`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
          result: false,
        });
      } else if (result.affectedRows == 1) {
        res.status(200).json({
          msg: "Uspjesno Uređeno!",
          result: true,
        });
      } else {
        res.status(404).json({
          msg: "No exercises",
          result: false,
        });
      }
    }
  );
});
//brisanje vjezbe u treningu
app.get("/api/deltraexe/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id, " je id koji dobijemo u deletu");
  db.query(
    "UPDATE training_exercise SET isDeleted = true where id = ?",
    [id],
    function (errorupd, resultupd) {
      if (errorupd) {
        console.log(errorupd);
        res.status(500).json({
          msg: "error",
        });
      } else {
        res.status(200).json({
          msg: "Uspjesno obrisano!",
        });
      }
    }
  );
});

//PROGRAM
//Kreiranje programa
app.post("/api/createprogram", function (req, res) {
  const { Title, Description, Cost, Userid } = req.body;
  var CreatorId = Userid;
  db.query(
    `INSERT INTO programs(Title, Description, Cost, CreatorId , IsDeleted)
            VALUES('${Title}', '${Description}' ,${Cost}, ${CreatorId}, false)`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//prikaz svih programa
app.get("/api/programs", function (req, res) {
  db.query(
    `SELECT p.* , u.Username as Username FROM programs p join users u on p.CreatorId=u.id WHERE p.IsDeleted = false `,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Categories",
          output: result,
        });
      }
    }
  );
});
//prikaz pojedinačnog programa
app.get("/api/program/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id, "ovo je id");
  db.query(
    `SELECT p.* , u.Username as Username FROM programs p join users u on p.CreatorId=u.Id WHERE p.IsDeleted = false AND p.id=${id}  LIMIT 1`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "No training",
        });
      } else {
        res.status(200).json({
          msg: "Training",
          result: result[0],
        });
      }
    }
  );
});
//modificiranje programa
app.put("/api/updateprogram/:id", function (req, res) {
  const { Title, Description, Cost } = req.body;
  var id = req.params["id"];
  db.query(
    `UPDATE programs SET Title = '${Title}', Description = '${Description}', Cost = '${Cost}'  where id = ?`,
    [id],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
          result: false,
        });
      } else if (result.affectedRows == 1) {
        res.status(200).json({
          msg: "Uspjesno Uređeno!",
          result: true,
        });
      } else {
        res.status(404).json({
          msg: "No exercises",
          result: false,
        });
      }
    }
  );
});
//brisanje programa
app.get("/api/delprograms/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id, " je id koji dobijemo");
  db.query(
    "UPDATE programs SET IsDeleted = true WHERE id =?",
    [id],
    function (errorupd, resultupd) {
      if (errorupd) {
        console.log(errorupd);
        res.status(500).json({
          msg: "error",
        });
      } else {
        res.status(200).json({
          msg: "Uspjesno obrisano!",
        });
      }
    }
  );
});

//KORISNIK-PROGRAM
//dodavanje korisnika u program
app.post("/api/createuserprogram", function (req, res) {
  const { isPayed, MonthOfPayment, UserId, ProgramId } = req.body;
  var id = req.params["id"];
  let date = new Date().toJSON().slice(0, 10);
  db.query(
    `INSERT INTO user_program(IsPayed, MonthOfPayment, UserId, IsDeleted, ProgramId, CreationDate)
           VALUES(${isPayed} ,'${MonthOfPayment}', ${UserId}, false, ${ProgramId}, '${date}')`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//Modificiranje programa korisnika
app.put("/api/modifyuserprogram/:id", function (req, res) {
  const { isPayed, MonthOfPayment, ProgramId } = req.body;
  var id = req.params["id"];
  db.query(
    `UPDATE user_program SET IsPayed = ${isPayed}, MonthOfPayment = '${MonthOfPayment}', ProgramId = ${ProgramId} WHERE id = ${id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//brisanje korisnika iz programa
app.get("/api/deleteuserprogram/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `UPDATE user_program SET IsDeleted = true WHERE id = ${id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//prikaz svih korisanika-programa
app.get("/api/programsandusers", function (req, res) {
  db.query(
    `SELECT up.*, p.Title as ProgramTitle, p.Cost as ProgramPrice ,u.Username as Username FROM user_program up join users u on u.id = up.UserId join programs p on p.id = up.ProgramId where up.IsDeleted = false order by str_to_date(CreationDate, '%y-%m-%d')`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Users and programs",
          output: result,
        });
      }
    }
  );
});
//prikaz jednog program-korisnika
app.get("/api/programuser/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT up.*, u.Username as Username FROM user_program up join users u on u.id = up.UserId where up.IsDeleted = false and up.id = ${id} limit 1`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Users and programs",
          output: result[0],
        });
      }
    }
  );
});
//prikaz svih korisnika u programu STAVITI U PROGRAM JOS JEDNU AKCIJU za prikaz svih korisnia toga programa
app.get("/api/programforusers/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT up.*, p.Title, u.Username as Username, p.Title as ProgramTitle FROM user_program up join users u on u.id = up.UserId join programs p on up.ProgramId = p.id where ProgramId = ${id} and up.IsDeleted = false order by str_to_date(CreationDate, '%y-%m-%d')`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Users and programs",
          output: result,
        });
      }
    }
  );
});
//prikaz svih programa korisnika
app.get("/api/programsofuser/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT up.*, p.Title as ProgramTitle FROM user_program up join programs p on p.id = up.ProgramId where UserId = ${id} and up.IsDeleted = false order by str_to_date(CreationDate, '%y-%m-%d')`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Users and programs",
          output: result,
        });
      }
    }
  );
});
//Placanje clanarina
app.put("/api/userpayment/:id", function (req, res) {
  var id = req.params["id"];
  const { isPayed } = req.body;
  db.query(
    `UPDATE user_program SET IsPayed = ${isPayed} WHERE id = ${id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});

//TRENING-KORISNIK
//Spajanje treninga sa korisnicima
app.post("/api/trainingforusers", function (req, res) {
  const { UserId, DateOfTraining, startAt, EndsAt, TrainingId } = req.body;
  db.query(
    `INSERT INTO training_user(UserId, TrainingId, DateOfTraining, startAt, EndsAt, IsDeleted)
           VALUES(${UserId} ,${TrainingId} ,${DateOfTraining}, ${startAt}, ${EndsAt}, false)`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});
//prikaz svih treninga korisnika
app.get("/api/trainingsusers", function (req, res) {
  db.query(
    `SELECT ut.*, u.Username as Username, t.Title as TrainingTitle FROM user_training ut join users u on u.Id = ut.UserId join training t on t.id= ut.TrainingId where ut.IsDeleted = false order by str_to_date(ut.DateOfTraining, '%y-%m-%d')`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Users and programs",
          output: result,
        });
      }
    }
  );
});
//prikaz jednog treninga korisnika
app.get("/api/traininguser/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT ut.*, u.Username as Username, t.Title as TrainingTitle FROM user_training ut join users u on u.Id = ut.UserId join training t on t.id= ut.TrainingId where IsDeleted = false and id = ${id} order by str_to_date(DateOfTraining, '%y-%m-%d') limit 1`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Users and programs",
          output: result[0],
        });
      }
    }
  );
});
//Prikaz svih treninga jednog  korisnika
app.get("/api/alltrainingsofuser/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT ut.*, u.Username as Username, t.Title as TrainingTitle FROM user_training ut join users u on u.Id = ut.UserId join training t on t.id= ut.TrainingId where UserId = ${id} and IsDeleted = false order by str_to_date(DateOfTraining, '%y-%m-%d') `,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Users and programs",
          output: result,
        });
      }
    }
  );
});
//Prikaz svih korisnika jednog treninga
app.get("/api/allusersoftraining/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `SELECT ut.*, u.Username as Username, t.Title as TrainingTitle FROM user_training ut join users u on u.Id = ut.UserId join training t on t.id= ut.TrainingId where TrainingId = ${id} and IsDeleted = false order by str_to_date(DateOfTraining, '%y-%m-%d')`,
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          msg: "error",
        });
      } else if (result.length <= 0) {
        res.status(404).json({
          msg: "Not found",
        });
      } else {
        res.status(200).json({
          msg: "Users and programs",
          output: result,
        });
      }
    }
  );
});
//Brisanje korisnika sa treninga
app.get("/api/deleteusertraining/:id", function (req, res) {
  var id = req.params["id"];
  db.query(
    `UPDATE TABLE user_training SET IsDeleted = true WHERE id = ${id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.json(false);
      } else {
        return res.json(true);
      }
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
