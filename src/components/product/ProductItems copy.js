import React from 'react'
import { Row, Col, Card } from 'antd';

const ProductItems = ({items}) => {

    const { Meta } = Card;

    return (
        <Card
            hoverable
            className='w-96 h-fit'
            cover={<img alt="example" src={items.img} />}
        >
            <Meta title={items.name} description="www.instagram.com" />
        </Card>
    )
}

export default ProductItems