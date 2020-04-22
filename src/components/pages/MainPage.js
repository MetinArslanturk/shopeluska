import React from 'react';
import { connect } from 'react-redux'
import ListProductCards from '../common-components/ListProductCards';
import { Typography } from 'antd';

const { Title } = Typography;

class MainPage extends React.Component {

  componentDidMount() {
    //console.log('Mounted');
  }


  render() {
    return (
      <div className="App">
        <Title level={3}>Hot Products Of Day</Title>
        <ListProductCards products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products
})

export default connect(mapStateToProps)(MainPage);
