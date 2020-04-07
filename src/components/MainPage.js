import React from 'react';
import { connect } from 'react-redux'
import { Card, Col, Row } from 'antd';

class MainPage extends React.Component {
  product = {
    imgSource: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'Product Title',
    body: 'Here content'
  }
  products = [this.product,this.product,this.product,this.product];

  componentDidMount() {
    //console.log('Mounted');
  }


  render() {
    return (
      <div className="App">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {this.products.map((prod,indice) => {
            return (
              <Col xs={24} sm={24} md={12} lg={12} xl={6} key={indice}>
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
