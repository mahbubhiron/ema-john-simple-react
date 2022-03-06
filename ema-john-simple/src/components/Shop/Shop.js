import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css';
import Product from './../Product/Product';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products)
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
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                const saveCart = getStoredCart();
                const productKeys = Object.keys(saveCart);
                const previewsCart = productKeys.map(existingKey => {
                    const product = data.find(pd => pd.key === existingKey);
                    product.quantity = saveCart[existingKey];
                    return product;
                })
                setCart(previewsCart);
            })
            .catch(error => console.log(error))
    }, [])
    // console.log(cart)
    function handleAddProduct(product) {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = product.quantity + 1;
            product.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, product];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key, count)
    }
    return (
        <div>
            <div className='search-bar'>
                <input type="text" placeholder='Type here to search...!' />
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} className='cart-icon' /></a>
                <a href="#">{cart.length}</a>
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product showAddToCart={true} product={product} handleAddProduct={handleAddProduct} key={product.key} ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className='cart-button'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;