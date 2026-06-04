// import { useEffect, useState } from 'react';
// import Navbar from './components/Navbar'; import Footer from './components/Footer';
// import Hero from './sections/Hero'; import About from './sections/About'; import Skills from './sections/Skills'; import Projects from './sections/Projects'; import Education from './sections/Education'; import Certifications from './sections/Certifications'; import Feedback from './sections/Feedback'; import Contact from './sections/Contact';

// export default function App(){
//  const [theme,setTheme]=useState(()=>localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
//  useEffect(()=>{document.documentElement.classList.toggle('dark',theme==='dark');localStorage.setItem('portfolio-theme',theme)},[theme]);
//  useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('is-visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);
//  return <><Navbar theme={theme} toggleTheme={()=>setTheme(theme==='dark'?'light':'dark')}/><main><Hero/><About/><Skills/><Projects/><Education/><Certifications/><Feedback/><Contact/></main><Footer/></>;
// }



import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Feedback from './sections/Feedback';
import Contact from './sections/Contact';

export default function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('portfolio-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </>
  );
}