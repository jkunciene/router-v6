import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
   
  } from "react-router-dom";

import {  Navbar, Nav, Container } from 'react-bootstrap';

import Product from './Product';
import Cart from './Cart';
import ErrorPage from './ErrorPage';

const ProductsList = () => {

    // prekiu krepseliui
    const [product, setProduct] = useState([]);   

    const addToCart= (item) => {
        // susikuriu state esancio krepselio kopija
        const newCart = [...product];
        //tikrinu, ar jau yra preke tokiu pavadinimu
        let productInCart = newCart.find(
            (localVar) => item.id === localVar.id
        )  
            if(productInCart === undefined){
                productInCart = {
                    ...item,
                    quantity: 1,
                }
                newCart.push(productInCart);
            }
        setProduct(newCart);        
    }
console.log(product);
    

  return (
   
            <Router>
                <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Link to="/" className='nav-link'>Product List </Link>
                    <Link to="/cart" className='nav-link'> Cart </Link>         
                    </Nav>
                </Container>
                </Navbar>
            <Routes>
                <Route path="/" element={<Product addToCart={addToCart} />} />
                <Route path="/cart"  element={<Cart product={product}/>} />    
                <Route path="*" element={<ErrorPage />} />      
            </Routes>
            </Router>   
    
  )
       
};

export default ProductsList;
