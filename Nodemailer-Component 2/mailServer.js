const dotenv = require("dotenv");
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const PORT = 3005;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "djcarrillo06@gmail.com",
    pass: "Derivative##8"
  }
});


transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/send', (req, res, next) => {

  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  var mail = {
    from: name,
    to: email,
    subject: subject,
    text: message
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      res.json({
        status: 'success'
      });
    }
  });
});

app.listen((PORT), () => {
  console.log(`Server now listening on port: ${PORT}`);
});
