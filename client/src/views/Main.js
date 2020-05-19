import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(response => {setProducts(response.data.products)})
            .catch(err => console.log(err));
            setLoaded(true);
    },[products]);

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product/new', product)
            .then(res => { setProducts([...products, res.data]); })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errorResponse)){
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            })
    }

    return (
        <div className="py-5">
            <h1>Product Manager</h1>
            <div className="row-col text-sm text-danger ">
                {errors.map((error, idx) => <div key={idx}>{error}</div>)}
            </div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" intialPrice="" intialDescription=""/>
            <hr/>
            {loaded && <ProductList/>}
        </div>
    )
}