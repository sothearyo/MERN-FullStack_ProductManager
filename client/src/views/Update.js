import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={ updateProduct }>
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
                <input type="submit" value="Submit" className="btn btn-info mt-5"/>

            </form>
        </div>
    )
}