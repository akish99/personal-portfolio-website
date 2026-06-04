// import { supabase } from '../config/supabase.js'; import { notifyOwner } from '../services/emailService.js'; import { clean,isEmail } from '../utils/sanitize.js';
// export async function createContact(req,res,next){try{const name=clean(req.body.name),email=clean(req.body.email),subject=clean(req.body.subject),message=clean(req.body.message);if(!name||!isEmail(email)||!subject||!message)return res.status(400).json({message:'Please complete every field using a valid email address.'});if(name.length>100||email.length>255||subject.length>200||message.length>2000)return res.status(400).json({message:'One or more fields are too long.'});const{error}=await supabase.from('contact_messages').insert({name,email,subject,message});if(error)throw error;await notifyOwner({subject:`Portfolio contact: ${subject}`,text:`New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`});return res.status(201).json({message:'Thank you for reaching out. Your message has been submitted successfully.'});}catch(err){next(err)}}


import { supabase } from '../config/supabase.js';
import { notifyOwner } from '../services/emailService.js';
import { clean, isEmail } from '../utils/sanitize.js';

export async function createContact(req, res, next) {
  try {
    const name = clean(req.body.name);
    const email = clean(req.body.email);
    const subject = clean(req.body.subject);
    const message = clean(req.body.message);

    if (!name || !isEmail(email) || !subject || !message) {
      return res.status(400).json({
        message: 'Please complete every field using a valid email address.',
      });
    }

    if (
      name.length > 100 ||
      email.length > 255 ||
      subject.length > 200 ||
      message.length > 2000
    ) {
      return res.status(400).json({
        message: 'One or more fields are too long.',
      });
    }

    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      subject,
      message,
    });

    if (error) throw error;

    await notifyOwner({
      subject: `Portfolio contact: ${subject}`,
      replyTo: email,
      text: `New contact form submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
    });

    return res.status(201).json({
      message:
        'Thank you for reaching out. Your message has been submitted successfully.',
    });
  } catch (error) {
    next(error);
  }
}