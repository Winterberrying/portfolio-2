import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const Projects = () => {
  const projects = [
    {
      id: 1,
      year: "Aug 2023 - May 2024",
      name: "NTU FYP: Sentiment Analysis on Student Well-being in Singapore",
      description:
        "Developed a sentiment analysis pipeline with Reddit data, fine-tuning BART for 75% accuracy via 10-fold cross-validation. Processed 7,000+ posts, applied LDA topic modeling to identify stressors, and found significant polarity-well-being correlation (Chi-square test). Earned an A- for the project.",
      link: "https://docs.google.com/presentation/d/1z3pDBSw5eFEdUg_44JWskqXxgWePFJUIdUip1ksVRS4/edit?usp=sharing",
      image: "",
    },
    {
      id: 2,
      year: "May 2023",
      name: "AI Aifinity Hackathon: AI4GOOD - Crossing the road entity detection",
      description:
        "Participated as a team of 4 to develop a python script that helps detect elderly and disabled people crossing the road using AWS Rekognition service. Shortlisted for the Aifinity 2023 AI Hackathon final round.",
      link: "https://docs.google.com/presentation/d/1Et7j7V0nPRXRgXhbJ8V-58p7gNFEGR5A9F0qAO8UjG0/edit?usp=sharing",
      image: "",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-black text-center">
        Projects
      </h1>
      <h2 className="mb-8 text-lg leading-normal font-normal xl:text-xl text-gray-800 text-center">
        Here are some projects done by me / as a team.
      </h2>
      <div className="flex flex-col space-y-6 w-full max-w-4xl">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            year={project.year}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ year, name, description, image, link }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start p-6 rounded-xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition duration-300">
    <Avatar.Root className="w-24 h-24 lg:w-32 lg:h-32 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
      <Avatar.Image className="w-full h-full object-cover rounded-full" src={image} alt={name} />
      <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700 text-2xl rounded-full">
        {name[0]}
      </Avatar.Fallback>
    </Avatar.Root>
    <div className="flex flex-col">
      <small className="text-gray-500 mb-1">{year}</small>
      <h3 className="text-xl font-bold text-black mb-2">{name}</h3>
      <p className="text-sm text-gray-800 mb-3 hidden md:block">{description}</p>
      {link && (
        <a
          className="text-sm text-blue-600 hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  </div>
);


export default Projects;
