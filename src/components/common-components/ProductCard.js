import React from 'react';
import { history, baseHref } from '../../config/config';
import { Card, Rate, Button } from 'antd';


export const ProductCard = ({ product }) => {

    const handleAddToCard = (e) => {
        e.stopPropagation();
        console.log('button click');
    }

    return (
        <>
            <Card
                size="small"
                onClick={() => { console.log('card click') }}
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
        </>
    )
}

export default React.memo(ProductCard);

