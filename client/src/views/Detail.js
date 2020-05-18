import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => setProduct({...res.data}))
    },[])
    return (
        <div>
            <Link to={`/`}>Back to All Products</Link>
            <div className="row-col py-4">
                <h1>{product.title}</h1>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <Link className="btn btn-outline-info" to={`/product/${product._id}/edit`}>Edit</Link>
        </div>
    )
}