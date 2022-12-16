var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors')
app.use(bodyParser.json());
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
db.query("SELECT * from Users",(result, error) => {console.log(result, error)} )
//Registracija Usera
app.post('/api/registerUser', function (req,res){
  const {UserName,FirstName, LastName,  Email, PhoneNumber} = req.body
  db.query(
    `SELECT UserName FROM Users
    WHERE UserName = '${UserName}'`,
    function (error, result){
      if(error){
        console.log(error);
        res.json(false);
      }
      else{
        if(result.length>0){
          res.json(false);
        }
        else{
          db.query(`INSERT INTO Users (UserName, FirstName, LastName, Email, PhoneNumber)
          VALUE('${UserName}', '${FirstName}', '${LastName}', '${Email}', '${PhoneNumber}')`),
          (error, result) => {
            console.log(error + " " + result)
          }
         
        }
      }
    }

  )
})
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;