var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fileUpload = require('express-fileupload');
var cors = require('cors')
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
  const {Username,FirstName, LastName,  Email, PhoneNumber} = req.body
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
        }
        else{
       
          db.query(`INSERT INTO Users (Username, FirstName, LastName, Email, PhoneNumber, RoleId)
          VALUE('${Username}', '${FirstName}', '${LastName}', '${Email}', '${PhoneNumber}', 3 )`,
          (error, result) => {
            if (error) {
              console.log(error)
              res.json(false)
          }
          else {
              res.json(true)
          }
          })
        }
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


const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;