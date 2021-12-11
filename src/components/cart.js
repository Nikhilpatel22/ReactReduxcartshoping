import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { FaXbox, FaMinus, FaPlus } from 'react-icons/fa';


const Cart = () => {
    const { products,totalprice,totalQuentity } = useSelector(state => state.cart);
    const dispatch = useDispatch()
    // console.log(products)
    return (
        <div>
            <div>
                <h2>Your cart</h2>
                {products.length > 0 ? <>
                    <div className="cart-main">
                        <div>
                            <div className="cart-heading-main">
                                <div className="cart-heading">Picture</div>
                                <div className="cart-heading">Name</div>
                                <div className="cart-heading">Price</div>
                                <div className="cart-heading">Quentity</div>
                                <div className="cart-heading">Total Price</div>
                                <div className="cart-heading">Remove-Cart</div>
                            </div>
                            {products.map(product => (
                                <div key={product.id}>
                                    <div>
                                        <div className="cart-product-image">
                                            <img src={product.image} alt="prdimg" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            {product.title}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            {product.price}
                                        </div>
                                    </div>
                                    <div class="inc-dec-box">
                                        <div onClick={()=>dispatch({type:'DECREMENT',payload:product.id})} className="dec-box"><FaMinus /></div>
                                        <div className="quentity-box">{product.quentity}</div>
                                        <div onClick={()=>dispatch({type:'INCREMENT',payload:product.id})} className="inc-box"><FaPlus /></div>
                                    </div>
                                    <div>
                                        <div>
                                            {product.price * product.quentity}
                                        </div>
                                    </div>
                                    <div>
                                        <div onClick={()=>dispatch({type:'REMOVE',payload:product.id})}>
                                            <FaXbox />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summury">Summary</div>
                        <div>
                            <div>
                                Total Item:
                            </div>
                            <div>{totalQuentity}</div>
                        </div>
                        <div>
                            <div>
                                Total Price:
                            </div>
                            <div>{totalprice}</div>
                        </div>

                    </div>

                </> : 'your cart is empty'}
            </div>
        </div>
    )
}

export default Cart
