import React, { useState } from 'react';
import axios from 'axios';
export default () => {
    // keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // handler when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new product
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch((err)=> console.log(err))
    }

    // form with onChange handlers to update product params
    return (
        <div className="row">
            <div className="col-4"></div>
            <form onSubmit={ onSubmitHandler } className="col-4 border rounded py-4 mt-5">
                <div className="row form-group pb-2">
                    <label htmlFor="title" className="col-6 text-right pr-5">Product Name: </label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control col-4"/>
                </div>
                <div className="row form-group pb-2">
                    <label htmlFor="price" className="col-6 text-right pr-5">Price: </label>
                    <input type="number" step=".01" onChange={(e)=>setPrice(e.target.value)} className="form-control col-4"/>
                </div>
                <div className="row form-group pb-2">
                    <label htmlFor="description" className="col-6 text-right pr-5">Description: </label>
                    <textarea onChange={(e)=>setDescription(e.target.value)} className="form-control col-4"/>
                </div>
                <input type="submit" value="Submit" className="btn btn-info mt-5"/>
            </form>
            <div className="col-4"></div>
        </div>
    )
}