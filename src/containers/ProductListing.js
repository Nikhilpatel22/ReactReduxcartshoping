import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import axios from 'axios';
import { setProduct } from '../services/Actions/productAction'; 
import ProductComponent from './ProductComponent';

const ProductListing =()=> {
    const products=useSelector((state)=>state);
     const dispatch = useDispatch()
    const fetchProduct = async () =>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("err",err);
        });
        dispatch(setProduct(response.data))
    }

    useEffect(()=>{
        fetchProduct(); 
    },[])
    console.log("products:",products)
    return (
        <div className='product-list'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing
