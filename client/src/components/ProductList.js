import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(response => {setProducts(response.data.products)})
            .catch(err => console.log(err));
    },[products]);
    
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            {products.map((product, idx)=>{
                return <div className="row py-1" key={idx}>
                    <div className="col-4"></div>
                    <div className="col-2 text-left">
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                    <div className="col-2">
                        <DeleteButton productId={product._id} successCallback={()=> removeFromDom(product._id)}/>
                    </div>
                    <div className="col-4"></div>
                </div>
                
            })}
        </div>
    )
}
