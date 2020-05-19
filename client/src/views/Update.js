import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log(res.data);
            })
    },[id])
    
    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/product/${id}`, product)
            .then(res => console.log(res));
        navigate(`/product/${id}`);    
    }

    return (
        <div>
            <div className="row-col text-center pt-5">
                <h2>Edit Product</h2>
            </div>
                {loaded && (
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                )}
        </div>
    )
}