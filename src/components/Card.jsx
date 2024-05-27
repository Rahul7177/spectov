import React, { forwardRef, useState } from 'react';
import '../Styles/Card.css';

const Card = forwardRef(({ title, paragraph, image }, ref) => {
  const [isTitle, setIsTitle] = useState(true);

  const handleToggle = () => {
    setIsTitle(!isTitle);
  };

  return (
    <div className='card_container' style={{ backgroundImage: `url(${image})` }}>
      <div className='card_content'>
        {isTitle ? (
          <div className='card_title'>
            {title}
          </div>
        ) : (
          <div className='card_paragraph'>
            {paragraph}
          </div>
        )}
        <button className='card_btn' onClick={handleToggle}>
          {isTitle ? '+' : '-'}
        </button>
      </div>
    </div>
  );
});

export default Card;
