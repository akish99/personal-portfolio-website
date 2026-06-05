import { supabase } from '../config/supabase.js';
import { notifyOwner } from '../services/emailService.js';
import { clean } from '../utils/sanitize.js';

export async function listApproved(req, res, next) {
  try {
    const { data, error } = await supabase
      .from('feedback')
      .select('id,name,role,rating,message,created_at')
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
      .limit(12);

    if (error) throw error;
    res.json({ feedback: data });
  } catch (err) {
    next(err);
  }
}

export async function createFeedback(req, res, next) {
  try {
    const name = clean(req.body.name);
    const role = clean(req.body.role);
    const message = clean(req.body.message);
    const rating = Number(req.body.rating);

    if (!name || !message || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({
        message: 'Please enter your name, feedback and a valid rating.'
      });
    }

    if (name.length > 100 || role.length > 150 || message.length > 1000) {
      return res.status(400).json({
        message: 'One or more fields are too long.'
      });
    }

    const { error } = await supabase.from('feedback').insert({
      name,
      role,
      rating,
      message,
      status: 'pending'
    });

    if (error) throw error;

    await notifyOwner({
      subject: `Portfolio feedback: ${rating}/5 from ${name}`,
      text: `New feedback submission awaiting moderation\n\nName: ${name}\nRole: ${role || 'Not provided'}\nRating: ${rating}/5\n\nFeedback:\n${message}\n\nApprove or reject it from the Supabase Table Editor.`
    });

    res.status(201).json({
      message: 'Thank you for your feedback. It has been submitted for review.'
    });
  } catch (err) {
    next(err);
  }
}