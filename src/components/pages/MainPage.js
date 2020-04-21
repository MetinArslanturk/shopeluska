import React from 'react';
import { connect } from 'react-redux'
import { Card, Col, Row, Typography } from 'antd';

const { Title } = Typography;

class MainPage extends React.Component {
  product = {
    imgSource: 'https://www.metinarslanturk.com/uploads/shoe.jpeg',
    title: 'Product Title',
    body: 'Here content'
  }
  products = [this.product,this.product,this.product,this.product, this.product];

  componentDidMount() {
    //console.log('Mounted');
  }


  render() {
    return (
      <div className="App">
        <Title level={3}>Hot Products Of Day</Title>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {this.products.map((prod,indice) => {
            return (
              <Col xs={24} sm={24} md={12} lg={12} xl={6} key={indice} style={ {marginTop: '10px'}}>
            <Card
              hoverable
              cover={<img alt="" className="picture-cover" src={prod.imgSource} />}
              title={prod.title}
              bordered={true}>
              {prod.body}
            </Card>
          </Col>
            )
          })}
          

        </Row>
      </div>
    );
  }
}



export default connect(undefined)(MainPage);
