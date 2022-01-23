import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const Cart = ({ product }) => {
    let navigate = useNavigate();

    const getTotal = () => {
      return product.reduce((sum, {price, quantity})=> sum + price*quantity, 0).toFixed(2)
    }

  return (    
    <div>
        <h2>This is my Cart component</h2>
        <Table striped bordered hover size="sm">
        {
          product.length > 0 &&            
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
        }
                  <tbody>
       {
         product &&   product.map( (oneProduct, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{oneProduct.name}</td>
                <td>{oneProduct.quantity}</td>
                <td>{oneProduct.price}</td>
                <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
         ))   }
         {
            product.length > 0 && 
            <tr>
              <td colSpan={3}>Bendra suma: { getTotal()}</td>
              <td><button className='btn btn-success'>Pay</button></td>             
              <td><button className='btn btn-danger'>Reset</button></td>             
            </tr>
         }
          </tbody>
         </Table>
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
