import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    const { img, name, seller, price, stock, star, features, key, quantity } = props.product;
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < star) {
            stars.push(<FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />)
        } else {
            stars.push(<FontAwesomeIcon icon={faStar} />)
        }
    }
    return (
        <div className='product'>
            <div className='prd-img'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <div className='prd-content'>
                    <div className='prd-content-left'>
                        <p><small>P - Kye : {key}</small></p>
                        <p><small>By : {seller}</small></p>
                        <p>$ {price}</p>
                        <p>Quantity : {quantity}</p>
                        <p><small>Only <span> {stock} </span> left in stock -oder soon</small></p>
                        <button
                            className='product-button'
                            onClick={() => props.handleRemoveProduct(key)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> Remove Item
                        </button>
                    </div>
                    <div className='prd-content-right'>
                        <p className='prd-rating-star'>{stars}</p>
                        <p>Features</p>
                        <ul>
                            {
                                features.map(feature => <li>{feature.description} :  {feature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;