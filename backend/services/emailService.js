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