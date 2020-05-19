import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => setProduct({...res.data}))
    },[props])
    return (
        <div>
            <Link to={`/`}>Back to All Products</Link>
            <div className="row py-4">
                <div className="col"></div>
                <div className="col">
                    <h1>{product.title}</h1>
                </div>
                <div className="col text-left">
                    <DeleteButton productId={props.id} successCallback={()=> navigate("/")}/>
                </div>
            </div>
            <div className="row-col">
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>

            </div>
            <div className="row">
                <div className="col">

                    <Link className="btn btn-outline-info btn-sm" to={`/product/${product._id}/edit`}>Edit</Link>
                </div>

                

            </div>
        </div>
    )
}