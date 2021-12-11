import React,{useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { selectedProduct, removeselectedProduct} from '../services/Actions/productAction';
import { FaMinus,FaPlus } from 'react-icons/fa';
import { Card, Button ,CardGroup,Row,Col} from 'react-bootstrap'
import axios from 'axios'

function ProductDetail() {
    //debugger
    const [quentity,setQuentity] = useState(1);
    const product = useSelector((state)=>state.product)
    const {id,image,title,price,category,description} = product;
    const {productId} = useParams();
   const dispatch = useDispatch();
   //console.log(product)


   const fetchProductdetail = async () =>{
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err)=>{
        console.log("err",err);
    });
     dispatch(selectedProduct(response.data));
}
useEffect(()=>{
    if(productId && productId !== "") fetchProductdetail();
    return()=>{
        dispatch(removeselectedProduct());
    }   
},[productId]);
const decQuentity = () =>{
    if(quentity > 1){
        setQuentity(quentity-1)
    }
}
    return (
        <div>
        {Object.keys(product).length === 0 ? (
            <div>...loading</div>
        ):(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Title>${price}</Card.Title>
    <Card.Title>{category}</Card.Title>
    <Card.Text>
    {description}
    </Card.Text>
    <div class="inc-dec-box">
        <div onClick={decQuentity} className="dec-box"><FaMinus/></div>
        <div className="quentity-box">{quentity}</div>
        <div onClick={()=>setQuentity(quentity+1)} className="inc-box"><FaPlus/></div>
    </div>
    <Button variant="primary" onClick={() =>dispatch({type: 'ADD_TO_CART',payload:{product,quentity}})}>Add To Cart</Button>
    <Button variant="primary">Remove To Cart</Button>
  </Card.Body>
</Card>
            
           
        )}
        </div>
    )
}

export default ProductDetail
