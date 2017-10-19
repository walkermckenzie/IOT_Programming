var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;
var nodemailer = require('nodemailer');

app.get("/", function (req, res) {
    console.log("GET req arrived")
        res.send("hello world")
});

app.use(methodOverride());
app.use(bodyParser());
//app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'youremail@address.com',
        pass: 'yourpassword'
    }
});

const mailOptions = {
  from: 'rangohoney1@gmail.com', // sender address
  to: 'rangohoney1@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};