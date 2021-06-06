import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Product from './Product'
import {setProducts} from '../redux/actions/productActions'
const ProductListing = () => {

    const dispatch=useDispatch();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(products=>dispatch(setProducts(products)))
            .catch(e=>console.log(e))        
    }, [])
    return (
        <div className="ui grid container">
            <Product/>
        </div>
    )
}

export default ProductListing
