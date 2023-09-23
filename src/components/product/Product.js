import React from 'react';
import Products from './products.json'
import { Row, Col, Card } from 'antd';

const Product = () => {

  const { Meta } = Card;

  return (
    <span>
      <h1>Products</h1>
      <Row gutter={16}>
        <Col span={8}>
      {Products.map(v => (
        // <div style={{display:'flex',flexDirection:'row'}}>
        //   <Card
        //     hoverable
        //     style={{ width: 240 }}
        //     cover={<img alt="example" src={v.img} />}
        //   >
        //     <Meta title={v.name} description="www.instagram.com" />
        //   </Card>
        //  </div>

          <Card 
          title={v.name} 
          bordered={false}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={v.img} />}>
          </Card>
        
      ))}
      </Col>
      </Row>
    </span>

  )
}

export default Product