const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', (req, res) => {
  const { firstName, email, comment } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO, 
    subject: 'New Contact Form Submission',
    text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${comment}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.post('/api/submit-form', (req, res) => {
  const { firstName, email, type, comment } = req.body;
  
  // Here you would typically handle saving the data to a database or other logic
  console.log('Form data received:', req.body);

  // Respond to the client that the data was received successfully
  res.status(200).json({ message: "Form data submitted successfully" });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});