var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const bcrypt = require("bcrypt");
const saltRounds = 10;
var fileUpload = require('express-fileupload');
var cors = require('cors');
const cookieParser = require('cookie-parser');
const cookie = require('cookie-signature');
const jwt = require('jsonwebtoken');
// const session = require('express-session');


// const { response } = require('express');
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static('public'))
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors(
	{
		origin: '*'
	}
))



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


// connection configurations
var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'PlivackiKlub'
});
// connect to database
db.connect();
// default route
app.get('/', function (req, res) {
	return res.send({ error: true, message: 'hello' })
});
// db.query("SELECT * from Users",(result, error) => {console.log(result, error)} )

//KORISNICI
//Registracija Usera
app.post('/api/registerUser', function (req,res){
  var hashPwd;
  const {Username,FirstName, LastName,  Email, PhoneNumber, Password, RepeatedPassword} = req.body

  db.query(
    `SELECT Username FROM Users
    WHERE Username = '${Username}'`,
    function (error, result){
     

      if(error != null){
        console.log(error );
        res.json(false);
      }
      else{

        if(result.length>=1){
          res.json(false);
        }
        else if(FirstName.length==0 || LastName.length==0 || Email.length==0 || PhoneNumber.length==0){
          res.json(false);
        }else if(Password != RepeatedPassword){
          res.json(false);
        }
        else{
          bcrypt
            .genSalt(saltRounds)
            .then(salt => {
              console.log('Salt: ', salt)
              return bcrypt.hash(Password, salt)
            })
            .then(hash => {
              
              console.log(hash);
              db.query(`INSERT INTO Users (Username, FirstName, LastName, Email, PhoneNumber, RoleId, Password)
              VALUE('${Username}', '${FirstName}', '${LastName}', '${Email}', '${PhoneNumber}', 3, '${hash}')`,
              (error, result) => {
                if (error) {
                  console.log(error)
                  res.json(false)
              }
              else {
                  res.json(true)
              }
              })
            })
            .catch(err => console.error(err.message))

   
        }
      }
    }

  )
})
//Registracija Trenera(role = 2) ili Admina(role = 1)
app.post('/api/registerAdmin', function (req,res){
  var hashPwd;
  const {Username,FirstName, LastName,  Email, PhoneNumber, Password, RepeatedPassword, selected} = req.body

  db.query(
    `SELECT Username FROM Users
    WHERE Username = '${Username}'`,
    function (error, result){
     
      if(error != null){
        console.log(error );
        res.json(false);
      }
      else{

        if(result.length>=1){
          res.json(false);
        }
        else if(FirstName.length==0 || LastName.length==0 || Email.length==0 || PhoneNumber.length==0){
          res.json(false);
        }else if(Password != RepeatedPassword){
          res.json(false);
        }
        else{
          bcrypt
            .genSalt(saltRounds)
            .then(salt => {
              console.log('Salt: ', salt)
              return bcrypt.hash(Password, salt)
            })
            .then(hash => {
              
              console.log(hash);
              db.query(`INSERT INTO Users (Username, FirstName, LastName, Email, PhoneNumber, RoleId, Password)
              VALUE('${Username}', '${FirstName}', '${LastName}', '${Email}', '${PhoneNumber}', '${selected}', '${hash}')`,
              (error, result) => {
                if (error) {
                  console.log(error)
                  res.json(false)
              }
              else {
                  res.json(true)
              }
              })
            })
            .catch(err => console.error(err.message))

   
        }
      }
    }

  )
})
//Login Usera
app.post('/api/loginUser', function(req, res){
  const {Username, Password} = req.body
  console.log("Username" + Username);
  db.query(
    `SELECT * FROM Users
    WHERE Username = '${Username}'`,
    function (error, result){
      console.log(result);
      if(error != null){
        res.status(500).send(error.message);
        console.log(error);
        res.json(false);
      }
      else if(result.length>0){
        bcrypt.compare(Password, result[0].Password, function(errorpwd, respwd){
          if(errorpwd != null){
            console.error(err.message);
              res.status(500).json({
              msg: 'Login fail',
              success: false 
            })
          }

        
            console.log(result[0].Username);
             const token = jwt.sign({
              
               user:{
                id:result[0].Id,
                username: result[0].Username,
                name: result[0].FirstName,
                surname: result[0].LastName,
                email: result[0].Email,
                phoneNumber: result[0].PhoneNumber,
                role: result[0].RoleId,
  
              }
            
             },
             'SECRETKEY', {
               expiresIn: '7d'
             })
             res.cookie("kvsum-token", token);
            res.status(200).json({
  
               msg: 'Logged in!',
               success: true
               
             });
       
            

        })
        
      }
      else{
        console.log("Username not found");
        res.status(404).json({
          msg: 'Login fail',
          success: false 
        })

      }

    }
    
    )

})
//Token login provjera
app.get('/api/login', function(req, res){
  console.log( req.cookies);
  
  let token = req.cookies['kvsum-token'];
  jwt.verify(token, 'SECRETKEY', (error, decoded) => {
    if(error){
      res.status(500).json({
        msg: "error"
      })
    }else if(decoded == null){
      res.status(403).json({
        msg: "Invalid token"
      })
    }else{
      console.log(decoded);
      res.status(200).json({
        msg: "User logged in",
        user: decoded.user
      })
    }
  })
})
//Log out usera
app.delete('/api/logoutUser', function(req, res){
  res.clearCookie('kvsum-token');
  res.json(true)
})
app.get('/api/coaches', function(req, res){
  db.query(`SELECT * FROM Users where RoleId = 2`, function(error, result){
    if(error){
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No news"
      })
    }else{
      res.status(200).json({
        msg: "Coaches",
        output: result
      })
    }
  })
})

