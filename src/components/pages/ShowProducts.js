/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import ListProductCards from '../common-components/ListProductCards';

const { Title } = Typography;

class ShowProductsPage extends React.Component {
    render() {
        const { catName } = this.props.match.params;
        const products = this.props.products.filter(product => product.category === catName);
        return (
            <div className="App">
                <Title level={3}><span className="capitalize-text">{catName}</span> Products</Title>
                <ListProductCards products={products} />
            </div>
        );
    }
}

ShowProductsPage.propTypes = {
    products: PropTypes.array,
};

const mapStateToProps = (state) => ({
    products: state.products.products,
});

export default connect(mapStateToProps)(ShowProductsPage);
