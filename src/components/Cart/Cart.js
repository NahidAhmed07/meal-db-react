import React from 'react';
import './cart.css'

const Cart = (props) => {

  const { cartItems } = props;
  const total = cartItems.reduce((pre, item) => pre + item.quantity, 0);
  return (
    <div className='cart-parent'>

      <div className='cart'>
        <h2>Total : {total}</h2>
        {
        cartItems.map((meal, index) => {
          
          return <h5 key={meal.idMeal}>{index + 1}. {meal.strMeal.slice(0,10)} : {meal.quantity}</h5>
      
        })
      }
      </div>
      
    </div>
  );
};

export default Cart;