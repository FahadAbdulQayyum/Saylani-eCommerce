import React, { useState } from 'react';
import { Card } from 'antd';

const ProductItems = ({ items }) => {
  const { Meta } = Card;
  const [isHovered, setIsHovered] = useState(false);

console.log('itemsss',items)

  const imageContainerStyle = {
    backgroundImage: `url(${items.imgUrl})`,
    paddingTop: '100%', // Maintain a square aspect ratio
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <span>
      <Card
        hoverable
        className={`w-[300px] transition duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
      >
        <div className='image-container' style={imageContainerStyle} />
        <Meta title={items.prodName} description={items.prodDesc} />
        <span className='flex text-center'>$<Meta title={items.prodPrice} /></span>
      </Card>
    </span>
  );
};

export default ProductItems;