//NOVOSTI
//Kreiranje novosti
app.post('/api/createNews',function(req, res){
  console.log(req.body.store?.user)
  console.log(req.files)
const myFile = req.files.selectedFile; 
var Title = req.body.Title;
var Description = req.body.Description;
var CreatorId = req.body.Userid;
let date = new Date().toJSON().slice(0, 10);
console.log("body: ", req.body);

myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
  if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
  }
 
  db.query(`INSERT INTO News(Title, Decsription, ImageName, CreationDate, CreatorId, isDeleted)
            VALUES('${Title}', '${Description}','${myFile.name}', '${date}',  ${CreatorId}, false)`, 
            (error, result) => {
              if(error){
                console.log(error);
                res.json(false);
              }
              else{
                return res.json({name: myFile.name, path: `/${myFile.name}`});
              }
            } ) 
});
})
//prikaz svih novosti
app.get('/api/news', function(req, res){
  db.query(`SELECT n.*, u.Username FROM News n JOIN Users u on n.CreatorId = u.id where isDeleted = false`, function(error, result){
    if(error){
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No news"
      })
    }else{
      res.status(200).json({
        msg: "News",
        news: result
      })
    }
  })
})
//prikaz samo određenih novosti
 app.get('/api/new/:id',function(req,res){
   var id = req.params['id'];
   db.query(`SELECT n.*, u.Username FROM News n join Users u on n.CreatorId = u.id where n.Id = ? LIMIT 1`,[id], function(error, result){
     if(error){
       console.log(error)
       res.status(500).json({
        msg: "error"
       })
     }else if(result.length<=0){
      console.log(result);
       res.status(404).json({
         msg: "No news"
       })
     }else{
       res.status(200).json({
         msg: "news",
         result: result[0],
     })
     }
   })
})
//uređivanje novosti
app.put('/api/updatenews/:id', function(req, res){
  const {Title, Description} = req.body;
  let date = new Date().toJSON().slice(0, 10);
  var id = req.params['id'];
      db.query(`UPDATE News SET Title = '${Title}', Decsription = '${Description}', ModifcationDate = '${date}' where Id = ?`, [id], function(error,result){
        if(error){
          console.log(error)
          res.status(500).json({
            msg: "error",
            result:false
          })
        }else if(result.affectedRows==1){
          res.status(200).json({
            msg: "Uspjesno Uređeno!",
            result: true
          })
        }else{
          res.status(404).json({
            msg: "No exercises",
            result: false
          })
        }
      })
})
//brisanje novosti
app.get('/api/delnews/:id', function(req, res){
  var id = req.params['id'];
  console.log(id, " je id koji dobijemo")
     db.query("UPDATE News SET isDeleted = true WHERE id =?", [id], function(errorupd, resultupd){
       if(errorupd){
         console.log(errorupd);
         res.status(500).json({
           msg: "error"
         })
       }else{
         res.status(200).json({
           msg: "Uspjesno obrisano!",
         })
       }
 })
})


