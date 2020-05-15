import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {

    return (
        <div>
            {props.products.map((product, idx)=>{
                return <p key={idx}><Link to={`/product/${product._id}`}>{product.title}</Link></p>
            })}
        </div>
    )
}
