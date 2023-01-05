var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const bcrypt = require("bcrypt");
const saltRounds = 10;
var fileUpload = require('express-fileupload');

const cookieParser = require('cookie-parser');
const cookie = require('cookie-signature');
const session = require('express-session');
var cors = require('cors');


// const { response } = require('express');
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors(
	{
		origin: '*'
	}
))

app.use(session({
  key: 'userId',
  secret: SESSION_SECRET,
  store: sessionStore,
  proxy: true,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
      maxAge: 120 * 60 * 1000, //minutes * seconds * miliseconds
      secure: true,
      httpOnly: true,
      sameSite: 'none'
  }
}));


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
              VALUE('${Username}', '${FirstName}', '${LastName}', '${Email}', '${PhoneNumber}', 3 , '${hash}')`,
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
  db.query(
    `SELECT * FROM Users
    WHERE Username = '${Username}'`,
    function (error, result){
      if(error != null){
        res.status(500).send(error.message);
        console.log(error);
      }
      else if(result.length>0){
        bcrypt.compare(Password, result[0].Password)
        .then(res => {
          console.log(res) // return true
        })
        .catch(err => console.error(err.message))
      }
      else{
        console.log("Username not found");
      }

    }
    
    )

})

//Kreiranje novosti
app.post('/api/createNews',function(req, res){
  console.log(req.body)
  console.log(req.files)
const myFile = req.files.selectedFile; //OVO NE PREPOZNAJE :(
var Title = req.body.Title;
var Description = req.body.Description;

var date = Date.now();
console.log(date)

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

 
} )

// app.get('/api/myprofile',
// async (req,res)=> {

//   db.query(`SELECT * FROM Users
//   WHERE Username = '${Username}'`,
//   (error,result)=>{
//     if(error){
//       console.log('error');
//       res.send('an error occurred');
//     }else{
//       res.send(result);
//     }
//    }
//   );
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;