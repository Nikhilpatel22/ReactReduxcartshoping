import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { FaXbox, FaMinus, FaPlus } from 'react-icons/fa';
import { Card, Button, CardGroup, Row, Col } from 'react-bootstrap'


const Cart = () => {
    const { products, totalprice, totalQuentity } = useSelector(state => state.cart);
    const dispatch = useDispatch()
    // console.log(products)
    return (
        <div>
            <div>
                <h2>Your cart</h2>
                {products.length > 0 ? <>
                    <div className="cart-main">
                        <div>
                            {/* <div className="cart-heading-main">
                                <div className="cart-heading">Picture</div>
                                <div className="cart-heading">Name</div>
                                <div className="cart-heading">Price</div>
                                <div className="cart-heading">Quentity</div>
                                <div className="cart-heading">Total Price</div>
                                <div className="cart-heading">Remove-Cart</div>
                            </div> */}
                            {products.map(product => (
                                <div key={product.id}>
                                    <div className='main-card-product-cart'>
                                        <div className='main-card-product-img'><Card.Img variant="top" src={product.image} /></div>
                                        <div className='row-body-cart'>
                                            <Card.Body >
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Title>${product.price}</Card.Title>
                                                <Card.Title>{product.price * product.quentity}</Card.Title>
                                               
                                                <div class="inc-dec-box">
                                                    <div onClick={() => dispatch({ type: 'DECREMENT', payload: product.id })} className="dec-box"><FaMinus /></div>
                                                    <div className="quentity-box">{product.quentity}</div>
                                                    <div onClick={() => dispatch({ type: 'INCREMENT', payload: product.id })} className="inc-box"><FaPlus /></div>
                                                </div>
                                                <div onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                                                    <FaXbox />
                                                </div>
                                                {/* <Button variant="primary">Remove To Cart</Button> */}
                                            </Card.Body>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                      <div> <div className="cart-summury">Summary</div>
                        <div className="total-item">
                            <div>
                                Total Item:
                            </div>
                            <div>{totalQuentity}</div>
                        </div>
                        <div className="total-price">
                            <div>
                                Total Price:
                            </div>
                            <div>{totalprice}</div>
                        </div>
                        </div>
                    </div>

                </> : 'your cart is empty'}
            </div>
        </div>
    )
}

export default Cart
