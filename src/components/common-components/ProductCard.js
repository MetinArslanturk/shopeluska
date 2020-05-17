import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Rate, Button } from 'antd';
import { baseHref } from '../../config/config';
import { startAddToCart } from '../../actions/shopping';

export const ProductCard = ({ product, addToCart }) => {
    const handleAddToCard = (e) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart(product._id, 1);
    };

    return (
        <>
            <Link to={`${baseHref}product/${product._id}`}>
                <Card
                    size="small"
                    hoverable
                    cover={
                        <img
                            alt=""
                            className="picture-cover"
                            src={product.imageUrl}
                        />
                    }
                    title={product.name}
                    bordered
                >
                    <div className="card-description">
                        {product.description.length > 97
                            ? `${product.description.slice(0, 97)}...`
                            : product.description}
                    </div>
                    <div className="card-price">
                        <Rate disabled defaultValue={product.rate} />
                        <div className="card-price-text-wrapper">
                            <span className="card-price-text">
                                {product.price} $
                            </span>
                        </div>
                    </div>
                    <div className="card-add-button">
                        <Button onClick={handleAddToCard}>Add To Card</Button>
                    </div>
                </Card>
            </Link>
        </>
    );
};

ProductCard.propTypes = {
    product: PropTypes.any,
    addToCart: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    addToCart: (productId, quantity) =>
        dispatch(startAddToCart(productId, quantity)),
});
export default connect(undefined, mapDispatchToProps)(ProductCard);
