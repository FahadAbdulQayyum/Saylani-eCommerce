// React and useState hook imported from react
import React, { useState } from 'react';
// Card imported from antd for using the already built smart to reuse
import { Card } from 'antd';

// ProductItems is initialized from here
const ProductItems = ({ items }) => {
  // Meta is desctructured from Card's object to use
  const { Meta } = Card;
  // isHovered and setIsHovered useState hook is used for hovering the card over hovering
  const [isHovered, setIsHovered] = useState(false);

console.log('itemsss',items)

  const imageContainerStyle = {
    backgroundImage: `url(${items.imgUrl})`,
    paddingTop: '100%', // Maintain a square aspect ratio
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <span className='relative'>
      <small className='absolute top-0 z-10 right-0 bg-teal-200 px-2'>{items.prodCat}</small>
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