import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const handleDelete = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {removeFromDom(productId)});
    }

    return (
        <div>
            {props.products.map((product, idx)=>{
                return <div className="row py-1" key={idx}>
                    <div className="col-4"></div>
                    <div className="col-2 text-left">
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                    <div className="col-2">
                        <button onClick={(e)=>{handleDelete(product._id)}} className="btn btn-outline-secondary btn-sm">Delete</button>
                    </div>
                    <div className="col-4"></div>
                </div>
                
            })}
        </div>
    )
}
