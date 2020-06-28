/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import queryString from 'query-string';
import ListProductCards from '../common-components/ListProductCards';

const { Title } = Typography;

class SearchProductsPage extends React.Component {
    render() {
        const {key} = queryString.parse(this.props.location.search);
        const products = this.props.products.filter(product => product.name.toLowerCase().includes(key.toLowerCase()));
        return (
            <div className="App">
                <Title level={3}>Search for {key}</Title>
                {products.length > 0 && <ListProductCards products={products} />}
                {products.length <= 0 && <p>No found</p>}
            </div>
        );
    }
}

SearchProductsPage.propTypes = {
    products: PropTypes.array,
};

const mapStateToProps = (state) => ({
    products: state.products.products,
});

export default connect(mapStateToProps)(SearchProductsPage);
