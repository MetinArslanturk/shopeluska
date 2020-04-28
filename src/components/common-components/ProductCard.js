import React from 'react';
import { baseHref } from '../../config/config';
import { Link } from 'react-router-dom';
import { Card, Rate, Button } from 'antd';


export const ProductCard = ({ product }) => {

    const handleAddToCard = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('button click');
    }

    return (
        <>
            <Link to={baseHref + 'product/' + product._id}>
                <Card
                    size="small"
                    hoverable
                    cover={<img alt="" className="picture-cover" src={product.imageUrl} />}
                    title={product.name}
                    bordered={true}>
                    <div className="card-description">
                        {product.description.length > 97 ? product.description.slice(0, 97) + '...' : product.description}
                    </div>
                    <div className="card-price">
                        <Rate disabled defaultValue={product.rate} />
                        <div className="card-price-text-wrapper">
                            <span className="card-price-text">{product.price} $</span>
                        </div>
                    </div>
                    <div className="card-add-button">
                        <Button onClick={handleAddToCard}>Add To Card</Button>
                    </div>
                </Card>
            </Link>
        </>
    )
}

export default React.memo(ProductCard);

