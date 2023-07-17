import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProducts = ({ allProducts, setAllProducts }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { productId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                console.log(res);
                console.log(res.data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }, [productId, navigate])
    const updateHandler = (event) => {
        console.log("in the update handler")
        event.preventDefault();
        const updateProduct = {
            title: title,
            price: price,
            description: description
        }
        console.log(updateProduct)
        axios.patch(`http://localhost:8000/api/product/${productId}`, updateProduct)
            .then(res => {
                console.log("inside the patch")
                const updateProducts = allProducts.filter(product => product._id !== res.data._id)
                setAllProducts([...updateProducts, res.data]);
                navigate("/")
            })
            .catch(err => {
                console.log("inside the .catch")
                console.log(err)
            })

    }






    return (
        <div>
            <p><Link to={"/"}>Home</Link></p>
            {isLoaded && <form onSubmit={updateHandler} method="post" >
                <h1>Product Manager</h1>
                <p>Please input and submit your Product</p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                <label htmlFor="price">Price</label>
                <input type="text" id="price" value={price} onChange={(event) => setPrice(event.target.value)} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                <button type="submit">Submit</button>
            </form>}
        </div>

    )
}


export default UpdateProducts;