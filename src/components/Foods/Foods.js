
import React from 'react';
import Food from '../Food/Food';

const Foods = (props) => {
  const { meals , addToCartHandeler } = props;
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        meals.map( meal => <Food meal={meal} key={meal.idMeal} addToCartHandeler={addToCartHandeler}></Food>)
      }
      </div>
  );
};

export default Foods;