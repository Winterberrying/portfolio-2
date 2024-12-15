import React, { useState } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [currentCard, setCurrentCard] = useState(1);

  const projects = [
    {
      id: 3,
      year: "",
      name: "",
      description: "",
      link: "",
      image: ""
    },
    {
      id: 1,
      year: "Aug 2023 - May 2024",
      name: "NTU FYP: Sentiment Analysis on Student Well-being in Singapore",
      description: "Developed a sentiment analysis pipeline with Reddit data, fine-tuning BART for 75% accuracy via 10-fold cross-validation. Processed 7,000+ posts, applied LDA topic modeling to identify stressors, and found significant polarity-well-being correlation (Chi-square test). Earned an A- for the project.",
      link: "https://docs.google.com/presentation/d/1z3pDBSw5eFEdUg_44JWskqXxgWePFJUIdUip1ksVRS4/edit?usp=sharing",
      image: ""
    },
    {
      id: 2,
      year: "May 2023",
      name: "AI Aifinity Hackathon: AI4GOOD - Crossing the road entity detection",
      description: "Participated as a team of 4 to develop a python script that helps detect elderly and disabled people crossing the road using AWS Rekognition service. Shortlisted for the Aifinity 2023 AI Hackathon final round.",
      link: "https://docs.google.com/presentation/d/1Et7j7V0nPRXRgXhbJ8V-58p7gNFEGR5A9F0qAO8UjG0/edit?usp=sharing",
      image: ""
    },
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % projects.length);
  };
  
  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  const getDisplayedProjects = () => {
    const isSmallScreen = window.innerWidth < 1536;
  
    if (isSmallScreen) {
      return [projects[currentCard]];
    } else {
      const prevIndex = (currentCard - 1 + projects.length) % projects.length;
      const nextIndex = (currentCard + 1) % projects.length;
      return [projects[prevIndex], projects[currentCard], projects[nextIndex]];
    }
  };

  return (
    <div className="flex flex-col items-center p-6 xl:ml-20 xl:mr-20">
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-black text-center">
      Projects
    </h1>
    <h2 className="mb-8 text-lg leading-normal font-normal xl:text-xl text-gray-800 text-center">
      Here are some projects done by me / as a team.
    </h2>
    <div className="flex flex-row w-full justify-between space-x-4 lg:mb-8 md:mb-8 sm:mb-2">
      <button
        onClick={handlePrev}
        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
      >
        <FaArrowLeft className="mr-2" />
        Previous
      </button>
      <button
        onClick={handleNext}
        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
      >
        Next
        <FaArrowRight className="ml-2" />
      </button>
    </div>
    <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-4 space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="flex justify-center space-x-0 lg:space-x-4 w-full max-w-5xl">
        {getDisplayedProjects().map((project, index) => (
          <ProjectCard
            key={project.id}
            year={project.year}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
            isHighlighted={index === 1}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

const ProjectCard = ({ year, name, description, image, isHighlighted, link }) => (
  <div
    className={`flex flex-col items-center p-4 rounded-lg shadow-lg border ${isHighlighted ? 'border-black bg-white scale-105' : 'border-gray-300 bg-gray-100'} transition duration-300 transform w-full`}
  >
    <small className="mb-2 text-gray-600">{year}</small>
    <Avatar.Root className="inline-flex items-center justify-center overflow-hidden w-24 h-24 lg:w-48 lg:h-48 mb-4">
      <Avatar.Image className="w-full h-full object-cover" src={image} alt={name} />
      <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
        {name[0]}
      </Avatar.Fallback>
    </Avatar.Root>
    <h3 className="text-xl font-bold text-black text-center">{name}</h3>
    <p className="text-md text-gray-800 text-center">{description}</p>
    <br />
    <a className="text-md text-center text-blue-500" href={link} target="_blank" rel="noopener noreferrer">
    Link to Project
    </a>
  </div>
);


export default Projects;









// import React from 'react'

// const Projects = () => {
//   return (
//     <div className="flex flex-col items-center p-6">
//       <h1 className="m-8 text-4xl font-extrabold tracking-tight text-center md:text-5xl lg:text-6xl text-black">Projects</h1>
//       <div className="flex flex-col space-y-4">
//         Hello
//       </div>
//     </div>
//   )
// }

// export default Projects



/*

1. NNDL
2. ML Kaggle
3. DAM
4. FYP
5. IA
6. IR
7. CV
8. Aifinity

---

1. NLP: FYP
2. ML: Kaggle Competition 
3. NNDL: -
4. DAM: -
5. IA: -
6. CV: -
7. IR: -

*/