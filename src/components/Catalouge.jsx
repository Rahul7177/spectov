import React from 'react';
import Card from './Card';
import '../Styles/Catalouge.css';
import cardimg1 from '../assets/signlang2.jpg';
import cardimg2 from '../assets/hologram.jpg';
import cardimg3 from '../assets/banner.jpg';

const cardsData = [
  {
    image: cardimg1,
    title: 'Real-Time Sign Language Translation',
    paragraph: 'Uses advanced AI and machine learning to convert spoken language into sign language in real-time, displayed on AR glasses.',
  },
  {
    image: cardimg2,
    title: 'Gesture Input and Speech Translation',
    paragraph: 'Features a LiDAR sensor to interpret hand gestures, translating them into spoken language for seamless two-way communication.',
  },
  {
    image: cardimg3,
    title: 'Versatile and Personalizable',
    paragraph: 'Detachable frame with interchangeable frames using magnetic connectors, allowing users to personalize their device..',
  },
  // {
  //   image: cardimg1,
  //   title: 'Title 4',
  //   paragraph: 'Phasellus dignissim, massa nec volutpat blandit, lorem libero ullamcorper metus, eget pharetra urna justo ut odio.',
  // },
  // {
  //   image: cardimg1,
  //   title: 'Title 5',
  //   paragraph: 'Phasellus dignissim, massa nec volutpat blandit, lorem libero ullamcorper metus, eget pharetra urna justo ut odio.',
  // },
];

const Catalouge = () => {
  return (
    <div className='catalouge_container'>
      <div className='catalouge_title'>
        Product Highlights
      </div>
      <div className='catalouge_main'>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalouge;
