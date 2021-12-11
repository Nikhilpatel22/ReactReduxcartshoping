import React from 'react'
import { Card, Button } from 'react-bootstrap'
import shoesimg from '../image/shoesimages.jfif'

function Home() {
    //console.warn('Home props', props)
    //console.warn('Home props',props.data)
    return (
        <div>
             {/*    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={shoesimg} />
                <Card.Body>
                    <Card.Title>Nike Shoes</Card.Title>
                     <Card.Title>Price : 2000 Rs</Card.Title>
                    {/*<Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> 
                    <Button variant="primary"  onClick={()=>{
                    props.addToCartHandler({price:1000, name:'i phone '})
                }}>Add To Cart</Button>
                  <Button variant="primary" style={{marginLeft:'2%'}}
                    onClick={()=>{
                    props.removeToCartHandler()
                }}>Remove To Cart</Button>
                </Card.Body>
            </Card> */}
            {/* <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className="btn-wrapper item">
                <button
                onClick={()=>{
                    props.addToCartHandler({price:1000, name:'i phone '})
                }}
                >
                    Add To Cart</button>
            
            <button style={{marginTop:'5px'}} 
                onClick={()=>{
                    props.removeToCartHandler()
                }}
                >
                    Remove To Cart</button>
                    </div>
        </div> */}
        </div>
    )
}

export default Home
