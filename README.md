# Akish Anil Pandey — Personal Portfolio

A professional full-stack portfolio built with React, Tailwind CSS, Express.js, Supabase PostgreSQL and Nodemailer with Brevo SMTP.

## Included Features

- Responsive React portfolio UI
- Dark and light theme toggle saved in localStorage
- Smooth scrolling, reveal animations and polished hover effects
- Hero, About, Skills, Projects, Education, Certifications, Resume, Feedback and Contact sections
- Embedded resume preview and PDF download
- Supabase-backed contact form
- Supabase-backed moderated feedback form
- Owner-only Brevo SMTP notification emails for contact and feedback submissions
- No automated confirmation emails sent to visitors
- Visitor-facing success or error messages after submission
- Security basics: Helmet, CORS, rate limits, validation, sanitized form values and private environment variables

## Important Customizations

Update these before deployment:

1. Replace `frontend/public/assets/images/profile-placeholder.svg` with your profile photo if desired.
2. Replace project SVG placeholders with screenshots.
3. Add your LinkedIn URL in `frontend/src/sections/Hero.jsx` and `frontend/src/components/Footer.jsx`.
4. Add missing GitHub and live demo URLs in `frontend/src/data/portfolio.js`.
5. Replace the PDF in `frontend/public/assets/resume/` whenever your resume changes.

## 1. Supabase Setup

1. Create a Supabase project.
2. Open **SQL Editor** and run `database/supabase-schema.sql`.
3. Copy your Supabase project URL and private secret/service-role key.
4. Duplicate `backend/.env.example` as `backend/.env` and enter your values.

Feedback moderation is intentionally simple: open **Supabase → Table Editor → feedback** and change `status` from `pending` to `approved` or `rejected`. Only approved reviews appear publicly.

## 2. Brevo SMTP Setup

1. Create a Brevo account.
2. Add and verify your sender email.
3. Generate SMTP credentials.
4. Add them to `backend/.env`.

The backend only sends notifications to `OWNER_EMAIL`. Visitors do not receive emails.

## 3. Local Development

```bash
npm install
npm run install:all
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
npm run dev
```

Frontend: `http://localhost:5173`  
Backend API: `http://localhost:5000/api`

## 4. Environment Variables

Backend (`backend/.env`):

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SECRET_KEY=your-secret-key
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your-brevo-smtp-username
SMTP_PASS=your-brevo-smtp-key
OWNER_EMAIL=akishpandey2006@gmail.com
FROM_EMAIL=your-verified-brevo-sender@example.com
```

Frontend (`frontend/.env`):

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## 5. Deployment

- Deploy the frontend to Vercel or Netlify.
- Deploy the backend to Render, Railway or another Node-compatible platform.
- Add all backend environment variables through the host dashboard.
- Set `FRONTEND_URL` to your deployed frontend URL.
- Set `VITE_API_BASE_URL` to your deployed backend API URL and rebuild the frontend.

## Notes

- Never commit `.env` files.
- Never place Supabase secret keys or SMTP credentials in frontend code.
- The LinkedIn URL was not present as a visible URL in the provided resume, so placeholder links remain for you to replace.
