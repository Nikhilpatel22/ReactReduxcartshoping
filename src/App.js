import React from 'react'
// import User from './User';
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer'
import Productlisting from './containers/ProductListing'
import Productdetail from './containers/ProductDetail'
import Cart from './components/cart'
import { BrowserRouter as Router ,Switch, Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { productReducer } from './services/Reducers/productReducer';

function App() {
    return (
        <div className="App">
             {/* <HeaderContainer /> */}
            <Router>
             <HeaderContainer />
              
           {/* <User data={{name:"nikhil", age:25}}/>  */}
           <Routes>
            <Route path="/product" exact element={<Productlisting/>} />
            <Route path="/products/:productId" exact element={<Productdetail/>} />
            <Route path="/cart" exact element={<Cart/>} />
            <Route>404 error</Route>
            </Routes>
           
            </Router>
            {/* <productListing />
            <HomeContainer /> */}
        </div>
    )
}

export default App
