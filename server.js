var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;
var nodemailer = require('nodemailer');

app.get("/", function (req, res) {
    console.log("GET req arrived");
    //
    transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
    
    
    //
        res.send("email sent!")
});

app.use(methodOverride());
app.use(bodyParser());
//app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);




var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // secure:true for port 465, secure:false for port 587
  auth: {
        user: 'rangohoney1@gmail.com',
        pass: 'Peyton2001'
    }
});



const mailOptions = {
  from: 'rangohoney1@gmail.com', // sender address
  to: 'rangohoney1@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};