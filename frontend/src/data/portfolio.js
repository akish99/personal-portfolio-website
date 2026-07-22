export const navLinks = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Feedback', 'feedback'],
  ['Contact', 'contact'],
];

export const skills = [
  { title: 'Programming Languages', items: ['JavaScript', 'Java', 'Python'] },
  { title: 'Frontend Development', items: ['HTML5', 'CSS3','React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  { title: 'Backend Development', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'MVC Architecture'] },
  { title: 'Databases', items: ['MongoDB', 'SQL', 'Supabase PostgreSQL'] },
  { title: 'Tools & Integrations', items: ['GitHub', 'VS Code', 'Axios', 'Chart.js', 'Passport.js', 'Multer', 'Cloudinary', 'bcrypt', 'Gemini API'] },
];

export const projects = [
  {
    title: 'React-Based Online Trading Platform Clone',
    description: 'A Zerodha-inspired trading dashboard with secure authentication, REST APIs, charts and a modular backend architecture.',
    highlights: ['JWT authentication', 'Axios API integration', 'Chart.js visualizations', 'MVC backend'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chart.js'],
    github: 'https://github.com/akish99/Zerodha-Project.git',
    image: '/assets/images/trading-platform.png',
  },
  {
    title: 'SigmaGPT — Full-Stack AI Chat Application',
    description: 'A secure ChatGPT-like web application powered by the Google Gemini API with user authentication and protected backend routes.',
    highlights: ['Gemini API integration', 'Secure user accounts', 'Password hashing', 'RESTful Express APIs'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'bcrypt'],
    github: 'https://github.com/akish99/Sigma-GPT.git',
    image: '/assets/images/sigmagpt.png',
  },
  {
    title: 'Airbnb-Inspired Rental Platform',
    description: 'A rental listing platform with account access control, image uploads and a scalable MVC structure.',
    highlights: ['Passport.js local strategy', 'Cloudinary image storage', 'Multer uploads', 'MVC architecture'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Passport.js', 'Cloudinary'],
    github: null,
    image: '/assets/images/rental-platform.png',
  },
];

export const experience = [
  {
    role: 'MERN Stack Development Intern',
    company: 'Vicharanashala, Lab for Education Design – IIT Ropar & ANNAM.AI',
    period: 'February 2026 – May 2026',
    description: 'Successfully completed a comprehensive full-stack development internship under the guidance of Prof. Sudarshan Iyengar and Dr. Pushpendra P. Singh. Leveraged the MERN stack on an AI-enabled learning platform to build, optimize, and deploy web applications.',
    offerLetter: '/assets/experience/offer-letter.pdf', // Ensure the filename matches your actual PDF
    certificate: '/assets/experience/completion-certificate.pdf' // Ensure the filename matches your actual PDF
  }
];

export const education = [
  { period: 'Sept 2024 — May 2028', title: 'B.E. in Computer Engineering', place: 'Thakur College of Engineering and Technology (Autonomous)', metric: 'Currently Pursuing' },
  { period: 'May 2024', title: 'MHT-CET', place: 'Maharashtra Common Entrance Test', metric: '97.7 Percentile' },
  { period: 'March 2024', title: 'Higher Secondary Certificate (HSC)', place: 'Maharashtra State Board', metric: '89%' },
  { period: 'March 2022', title: 'Secondary School Certificate (SSC)', place: 'Maharashtra State Board', metric: '86%' },
];


