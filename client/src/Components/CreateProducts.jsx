import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProducts = ({ allProducts, setAllProducts }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const formHandler = (event) => {
        event.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.post("http://localhost:8000/api/product", newProduct)
            .then(res => {
                setAllProducts([...allProducts, res.data])
                navigate("/");
                console.log(res);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <p><Link to={"/"}>Home</Link></p>
            <form onSubmit={formHandler}>
                <h1>Product Manager</h1>
                <p>Please input and submit your Product</p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                <label htmlFor="price">Price</label>
                <input type="text" id="price" value={price} onChange={(event) => setPrice(event.target.value)} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                <button>Submit</button>
            </form>
        </div>

    )
}


export default CreateProducts;