//VJEZBE
//kreiranje vjezbe
app.post('/api/createexercise',function(req, res){ 
  const {Title,Description, store } = req.body
  let date = new Date().toJSON().slice(0, 10);

  var CreatorId = store?.user?.id;
console.log("kreator id: "  + CreatorId);
  

  db.query(`INSERT INTO Exercises(Title, Description, IsDeleted, CreationDate, CreatorId )
            VALUES('${Title}', '${Description}', false ,'${date}', ${CreatorId} )`, 
            (error, result) => {
              if(error){
                console.log(error);
                res.json(false);
              }
              else{
                return res.json(true);
              }
   } ) 
});
//prikaz svih vjezbi
app.get('/api/exercises', function(req, res){
  db.query(`SELECT e.*, u.Username FROM Exercises e JOIN Users u on e.CreatorId = u.Id where e.isDeleted = false`, function(error, result){
    if(error){
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No exercises"
      })
    }else{
      res.status(200).json({
        msg: "Exercises",
        exercises: result,
    })
    }
  })
})
//Prikaz samo određene vjezbe
app.get('/api/exercise/:id',function(req,res){
  var id = req.params['id'];
  db.query(`SELECT  e.*, u.Username FROM Exercises e JOIN Users u on e.CreatorId = u.Id where e.isDeleted = false and e.id = ? LIMIT 1`,[id], function(error, result){
   
    if(error){
      console.log(error)
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No exercises"
      })
    }else{
      res.status(200).json({
        msg: "Exercises",
        result: result[0],
    })
    }
  })

})
//delete vjezba
app.get('/api/delexercises/:id', function(req, res){
   var id = req.params['id'];
   console.log(id, " je id koji dobijemo")
      db.query("UPDATE Exercises SET isDeleted = true WHERE id =?", [id], function(errorupd, resultupd){
        if(errorupd){
          console.log(errorupd);
          res.status(500).json({
            msg: "error"
          })
        }else{
          res.status(200).json({
            msg: "Uspjesno obrisano!",
          })
        }
  })
})
//update vjezbi 
app.put('/api/updateexercise/:id', function(req, res){
const {Title, Description} = req.body;
var id = req.params['id'];
    db.query(`UPDATE Exercises SET Title = '${Title}', Description = '${Description}' where id = ?`, [id], function(error,result){
      if(error){
        console.log(error)
        res.status(500).json({
          msg: "error",
          result:false
        })
      }else if(result.affectedRows==1){
        res.status(200).json({
          msg: "Uspjesno Uređeno!",
          result: true
        })
      }else{
        res.status(404).json({
          msg: "No exercises",
          result: false
        })
      }
    })
})
 
