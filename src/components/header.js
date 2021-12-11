import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import mainlogo from '../image/mainlogo.jpg'

function Header() {
    const { totalQuentity } = useSelector(state=>state.cart)
    // console.warn(props.data)
    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="light" bg="light" >
                    <Container>
                        <Navbar.Brand href="/product" className="main-logo"><img src={mainlogo} alt="mainlogo"></img></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Text className="Heading">The Shop</Navbar.Text>
                        <Navbar.Collapse className="justify-content-end">
                        <Link to={"/cart"} >
                        <Navbar.Text className="add-to-cart">
                        <span className="cart-count"> <h2 style={{color:'white',marginTop:'-6px',fontSize:'20px'}}>{totalQuentity}</h2> </span>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                        </Navbar.Text>
                        </Link>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

            {/* <Navbar className="header">
                <Container>
                    <Navbar.Brand href="#home" className="main-logo"><img src={mainlogo} alt="mainlogo"></img></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}


            {/* <nav id="header">            
             <div className="add-to-cart">
                <span className="cart-count"> <h2 style={{color:'white',marginTop:'0px',fontSize:'15px'}}>{props.data.length}</h2> </span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            </nav> */}
        </div>
    )
}

export default Header