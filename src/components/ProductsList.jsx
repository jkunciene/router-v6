import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Product from './Product';

const ProductsList = () => {

    // prekiu krepseliui
    const [product, setProduct] = useState([]);

    let navigate = useNavigate();

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

    <div className='mt-3'>
        <Product addToCart={addToCart}/>
        <Button variant="info"
            onClick={()=>{
                navigate("/cart")
            }}>
            Check Cart
        </Button>
    </div>
  )
       
};

export default ProductsList;