//KATEGORIJE
//Kreiranje kategorije
app.post('/api/createcategory',function(req, res){ 
  const {Title, Userid } = req.body
  let date = new Date().toJSON().slice(0, 10);
  var CreatorId = Userid;
  db.query(`INSERT INTO TrainingCategory(Title, IsDeleted, CreationDate, CreatorId )
            VALUES('${Title}', false ,'${date}', ${CreatorId} )`, 
            (error, result) => {
              if(error){
                console.log(error);
                res.json(false);
              }
              else{
                return res.json(true);
              }
   } ) 
});
//Prikaz svih kategorija
app.get('/api/categories', function(req, res){
  db.query(`SELECT t.*, u.Username FROM TrainingCategory t JOIN Users u on t.CreatorId = u.Id where t.isDeleted = false`, function(error, result){
    if(error){
      console.log(error)
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No categories"
      })
    }else{
      res.status(200).json({
        msg: "Categories",
        categories: result,
    })
    }
  })
})
//Prikaz samo određene kategorije
app.get('/api/category/:id',function(req,res){
  var id = req.params['id'];
  db.query(`SELECT  t.*, u.Username FROM TrainingCategory t JOIN Users u on t.CreatorId = u.Id where t.isDeleted = false and t.id = ? LIMIT 1`,[id], function(error, result){
   
    if(error){
      console.log(error)
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No category"
      })
    }else{
      res.status(200).json({
        msg: "Category",
        result: result[0],
    })
    }
  })

})
//Uređivanje kategorije
app.put('/api/updatecategory/:id', function(req, res){
  const {Title} = req.body;
  var id = req.params['id'];
      db.query(`UPDATE TrainingCategory SET Title = '${Title}' where id = ?`, [id], function(error,result){
        if(error){
          console.log(error)
          res.status(500).json({
            msg: "error",
            result:false
          })
        }else if(result.affectedRows==1){
          res.status(200).json({
            msg: "Uspjesno Uređeno!",
            result: true
          })
        }else{
          res.status(404).json({
            msg: "No exercises",
            result: false
          })
        }
      })
})
//Brisanje kategorije
app.get('/api/delcategory/:id', function(req, res){
  var id = req.params['id'];
  console.log(id, " je id koji dobijemo")
     db.query("UPDATE TrainingCategory SET isDeleted = true WHERE id =?", [id], function(errorupd, resultupd){
       if(errorupd){
         console.log(errorupd);
         res.status(500).json({
           msg: "error"
         })
       }else{
         res.status(200).json({
           msg: "Uspjesno obrisano!",
         })
       }
 })
})

//TRENINZI
//Kreiranje treninga
app.post('/api/createtraining',function(req, res){ 
  const {Title, Userid ,selected} = req.body
  let date = new Date().toJSON().slice(0, 10);
  var CreatorId = Userid;
  console.log(selected, "selected")
  db.query(`INSERT INTO Training(Title, IsDeleted, CreationDate, CreatorId, CategoryId )
            VALUES('${Title}', false ,'${date}', ${CreatorId}, ${selected})`, 
            (error, result) => {
              if(error){
                console.log(error);
                res.json(false);
              }
              else{
                return res.json(true);
              }
   } ) 
});
//Display treninga
app.get('/api/trainings', function(req, res){
  db.query(`SELECT t.*, u.Username, tc.Title as category FROM Training t JOIN Users u on t.CreatorId = u.Id JOIN TrainingCategory tc on t.CategoryId= tc.id where t.isDeleted = false`, function(error, result){
    if(error){
      console.log(error)
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No Trainings"
      })
    }else{
      res.status(200).json({
        msg: "Categories",
        training: result,
    })
    }
  })
})
//Display jednog treninga 
app.get('/api/training/:id',function(req,res){
  var id = req.params['id'];
  db.query(`SELECT  t.*, u.Username, tc.Title as category FROM Training t JOIN Users u on t.CreatorId = u.Id JOIN TrainingCategory tc on t.CategoryId= tc.id where t.isDeleted = false and t.id = ? LIMIT 1`,[id], function(error, result){
    if(error){
      console.log(error)
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No training"
      })
    }else{
      res.status(200).json({
        msg: "Training",
        result: result[0],
    })
    }
  })
})
//Prikaz treninga u ovisnosti o kategoriji (top 4)
app.get('/api/trainingscat/:id', function(req, res){
    var id = req.params['id'];
  db.query(`SELECT  t.*, u.Username, tc.Title as category FROM Training t JOIN Users u on t.CreatorId = u.Id JOIN TrainingCategory tc on t.CategoryId= tc.id where t.isDeleted = false and t.CategoryId = ? LIMIT 4`,[id], function(error, result){
    if(error){
      console.log(error)
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No Trainings"
      })
    }else{
      res.status(200).json({
        msg: "Categories",
        training: result,
    })
    }
  })
})
//Uređivanje treninga 
app.put('/api/updatetraining/:id', function(req, res){
  const {Title,  selected} = req.body;
  var id = req.params['id'];
      db.query(`UPDATE Training SET Title = '${Title}', CategoryId = ${selected} where id = ?`, [id], function(error,result){
        if(error){
          console.log(error)
          res.status(500).json({
            msg: "error",
            result:false
          })
        }else if(result.affectedRows==1){
          res.status(200).json({
            msg: "Uspjesno Uređeno!",
            result: true
          })
        }else{
          res.status(404).json({
            msg: "No exercises",
            result: false
          })
        }
      })
})
//Brisanje treninga 
app.get('/api/deltraining/:id', function(req, res){
  var id = req.params['id'];
  console.log(id, " je id koji dobijemo")
     db.query("UPDATE Training SET isDeleted = true WHERE id =?", [id], function(errorupd, resultupd){
       if(errorupd){
         console.log(errorupd);
         res.status(500).json({
           msg: "error"
         })
       }else{
         res.status(200).json({
           msg: "Uspjesno obrisano!",
         })
       }
 })
})

