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

//Kreiranje novosti
app.post('/api/createNews',function(req, res){
  console.log(req.body)
  console.log(req.files)
const myFile = req.files.selectedFile; 
var Title = req.body.Title;
var Description = req.body.Description;

let date = new Date().toJSON().slice(0, 10);

myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
  if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
  }
 
  db.query(`INSERT INTO News(Title, Decsription, ImageName, CreationDate)
            VALUES('${Title}', '${Description}','${myFile.name}', '${date}' )`, 
            (error, result) => {
              if(error){
                console.log(error);
                res.json(false);
              }
              else{
                return res.json({name: myFile.name, path: `/${myFile.name}`});
              }
            } )
  // returing the response with file path and name
 
});
})

//slanje novosti
app.get('/api/news', function(req, res){
  db.query(`SELECT * FROM News`, function(error, result){
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

//Kreiranje kategorije

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
 


//Kreiranje treninga

//Display treninga

//display kategorija 

//Display treninga 

//Uređivanje treninga 

//Uređivanje kategorija 

//Brisanje treninga 

//brisanje kategorija 

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;