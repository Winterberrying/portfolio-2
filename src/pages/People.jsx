import React, { useState } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const People = () => {
  const [currentCard, setCurrentCard] = useState(1);

  const people = [
    {
      year: "2023",
      name: "AIP Kids 🌆",
      description: "Friends from my overseas internship in Bangkok, Thailand. We shared many fond memories and experiences together.",
      image: "/photos/avatar/bkk.png"
    },
    {
      year: "2001",
      name: "Family 👩‍👧‍👦",
      description: "The people who have been there for me since day one, my family. They have supported me through thick and thin, and I am forever grateful for their love and care.",
      image: "/photos/avatar/fam.png"
    },
    {
      year: "2013",
      name: "S 🌼",
      description: "My childhood best friend, we met in 2009 and grew closer around 2012-2013. She is full of positive energy, discipline, tenacity, and passion.",
      image: "/photos/avatar/st.png"
    },
    {
      year: "2014",
      name: "Day 🐈",
      description: "My first friend from secondary school, a cool and kind hearted soul.",
      image: "/photos/avatar/day.png"
    },
    {
      year: "2018",
      name: "Guzheng Friends🎶 & 1824Girls 👧🏻",
      description: "My joy and support in JC, we shared many fond memories and experiences together.",
      image: "/photos/avatar/jc.png"
    },
    {
      year: "2021",
      name: "J 💎",
      description: "A kind and caring soul who has been there for me through thick and thin. She is tough and resilient, the definition of strong, independent woman.",
      image: "/photos/avatar/j.png"
    },
    {
      year: "2022",
      name: "R 💕",
      description: "My boyfriend, the person who was there during my lowest point, who helped me pick myself up and find my way back to the light.",
      image: "/photos/avatar/r.png"
    },
    {
      year: "2022",
      name: "A & C 🌟",
      description: "Two of my project mates who I worked with on a project in 2022. They are both talented, hardworking, and dedicated individuals.",
      image: "/photos/avatar/dinner.png"
    },
    {
      year: "2023",
      name: "D 🎀",
      description: "My desk mate for a module in 2023, she is a kind and caring soul who is always there to lend a listening ear.",
      image: "/photos/avatar/d.png"
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % people.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + people.length) % people.length);
  };

  const getDisplayedPeople = () => {
    const prevIndex = (currentCard - 1 + people.length) % people.length;
    const nextIndex = (currentCard + 1) % people.length;
    return [people[prevIndex], people[currentCard], people[nextIndex]];
  };

  return (
    <div className="flex flex-col items-center p-6 xl:ml-40 xl:mr-40">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-black text-center">People</h1>
      <h2 className="mb-8 text-lg leading-normal font-normal xl:text-xl text-gray-800 text-center">
        Here are some of the people who have come into my life, and for whom I am extremely grateful.
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-4 space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
        <button
          onClick={handlePrev}
          className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Previous
        </button>
        <div className="flex justify-center space-x-0 lg:space-x-4 w-full max-w-4xl">
          {getDisplayedPeople().map((person, index) => (
            <PeopleCard
              key={person.name}
              year={person.year}
              name={person.name}
              description={person.description}
              image={person.image}
              isHighlighted={index === 1}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
        >
          Next
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const PeopleCard = ({ year, name, description, image, isHighlighted }) => (
  <div className={`flex flex-col items-center p-4 rounded-lg shadow-lg border ${isHighlighted ? 'border-black bg-white scale-105' : 'border-gray-300 bg-gray-100'} transition duration-300 transform w-full lg:w-1/3`}>
    <small className="mb-2 text-gray-600">{year}</small>
    <Avatar.Root className="inline-flex items-center justify-center overflow-hidden rounded-full w-24 h-24 lg:w-48 lg:h-48 mb-4">
      <Avatar.Image
        className="w-full h-full object-cover"
        src={image}
        alt={name}
      />
      <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
        {name[0]}
      </Avatar.Fallback>
    </Avatar.Root>
    <h3 className="text-xl font-bold text-black text-center">{name}</h3>
    <p className="text-md text-gray-800 text-center">{description}</p>
  </div>
);

export default People;
