export default function(req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
    secure: true
  });
  //
  const mailData = {
    from: req.body.mailerState.name,
    to: process.env.EMAIL + '@gmail.com',
    subject: `Message From ${req.body.mailerState.name}`,
    text: req.body.mailerState.message + ' | Sent from: ' + req.body.mailerState.email,
    html: `<div>${req.body.mailerState.message}</div><p>Sent from:
    ${req.body.mailerState.email}</p>`
  };
  transporter.sendMail(mailData, function(err, info) {
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
}
