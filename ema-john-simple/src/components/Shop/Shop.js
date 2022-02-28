import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css';
import Product from './../Product/Product';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                for (var i = data.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = data[i];
                    data[i] = data[j];
                    data[j] = temp;
                }
                setProducts(data);
            })
            .catch(error => console.log(error))
    }, [])

    const [cart, setCart] = useState([]);
    function handleAddProduct(product) {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <div className='search-bar'>
                <input type="text" placeholder='Type here to search...!' />
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} className='cart-icon'/></a>
                <a href="#">{cart.length}</a>
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} handleAddProduct={handleAddProduct} key={product.key} ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;