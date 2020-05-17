/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import ListProductCards from '../common-components/ListProductCards';

const { Title } = Typography;

class MainPage extends React.Component {
    componentDidMount() {
        // console.log('Mounted');
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

MainPage.propTypes = {
    products: PropTypes.array,
};

const mapStateToProps = (state) => ({
    products: state.products.products,
});

export default connect(mapStateToProps)(MainPage);
