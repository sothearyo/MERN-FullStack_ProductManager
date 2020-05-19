import React, { useState } from 'react';
export default props => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    // form with onChange handlers to update product params
    return (
        <div className="row">
            <div className="col-4"></div>
            <form onSubmit={ onSubmitHandler } className="col-4 border rounded py-4 mt-5">
                <div className="row form-group pb-2">
                    <label htmlFor="title" className="col-6 text-right pr-5">Product Name: </label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control col-4"/>
                </div>
                <div className="row form-group pb-2">
                    <label htmlFor="price" className="col-6 text-right pr-5">Price: </label>
                    <input type="number" value={price} step=".01" onChange={(e)=>setPrice(e.target.value)} className="form-control col-4"/>
                </div>
                <div className="row form-group pb-2">
                    <label htmlFor="description" className="col-6 text-right pr-5">Description: </label>
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control col-4"/>
                </div>
                <input type="submit" value="Submit" className="btn btn-info mt-5"/>
            </form>
            <div className="col-4"></div>
        </div>
    )
}