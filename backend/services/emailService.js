// import nodemailer from 'nodemailer';
// const required=['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','OWNER_EMAIL','FROM_EMAIL'];
// function mailEnabled(){return required.every(key=>process.env[key]);}
// function transporter(){return nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT),secure:Number(process.env.SMTP_PORT)===465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}})}
// export async function notifyOwner({subject,text}){if(!mailEnabled()){console.warn('SMTP is not configured. Submission stored, but email notification skipped.');return;}await transporter().sendMail({from:process.env.FROM_EMAIL,to:process.env.OWNER_EMAIL,subject,text});}


import nodemailer from 'nodemailer';

const requiredVariables = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'OWNER_EMAIL',
  'FROM_EMAIL',
];

function isMailEnabled() {
  return requiredVariables.every((key) => process.env[key]);
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function notifyOwner({ subject, text, replyTo }) {
  if (!isMailEnabled()) {
    console.warn(
      'SMTP is not configured. Submission stored, but email notification skipped.',
    );
    return;
  }

  await createTransporter().sendMail({
    from: `Akish Portfolio <${process.env.FROM_EMAIL}>`,
    to: process.env.OWNER_EMAIL,
    replyTo,
    subject,
    text,
  });
}