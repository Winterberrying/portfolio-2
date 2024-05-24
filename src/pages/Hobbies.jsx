import React, { useState } from 'react';

// Sample hobby data with multiple images
const hobbies = [
  {
    title: "Watching Korean Variety Shows 📺",
    description: "I’m a huge fan of Korean variety shows, spanning from romantic dating shows to thrilling puzzle-solving and challenge-based programs. I particularly enjoy the light-hearted, comedic ones like Running Man and I Live Alone that help me forget all my worries, as well as the soothing, calming ones like Lee Mujin Service.",
    images: [
      "/photos/hobby1/1.jpg",
      "/photos/hobby1/2.jpg",
      "/photos/hobby1/3.png",
      "/photos/hobby1/4.jpg",
      "/photos/hobby1/5.jpg",
    ]
  },
  {
    title: "Eating Desserts 🍦",
    description: "Eating desserts is one of my favorite pastimes. From rich chocolate cakes and creamy cheesecakes to fruity tarts and delicate pastries, I delight in exploring a wide variety of sweet treats. I love visiting different cafes and bakeries to discover new flavors and textures, and nothing beats the joy of indulging in a well-crafted dessert that perfectly satisfies my sweet tooth.",
    images: [
      "/photos/hobby2/1.jpeg",
      "/photos/hobby2/2.jpeg",
      "/photos/hobby2/3.jpeg",
    ]
  },
  {
    title: "Traveling 🌍",
    description: "I feel incredibly fortunate to have traveled to some amazing places around the world. In Malaysia, Johor Bahru (JB) offered vibrant culture and cuisine. Thailand provided unforgettable experiences in Bangkok, Khao Yai, Ayutthaya, and Kanchanaburi. Japan's Tokyo, Kyoto, and Osaka showcased a blend of tradition and modernity. Taiwan captivated me with Taipei, Taichung, Tainan, Kaohsiung, and Hualien. Australia impressed with the Gold Coast, Perth, Melbourne, and the Great Ocean Road. Each destination has enriched my life with unforgettable memories.",
    images: [
      "path/to/reading-image1.jpg", // Replace with your actual image paths
      "path/to/reading-image2.jpg",
      "path/to/reading-image3.jpg"
    ]
  },
  {
    title: "Listening to and playing Music 🎵",
    description: "Music is my life and soul. I was first introduced to the world of music through C-pop, with artists like JJ Lin, Jay Chou, and A-Lin. From there, I explored the classic bangers of the early 2010s and more recently, trendy K-pop songs. My passion for music extends beyond listening; I've had the opportunity to play various instruments. I started with the piano in primary school, moved on to the guitar in secondary school, learned the guzheng in junior college, and recently, I've been trying out the kalimba and picking up my guitar again.",
    images: [
      "/photos/hobby4/1.jpg",
      "/photos/hobby4/2.jpg",
      "/photos/hobby4/3.png",
      "/photos/hobby4/4.jpg",
    ]
  },
  {
    title: "Playing Video Games 🎮",
    description: "I used to be the kind of person who didn't understand how someone could spend their entire day gaming. That changed when my boyfriend introduced me to the world of video gaming. We started with RimWorld and Anno 1800, and I quickly found solace in cozy games like Stardew Valley and PuffPals. I'm now eagerly awaiting the release of Loftia, a game I'm a big fan of for its art style and gameplay. Gaming helps me destress and offers a whole new experience and world to explore.",
    images: [
      "/photos/hobby5/1.jpg",
      "/photos/hobby5/2.jpg",
      "/photos/hobby5/3.jpg",
      "/photos/hobby5/4.jpg",
    ]
  },
  {
    title: "Art and Puzzles 🎨",
    description: "Art and creative hobbies have always been a significant part of my life. I enjoy a variety of activities that allow me to express my creativity and challenge my mind. I've delved into punch needle art, converting photos into cartoonized versions, and diamond painting. Paint by numbers offers a relaxing way to create beautiful pieces, while claw machines, Rubik's cubes, and wire puzzles keep my problem-solving skills sharp. These hobbies provide a perfect balance of relaxation and mental stimulation, fueling my passion for creativity.",
    images: [
      "/photos/hobby6/1.jpg",
      "/photos/hobby6/2.jpg",
      "/photos/hobby6/3.jpg",
      "/photos/hobby6/4.jpg",
    ]
  }
];

// Carousel component
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64">
      <img src={images[currentIndex]} alt="Hobby" className="w-full h-full object-cover rounded-lg" />
      <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-r-lg">{"<"}</button>
      <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-l-lg">{">"}</button>
    </div>
  );
};

// HobbyPage component
const Hobbies = () => {
  return (
    <div className="flex flex-col items-center p-6 xl:ml-40 xl:mr-40">
      <h1 className="m-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-black text-center">Hobbies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card flex flex-col p-4 rounded-lg shadow-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 transition duration-300 transform w-full max-w-xs">
            <Carousel images={hobby.images} />
            <div className="p-4 flex flex-col items-start">
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
