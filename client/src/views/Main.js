import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(response => {setProducts(response.data.products)})
            .catch(err => console.log(err));
            setLoaded(true);
    },[products])

    return (
        <div className="py-5">
            <h1>Product Manager</h1>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList products={products}/>}
            
            
        </div>
    )
}