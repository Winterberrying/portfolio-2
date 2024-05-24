import React from 'react';
import { Chrono } from 'react-chrono';

const People = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to destroyers at Dunkirk.",
      cardDetailedText: "The evacuation, known as the Miracle of Dunkirk, saw 338,226 soldiers rescued by a hastily assembled fleet of over 800 boats.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://linktoyourimage.com/dunkirk.jpg"
        }
      }
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to destroyers at Dunkirk.",
      cardDetailedText: "The evacuation, known as the Miracle of Dunkirk, saw 338,226 soldiers rescued by a hastily assembled fleet of over 800 boats.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://linktoyourimage.com/dunkirk.jpg"
        }
      }
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to destroyers at Dunkirk.",
      cardDetailedText: "The evacuation, known as the Miracle of Dunkirk, saw 338,226 soldiers rescued by a hastily assembled fleet of over 800 boats.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://linktoyourimage.com/dunkirk.jpg"
        }
      }
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to destroyers at Dunkirk.",
      cardDetailedText: "The evacuation, known as the Miracle of Dunkirk, saw 338,226 soldiers rescued by a hastily assembled fleet of over 800 boats.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://linktoyourimage.com/dunkirk.jpg"
        }
      }
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to destroyers at Dunkirk.",
      cardDetailedText: "The evacuation, known as the Miracle of Dunkirk, saw 338,226 soldiers rescued by a hastily assembled fleet of over 800 boats.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://linktoyourimage.com/dunkirk.jpg"
        }
      }
    },
    // Add other events similarly...
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>  {/* Adjust size as needed */}
      <Chrono 
        items={items} 
        mode="HORIZONTAL" 
        // disableToolbar
        useReadMore={true}
        slideShow 
        slideItemDuration={4500}
        theme={{
          primary: "deepskyblue",
          secondary: "lavender",
          cardBgColor: "white",
          cardForeColor: "rgba(0,0,0,0.87)"
        }}
        cardHeight={250}
      />
    </div>
  );
};

export default People;
