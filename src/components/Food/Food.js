import React from 'react';

const Food = (props) => {

  const { meal, addToCartHandeler } = props;

  const { strMealThumb, strMeal, strInstructions } = meal;
  return (
      <div className="col">
        <div className="card h-100">
          <img src={strMealThumb} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">{strInstructions.slice(0,100)}</p>
          </div>
          <div className="card-footer">
            
          <button onClick={ () =>addToCartHandeler(meal)} className='btn btn-outline-secondary'>add to cart</button>
          </div>
        </div>
      </div>
  );
};

export default Food;