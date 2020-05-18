import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const { id } = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    },[])
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
        navigate(`/product/${id}`);    
    }

    return (
        <div>
            <div className="row-col text-center pt-5">
                <h2>Edit Product</h2>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <form onSubmit={ updateProduct } className="col-4 border rounded py-4 mt-5">
                <div className="row form-group pb-2">
                        <label htmlFor="title" className="col-6 text-right pr-5">Product Name: </label>
                        <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control col-4"/>
                    </div>
                    <div className="row form-group pb-2">
                        <label htmlFor="price" className="col-6 text-right pr-5">Price: </label>
                        <input type="number" name="price" value={price} step=".01" onChange={(e)=>setPrice(e.target.value)} className="form-control col-4"/>
                    </div>
                    <div className="row form-group pb-2">
                        <label htmlFor="description" className="col-6 text-right pr-5">Description: </label>
                        <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control col-4"/>
                    </div>
                    <input type="submit" value="Edit" className="btn btn-info mt-5"/>
                </form>
                <div className="col-4"></div>
            </div>
        </div>
    )
}