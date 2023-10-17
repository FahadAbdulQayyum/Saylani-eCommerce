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

  // items from props is console to inspect its value
console.log('itemsss',items)

// Card's image is containerized and styled
  const imageContainerStyle = {
    // Card's backgroundImage is initialized here
    backgroundImage: `url(${items.imgUrl})`,
    paddingTop: '100%', // Maintain a square aspect ratio
    backgroundSize: 'cover', // Making the image as cover
    backgroundPosition: 'center', // Making the image center
  };

  return (
    // Making the whole container relative for anything replaceable anywhere as wished
    <span className='relative'>
      {/* Product's Category's name is place at right top */}
      <small className='absolute top-0 z-10 right-0 bg-teal-200 px-2'>{items.prodCat}</small>
      {/* Image's card starts here */}
      <Card
        // Over hovering the image, it hovers the image by default
        hoverable
        // Since making the hover customized so, over hover or not hover the scale differentiates
        className={`w-[300px] transition duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
        // OnMouseEnter, setIsHovered is true
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
      >
        {/* Image container starts here */}
        <div className='image-container' style={imageContainerStyle} />
        {/* Card's container title and description is here */}
        <Meta title={items.prodName} description={items.prodDesc} />
        <span className='flex text-center'>$<Meta title={items.prodPrice} /></span>
      </Card>
    </span>
  );
};

export default ProductItems;