import React, { useState } from 'react';
import { Card } from 'antd';

const ProductItems = ({ items }) => {
  const { Meta } = Card;
  const [isHovered, setIsHovered] = useState(false);

  const imageContainerStyle = {
    backgroundImage: `url(${items.img})`,
    paddingTop: '100%', // Maintain a square aspect ratio
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Card
      hoverable
      className={`w-[300px] transition duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
    >
      <div className='image-container' style={imageContainerStyle} />
      <Meta title={items.name} description={items.desc} />
      <span className='flex text-center'>$<Meta title={items.price} /></span>
    </Card>
  );
};

export default ProductItems;