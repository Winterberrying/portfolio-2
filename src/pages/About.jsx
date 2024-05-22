// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl dark:text-black">Chien Hui</h1>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg leading-normal font-normal lg:text-xl dark:text-black">
          As a final year Computer Science student, I'm deeply passionate about algorithms and their uses in problem solving. 
          I'm particularly interested in <b>Artificial Intelligence and Machine Learning </b>and aspire to innovate and lead in 
          these fields.
          </p>
          <p className="text-lg leading-normal font-normal lg:text-xl dark:text-black">
          I've developed strong theoretical understanding and practical skills in software development and 
          AI/ML engineering during my university journey. In addition, I've explored <b>web development</b>, blending creativity 
          with technical precision. I'm driven by continuous learning and improvement and look forward to applying my skills 
          in real-world settings to contribute to impactful projects and collaborate with like-minded professionals.
          </p>
        </div>
        <div className="flex flex-col items-center space-x-4">
          <h2 className="m-4 text-xl font-bold tracking-tight md:text-2xl lg:text-3xl text-black uppercase">Work Experience</h2>
          <div className='flex space-x-4'>
            <p className='uppercase tracking-wide basis-1/2 text-right'>Dec 2023 — Mar 2024</p>
            <div className='basis-1/2'>
              <div className='flex space-x-2'>
                <p>Tech Intern ·</p>
                <p>SomTamLabs, Bangkok</p>
              </div>
              <p>DESC HERE</p>
            </div>
          </div>
          <div className='flex space-x-4'>
            <p className='uppercase tracking-wide basis-1/2 text-right'>Dec 2022 — May 2023</p>
            <div className='basis-1/2'>
              <div className='flex space-x-2'>
                <p>AI and Cyber Intern ·</p>
                <p>Home Team Science and Technology (HTX), Singapore</p>
              </div>
              <p>DESC HERE</p>
            </div>
          </div>
          <div className='flex space-x-4'>
            <p className='uppercase tracking-wide basis-1/2 text-right'>May 2021 — Jul 2021</p>
            <div className='basis-1/2'>
              <div className='flex space-x-2'>
                <p>Tech Project Intern ·</p>
                <p>Quality Zone Technologies (QTZ), Singapore</p>
              </div>
              <p>DESC HERE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
