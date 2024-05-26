import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const hobbies = [
  {
    title: "Watching Korean Variety Shows 📺",
    image: "/photos/hobby/1.png",
    description: "I’m a huge fan of Korean variety shows, spanning from romantic dating shows to thrilling puzzle-solving and challenge-based programs. I particularly enjoy the light-hearted, comedic ones like Running Man and I Live Alone that help me forget all my worries, as well as the soothing, calming ones like Lee Mujin Service.",
  },
  {
    title: "Eating Desserts 🍦",
    image: "/photos/hobby/2.png",
    description: "Eating desserts is one of my favorite pastimes. From rich chocolate cakes and creamy cheesecakes to fruity tarts and delicate pastries, I find delight in exploring a wide variety of sweet treats. I love visiting different cafes and bakeries to discover new flavors and textures, and nothing beats the joy of indulging in a well-crafted dessert that perfectly satisfies my sweet tooth.",
  },
  {
    title: "Traveling 🌍",
    image: "/photos/hobby/3.png",
    description: "I feel incredibly fortunate to have traveled to some amazing places around the world. In Malaysia, Johor Bahru (JB) offered vibrant culture and cuisine. Thailand provided unforgettable experiences in Bangkok, Khao Yai, Ayutthaya, and Kanchanaburi. Japan's Tokyo, Kyoto, and Osaka showcased a blend of tradition and modernity. Taiwan captivated me with Taipei, Taichung, Tainan, Kaohsiung, and Hualien. Australia impressed with the Gold Coast, Perth, Melbourne, and the Great Ocean Road. Each destination has enriched my life with unforgettable memories.",
  },
  {
    title: "Listening to and playing Music 🎵",
    image: "/photos/hobby/4.png",
    description: "Music is my life and soul. I was first introduced to the world of music through C-pop, with artists like JJ Lin, Jay Chou, and A-Lin. From there, I explored the classic pop bangers of the early 2010s and more recently, trendy K-pop songs. My passion for music extends beyond listening; I've had the opportunity to play various instruments. I started with the piano in primary school, moved on to the guitar in secondary school, learned the guzheng in junior college, and recently, I've been trying out the kalimba and picking up my guitar again.",
  },
  {
    title: "Playing Video Games 🎮",
    image: "/photos/hobby/5.png",
    description: "I used to be the kind of person who didn't understand how someone could spend their entire day gaming. That changed when my boyfriend introduced me to the world of video gaming. We started with RimWorld, PlateUp and Anno 1800, and I quickly found solace in cozy games like Stardew Valley and PuffPals. I'm now eagerly awaiting the release of Loftia, a game I'm a big fan of for its art style and gameplay. Gaming helps me destress and offers a whole new experience and world to explore.",
  },
  {
    title: "Art and Puzzles 🎨",
    image: "/photos/hobby/6.png",
    description: "Art and creative hobbies have always been a significant part of my life. I enjoy a variety of activities that allow me to express my creativity and challenge my mind. I've delved into punch needle art, converting photos into cartoonized versions, and diamond painting. Paint by numbers offers a relaxing way to create beautiful pieces, while claw machines, Rubik's cubes, and wire puzzles keep my problem-solving skills sharp. These hobbies provide a perfect balance of relaxation and mental stimulation, fueling my passion for creativity.",
  }
];

const Hobbies = () => {
  return (
    <div className="flex flex-col items-center p-6 xl:ml-40 xl:mr-40">
      <h1 className="m-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-black text-center">Hobbies</h1>
      <div className="space-y-6 w-full max-w-4xl">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card flex flex-col sm:flex-row items-center p-4 rounded-lg shadow-lg border border-gray-300 bg-gray-100 transition duration-300">
            <Avatar.Root className="flex-shrink-0 inline-flex items-center justify-center overflow-hidden rounded-full w-48 h-48 mb-4 sm:mb-0 sm:mr-4">
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
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-2xl font-bold text-black mb-2">{hobby.title}</h3>
              <p className="text-md font-medium text-gray-700">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
