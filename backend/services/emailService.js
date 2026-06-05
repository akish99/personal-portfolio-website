// // import nodemailer from 'nodemailer';
// // const required=['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','OWNER_EMAIL','FROM_EMAIL'];
// // function mailEnabled(){return required.every(key=>process.env[key]);}
// // function transporter(){return nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT),secure:Number(process.env.SMTP_PORT)===465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}})}
// // export async function notifyOwner({subject,text}){if(!mailEnabled()){console.warn('SMTP is not configured. Submission stored, but email notification skipped.');return;}await transporter().sendMail({from:process.env.FROM_EMAIL,to:process.env.OWNER_EMAIL,subject,text});}


// import nodemailer from 'nodemailer';

// const requiredVariables = [
//   'SMTP_HOST',
//   'SMTP_PORT',
//   'SMTP_USER',
//   'SMTP_PASS',
//   'OWNER_EMAIL',
//   'FROM_EMAIL',
// ];

// function isMailEnabled() {
//   return requiredVariables.every((key) => process.env[key]);
// }

// function createTransporter() {
//   return nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: Number(process.env.SMTP_PORT) === 465,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });
// }

// export async function notifyOwner({ subject, text, replyTo }) {
//   if (!isMailEnabled()) {
//     console.warn(
//       'SMTP is not configured. Submission stored, but email notification skipped.',
//     );
//     return;
//   }

//   await createTransporter().sendMail({
//     from: `Akish Portfolio <${process.env.FROM_EMAIL}>`,
//     to: process.env.OWNER_EMAIL,
//     replyTo,
//     subject,
//     text,
//   });
// }




const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

function isEmailConfigured() {
  return Boolean(
    process.env.BREVO_API_KEY &&
      process.env.OWNER_EMAIL &&
      process.env.FROM_EMAIL,
  );
}

export async function notifyOwner({ subject, text, replyTo }) {
  if (!isEmailConfigured()) {
    console.warn(
      'Brevo API is not configured. Submission stored, but email notification skipped.',
    );
    return;
  }

  const payload = {
    sender: {
      name: 'Akish Portfolio',
      email: process.env.FROM_EMAIL,
    },
    to: [
      {
        email: process.env.OWNER_EMAIL,
        name: 'Akish Pandey',
      },
    ],
    subject,
    textContent: text,
  };

  if (replyTo) {
    payload.replyTo = {
      email: replyTo,
    };
  }

  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': process.env.BREVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();

    throw new Error(
      `Brevo email API failed with status ${response.status}: ${errorBody}`,
    );
  }
}
