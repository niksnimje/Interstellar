import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function SingleProductPage({brand,image,category}){

    const {id}=useParams()
    const [singelData,setsingelData]=useState({})

    useEffect(()=>{
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
        .then((res)=>{
            setsingelData(res.data.data)
        }).catch((err)=>console.log(err))
      },[])
    


    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{singelData.brand}</h3>
            </div>
            <div >
            <img src={singelData.img} data-testid="product-image"/>
            </div>
            <div data-testid="product-category">
            {singelData.category}
            </div>
           
            <div data-testid="product-details">
            {singelData.details}
            </div>
            <div data-testid="product-price">
            {singelData.price}
            </div>
            <div>
        <Link to="/">Go Back</Link>
      </div>
            </div>
    )
}
export default SingleProductPage