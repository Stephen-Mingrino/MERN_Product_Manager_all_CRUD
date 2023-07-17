import React from "react";
import { Link } from "react-router-dom";


const DisplayAllProducts = ({ allProducts }) => {
    console.log(allProducts)
    return (
        <div>
            <p>All Products</p>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map(product => {
                        return (
                            <tr key={product._id}>
                                <td><Link to={`/product/${product._id}`}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link to={`/newProduct/edit/${product._id}`}>Edit</Link>|
                                    <Link to={`/product/delete/${product._id}`} >Delete</Link>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p><Link to={"/newProduct"}>Add a new Product </Link></p>


        </div>


    )


}




export default DisplayAllProducts;