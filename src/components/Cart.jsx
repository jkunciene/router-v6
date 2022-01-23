import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cart = () => {
    let navigate = useNavigate();

  return (    
    <div>
        <h2>This is my Cart component
          
        </h2>
        <Button variant="info"
            onClick={()=>{
                navigate("/")
            }}>
            Go back..
        </Button>
    </div>
  ) 
};

export default Cart;
