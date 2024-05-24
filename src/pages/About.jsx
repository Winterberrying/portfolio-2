import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.experience-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-float-in');
        }
      });
    });

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <div className="flex flex-col items-center p-6 xl:ml-40 xl:mr-40">
      <h1 className="m-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-black text-center">Chien Hui</h1>
      <div className='flex flex-col items-center space-y-4 text-center'>
        <p className="text-lg leading-normal font-normal xl:text-xl text-gray-800">
          As a final year Computer Science student, I'm deeply passionate about algorithms and their uses in problem solving. 
          I'm particularly interested in <b>Artificial Intelligence and Machine Learning</b> and aspire to innovate and lead in 
          these fields.
        </p>
        <p className="text-lg leading-normal font-normal xl:text-xl text-gray-800">
          I've developed strong theoretical understanding and practical skills in software development and 
          AI/ML engineering during my university journey. In addition, I've explored <b>Web Development</b>, blending creativity 
          with technical precision. I'm driven by continuous learning and improvement and look forward to applying my skills 
          in real-world settings to contribute to impactful projects and collaborate with like-minded professionals.
        </p>
      </div>
      <h2 className="m-4 text-xl text-center uppercase font-extrabold tracking-tight md:text-2xl xl:text-3xl text-black">Work Experience</h2>
      <div className='space-y-4 w-full max-w-4xl'>
        <ExperienceCard 
          date="Dec 2023 — Mar 2024" 
          title="Tech Intern" 
          company="SomTamLabs (STL), Bangkok" 
          description="Designed conceptual graphics of the project to enhance stakeholder understanding. Developed a grouping algorithm for the project. Created a web scraper to generate JSON files with essential data, to help build an AI-chatbot. Investigated chatbot integration options using Flowise AI to enhance user engagement."
          skills={['Python', 'Flowise AI', 'Figma']}
        />
        <ExperienceCard 
          date="Dec 2022 — May 2023" 
          title="AI & Cyber Intern" 
          company="Home Team Science and Technology (HTX), Singapore" 
          description="Contributed to AI projects aimed at enhancing cybersecurity measures. Developed machine learning models to detect and prevent cyber threats."
          skills={['Python', 'Web Scraping', 'Selenium', 'BeautifulSoup4']}
        />
        <ExperienceCard 
          date="May 2021 — Aug 2021" 
          title="Project Intern" 
          company="Quality Zone Technologies (QZT), Singapore" 
          description="Assisted in various software development projects, focusing on quality assurance and testing. Implemented automated test scripts and performed manual testing."
          skills={['Documentation', 'Technical Specifications Writing', "User Acceptance Testing"]}
        />
      </div>
    </div>
  );
};

const ExperienceCard = ({ date, title, company, description, skills }) => (
  <div className="experience-card flex flex-col xl:flex-row p-4 rounded-lg shadow-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 transition duration-300 transform">
    <div className="xl:w-1/4 xl:text-right sm:text-left md:text-left pr-4 xl:pr-8">
      <p className="leading-7 text-sm font-semibold text-gray-600">{date}</p>
    </div>
    <div className="xl:w-3/4">
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-md font-medium text-gray-800">{company}</p>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <li key={skill} className="bg-[#aabfb8] text-gray-800 text-xs font-semibold px-2 py-1 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default About;
