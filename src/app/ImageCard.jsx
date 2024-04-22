"use client"
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';



const SkillsCards = () => {
    
  const [isFlipped, setIsFlipped] = useState(Array(11).fill(false));

  const handleClick = (index) => {
    setIsFlipped(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const images = [
    { src: '/images/image1.jpg', color: '#e5e7eb', description: 'A different day but once again we find ourselves at The Grove. The sun was setting and I had just spent too much money at Barnes and Noble. One of my favorite shows is Netflix’s “Love”, and there is a scene where one of the protagonists asks, “What would you do if there was a zombie apocalypse?” and the other replies, “Oh, I don’t know, jump off the parking lot at The Grove?”. For some reason this scene stuck with me and so thinking of that, I took a terribly blurry picture that only partially shows the parking lot.' },
    { src: '/images/image2.jpg', color: '#d1d5db', description: 'I spent a lot of time in my childhood going back and forth between Seoul and Guatemala City. As you can imagine, it is not a short journey. So my parents, my sister and I ended up spending just as much time together in Los Angeles in between long flights. We’re big fans of The Grove, for some odd reason. On this particular day, we had a late-night flight and had just finished dinner, and I took a very bad photo of the night sky that made the moon look like a pinprick in the sky. I remember being annoyed at this picture for not turning out right. I am reminded that the most ordinary days sometimes end up being the fondest memories.' },
    { src: '/images/image3.jpg', color: '#d1d5db', description: 'My sister loves “The Office” and this is a card from her Dunder Mifflin-themed tarot card set. I have doubts about her ability to predict the future. She gave me this particular card before I moved out for college as a silly parting gift. I also don’t know what the emperor card means in a tarot set. I would like to think it’s good, because look at Dwight! I kept this card on the back of my phone for a while for good luck. Thanks, Dwight.' },
    { src: '/images/image5.jpg', color: '#4b5563', description: 'This church is so beautiful and one of my favorites in Antigua. It’s right in the center of the city, across the street from a small park. There is a guy who sells kettle corn in the park and my dad always liked to buy kettle corn and then throw some for the pigeons. Sometimes I think there were more pigeons than people. I feel like pigeons probably shouldn’t eat that many carbs.' },
    { src: '/images/image8.jpg', color: '#4b5563', description: 'I’m not quite sure where this picture was taken, only that it was in Antigua. My sister took this picture to try and tell me she was a better photographer. I don’t think either of us are any good, so I didn’t concede.' },
    { src: '/images/image9.jpg', color: '#374151', description: 'I am including this terribly unflattering picture that my mom took because this was the first time I went home after coming to Yale-NUS. Traveling during Covid was a nightmare and I was just happy to be home. I think my sister and I were playing Monopoly, or maybe Uno? She had just started high school and we had a lot to talk about. It was a good day :)' },
    { src: '/images/image10.jpg', color: '#1f2937', description: 'These are the ruins of a cathedral in Antigua, Guatemala. I spent a lot of weekends when I was younger in Antigua––it’s a lovely historical town and it’s perfect for a short getaway. One thing about Guatemala is that people look at you weird if you’re Asian (there’s not that many Asian people) and an even weirder look if you’re Asian and you speak Spanish. I mention this because to enter these ruins, the state takes a little greedy tax from foreigners but not from locals. I had to show them a picture of my passport and somehow they still looked unconvinced. I don’t know why, but that’s what I remember looking at this picture.' },
    { src: '/images/image11.jpg', color: '#111827', description: 'I took this picture from a rooftop bar in Antigua. Another reason to love Antigua is that they sell fishbowl-fulls (actual fishbowls) of cocktails. I had met up with a good friend from high school on this day, and this being right after Covid restrictions were lifted, the mood everywhere was celebratory and upbeat. The bar overlooks an active volcano, which I somehow missed in this shot. It was a fun fishbowl-full day.' }
   
  ];

  return (
    <body className="bg-gradient-to-b from-sky-950 via-sky-650 to-sky-200 'text-white">
      <div className="flex justify-center" style={{ padding: '80px', textAlign: 'center' }}>
        <h1 className='text-white'>Throughout this course, I have thought a lot about what constitutes a good and meaningful life. In thinking about what makes life meaningful for me, I kept coming back to images of home and the places that made me who I am today. For my creative project, I have created a digital gallery of the little things that matter the most to me; these are the places and moments I hope to remember forever.</h1>
      </div>
    <div className="gallery-wrapper">
    <div className="skills-cards">
        
      {images.map((image, index) => (
        
        <ReactCardFlip key={index} isFlipped={isFlipped[index]} flipDirection="vertical">
                <div className="front" onClick={() => handleClick(index)}>
                    <img src={image.src} alt={`Image ${index + 1}`} />
                </div>
                <div className="back" onClick={() => handleClick(index)} style={{ color: image.color }}>
                    {image.description}
                </div>
                </ReactCardFlip>
       
      ))}
      <style jsx global>{`

      `}</style>
      <style jsx>{`
        .text-gradient {
            background-image: linear-gradient(to bottom, transparent, #000);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        .skills-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 100px;
          padding: 50px;
          padding-left: 250px;
          padding-right: 200px;
          justify-content: center; 
          align-items: center;
        }
        .front,
        .back {
          border: 1px solid #ccc;
          padding: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 400px; 
          height: 450px; 
        }
        img {
          max-width: 100%;
          max-height: 400px;
          margin: 30px; 
        }
      `}</style>
    </div>
    </div>
    </body>
  );
};

export default SkillsCards;
