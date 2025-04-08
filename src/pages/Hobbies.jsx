import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const hobbies = [
  {
    title: "Traveling",
    image: "/photos/hobby/3.png",
    description: "I feel incredibly fortunate to have traveled to some amazing places around the world. In Malaysia, Johor Bahru (JB) offered vibrant culture and cuisine. Thailand provided unforgettable experiences in Bangkok, Khao Yai, Ayutthaya, and Kanchanaburi. Japan's Tokyo, Kyoto, and Osaka showcased a blend of tradition and modernity. Taiwan captivated me with Taipei, Taichung, Tainan, Kaohsiung, and Hualien. Australia impressed with the Gold Coast, Perth, Melbourne, and the Great Ocean Road. Each destination has enriched my life with unforgettable memories.",
  },
  {
    title: "Listening to and playing Music",
    image: "/photos/hobby/4.png",
    description: "Music is my life and soul. I was first introduced to the world of music through C-pop, with artists like JJ Lin, Jay Chou, and A-Lin. From there, I explored the classic pop bangers of the early 2010s and more recently, trendy K-pop songs. My passion for music extends beyond listening; I've had the opportunity to play various instruments. I started with the piano in primary school, moved on to the guitar in secondary school, learned the guzheng in junior college, and recently, I've been trying out the kalimba and picking up my guitar again.",
  },
  {
    title: "Running",
    image: "/photos/hobby/7.png",
    description: "I took up running as a hobby in mid-2024 while navigating post-graduation anxiety and uncertainty. It became my way to de-stress and stay active during a challenging time.",
  },
];

const Hobbies = () => {
  const [expandedIndexes, setExpandedIndexes] = React.useState({});

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-col items-center p-6 xl:ml-10 xl:mr-10 sm:ml-2 sm:mr-2">
      <h1 className="m-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-black text-center">Hobbies</h1>
      <div className="space-y-6 w-full max-w-4xl">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card flex flex-col sm:flex-row items-center p-4 rounded-lg shadow-lg border border-gray-300 bg-gray-100 transition duration-300">
            <Avatar.Root className="flex-shrink-0 inline-flex items-center justify-center overflow-hidden rounded-full w-32 h-32 md:w-30 md:h-30 mb-4 md:mb-0 md:mr-4">
              <Avatar.Image
                className="object-contain"
                src={hobby.image}
                alt={hobby.title}
                style={{ width: 'auto', height: '100%' }}
              />
              <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
                {hobby.title[0]}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-black mb-2">{hobby.title}</h3>
              <p className="text-md font-medium text-gray-700">
                {expandedIndexes[index] ? hobby.description : hobby.description.slice(0, 120) + '...'}
                <button onClick={() => toggleExpand(index)} className="text-blue-600 hover:underline ml-1">
                  {expandedIndexes[index] ? 'Show less' : 'Read more'}
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
