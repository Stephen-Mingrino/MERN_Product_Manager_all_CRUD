import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";


const DeleteProduct = ({ allProducts, setAllProducts }) => {
    const navigate = useNavigate();
    const { productId } = useParams();
    useEffect(() => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                console.log("in delete res");
                const updateProducts = allProducts.filter(product => product._id !== productId);
                setAllProducts(updateProducts)
                navigate("/");
            }, [productId, navigate])
    })
    console.log("in Delete");

}

export default DeleteProduct;