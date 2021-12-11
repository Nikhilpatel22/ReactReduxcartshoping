import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, Button ,CardGroup,Row,Col} from 'react-bootstrap'

const ProductComponent = () => {
    const productss=useSelector((state)=>state.allProducts.products);
    

    const renderlist = productss.map((product)=>{
    const {id,title,price,category,image} = product;
    return (
        <div>   
        <Card style={{ width: '18rem' }} key={id} >
           <Link to={`/products/${id}`} >
            <Card.Img variant="top" src={image} style={{width:'200px',height:'200px'}}/> </Link>
            <Card.Body>
                <Card.Title style={{height:'150px'}}>{title}</Card.Title>
                 <Card.Title>${price}</Card.Title>
                <Card.Text>{category}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )});
    return(
    <div className="grid-container"><>{renderlist}</></div>
    )
}

export default ProductComponent