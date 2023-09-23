import React, { useState } from 'react';
import { Card } from 'antd';

const ProductItems = ({ items }) => {
  const { Meta } = Card;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width: '300px', // Adjust the size as needed
    transition: 'transform 0.2s',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Magnify on hover
  };

  const imageContainerStyle = {
    backgroundImage: `url(${items.img})`,
    paddingTop: '100%', // Maintain a square aspect ratio
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Card
      hoverable
    //   className='w-[300px] transition duration-150 '
      className={`w-[300px] transition duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
    //   style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='image-container' style={imageContainerStyle} />
      <Meta title={items.name} description={items.desc} />
    </Card>
  );
};

export default ProductItems;