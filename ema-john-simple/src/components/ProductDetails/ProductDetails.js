import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { productKey } = useParams();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.log(error))
    },[])
    const product = products.find(pd=> pd.key===productKey)
    // console.log(product);

    return (
        <div>
            <h1>Your product details :</h1>
            {product && <Product showAddToCart={false} product={product}></Product>}
        </div>
    );
};

export default ProductDetails;