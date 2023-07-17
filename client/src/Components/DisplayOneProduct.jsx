import React from "react"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const DisplayOneProduct = (allProducts, setAllProducts) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const { productId } = useParams();
    console.log("in Display One before the Return");
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                console.log("in display one API");
            }, [productId])
    })
    console.log("in display one");
    return (
        <div>
            <h1>this is {title}</h1>
            <h1>Price is {price}</h1>
            <h1>Description: {description}</h1>
            <Link to={"/"}>Back to Products</Link>
        </div>

    )


}

export default DisplayOneProduct;