//TRENING-VJEZBA
//Kreiranje treninga-vjezbe
app.post('/api/createtraexe/:id',function(req, res){ 
  const {RepetitionNumber, Series ,Duration, ExerciseId} = req.body
  dur = Duration;
  rep = RepetitionNumber;
  if(Duration == ""){
    dur = 0;
  };
  if(RepetitionNumber == ""){
    rep=0;
  } 

console.log(Duration, "duration")
  var id = req.params['id'];
  db.query(`INSERT INTO TrainingExercise(RepetitionNumber, Series, Duration, TrainingId, ExerciseId, isDeleted )
            VALUES(${rep} ,${Series}, ${dur}, ${id}, ${ExerciseId}, false)`, 
            (error, result) => {
              if(error){
                console.log(error);
                res.json(false);
              }
              else{
                return res.json(true);
              }
   } ) 
});
//Prikaz jedne vjezbe jednog treninga
app.get('/api/traexe/:id',function(req,res){
  var id = req.params['id'];
  db.query(`SELECT  te.*, t.Title as training, e.Title as exercise FROM TrainingExercise te JOIN  Training t on te.TrainingId = t.id JOIN Exercises e on te.ExerciseId= e.id where te.isDeleted = false and te.id = ? LIMIT 1`,[id], function(error, result){
   
    if(error){
      console.log(error)
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No training"
      })
    }else{
      res.status(200).json({
        msg: "Training",
        result: result[0],
    })
    }
  })

})
//Prikaz svih vjezbi jednog treninga
app.get('/api/trainingexe/:id', function(req, res){
  var id = req.params['id'];
  db.query(`SELECT te.*, t.Title as training, e.Title as exercise FROM TrainingExercise te JOIN  Training t on te.TrainingId = t.id JOIN Exercises e on te.ExerciseId= e.id where te.isDeleted = false and t.id = ?`,[id] ,function(error, result){
    if(error){
      console.log(error)
      res.status(500).json({
        msg: "error"
      })
    }else if(result.length<=0){
      res.status(404).json({
        msg: "No Trainings"
      })
    }else{
      res.status(200).json({
        msg: "Categories",
        result: result,
    })
    }
  })
})
//Uređivanje vjezbe u treningu
app.put('/api/updateaexe/:id', function(req, res){
  const {RepetitionNumber, Series, Duration ,ExerciseId} = req.body;
  var id = req.params['id'];
      db.query(`UPDATE TrainingExercise SET RepetitionNumber = ${RepetitionNumber}, Series = ${Series}, Duration = ${Duration}, ExerciseId = ${ExerciseId} where id = ?`, [id], function(error,result){
        if(error){
          console.log(error)
          res.status(500).json({
            msg: "error",
            result:false
          })
        }else if(result.affectedRows==1){
          res.status(200).json({
            msg: "Uspjesno Uređeno!",
            result: true
          })
        }else{
          res.status(404).json({
            msg: "No exercises",
            result: false
          })
        }
      })
})
//brisanje vjezbe u treningu
app.get('/api/deltraexe/:id', function(req, res){
  var id = req.params['id'];
  console.log(id, " je id koji dobijemo u deletu");
     db.query("UPDATE TrainingExercise SET isDeleted = true where id = ?", [id], function(errorupd, resultupd){
       if(errorupd){
         console.log(errorupd);
         res.status(500).json({
           msg: "error"
         })
       }else{
         res.status(200).json({
           msg: "Uspjesno obrisano!",
         })
       }
 })
})


const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;