import React, { useEffect } from 'react';
import * as Avatar from '@radix-ui/react-avatar';

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
    <div className="flex flex-col items-center p-6">
      <Avatar.Root className="inline-flex items-center justify-center overflow-hidden rounded-full w-56 h-56 mt-4">
        <Avatar.Image
          className="w-full h-full object-cover"
          src="/photos/avatar/ch.png"
          size="8"
          alt="Avatar"
        />
        <Avatar.Fallback
          className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700"
          delayMs={600}
        >
          CH
        </Avatar.Fallback>
      </Avatar.Root>
      <h1 className="mb-4 ml-4 mr-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-black text-center">Chien Hui</h1>
      <div className='flex flex-col items-center space-y-4 text-center'>
        <p className="text-lg leading-normal font-normal xl:text-xl text-gray-800">
        NTU CS'24 | AI & Data Science Specialisation | Creative and Analytical Problem Solver
        </p>
      </div>
      <h2 className="m-4 text-xl text-center uppercase font-extrabold tracking-tight md:text-2xl xl:text-3xl text-black">Work Experience</h2>
      <div className='space-y-4 w-full max-w-4xl'>
      <ExperienceCard 
          date="Jul 2024 — Oct 2024" 
          title="AI Engineer Intern" 
          company="Augmentus, Singapore" 
          description="Collaborated on an AI-powered defect detection system for airplane blades using computer vision and a Python-based GUI."
          skills={['Python', 'Computer Vision', 'Model Training']}
        />
        <ExperienceCard 
          date="Dec 2023 — Mar 2024" 
          title="Tech Intern" 
          company="SomTamLabs (STL), Bangkok" 
          description="Automated data extraction, designed UI concepts in Figma, and researched a RAG chatbot for a client project."
          skills={['Python', 'Flowise AI', 'Figma', 'Retrieval Augmented Generation (RAG)']}
        />
        <ExperienceCard 
          date="Dec 2022 — May 2023" 
          title="AI & Cyber Intern" 
          company="Home Team Science and Technology (HTX), Singapore" 
          description="Built a custom video downloader and contributed to a social media analytics pipeline, employing Python libraries, Scrapy and Selenium."
          skills={['Python', 'Web Scraping', 'Selenium', 'BeautifulSoup4']}
        />
        <ExperienceCard 
          date="May 2021 — Aug 2021" 
          title="IT Project Intern" 
          company="Quality Zone Technologies (QZT), Singapore" 
          description="Drafted technical specifications for grant proposals and conducted UAT to ensure software quality."
          skills={['Documentation', 'Technical Specifications Writing', "User Acceptance Testing"]}
        />
      </div>
    </div>
  );
};

const ExperienceCard = ({ date, title, company, description, skills }) => (
  <div className="experience-card flex flex-col xl:flex-row p-4 rounded-lg shadow-lg border border-gray-300 bg-white scale-105 transition duration-300 transform">
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
