import React, { useEffect, useState } from 'react';
import { AddToDb, getDb } from '../../utilitis/loclaStorage';
import Cart from '../Cart/Cart';
import Foods from '../Foods/Foods';
import Header from '../Header/Header';
import './Main.css'; 

const Main = () => {
  const [meals, setMeals] = useState([]);
  const [cartItems, setCardItems] = useState([]);
  const [searchtext, setSearchText] = useState('fish');

  const inputField = document.getElementById('input-field');

  const searchHandelar = () => {
    const searchText = inputField.value;
    inputField.value = '';
    setSearchText(searchText);
  }
  
  
  const searchFieldHandaler = event => {
    if (event.key === 'Enter') {
      searchHandelar()
    }
  }
  

  // console.log(cartItems);
  const addToCartHandeler = (meal) => {

    const keys = Object.keys(getDb());

    if (keys.includes(meal.idMeal)) {

      const newArr = cartItems.map((item) => {
      if (meal.idMeal === item.idMeal) {
        item.quantity += 1;
        return item;
      } else {
        return item  ;
      }
      })
      
      setCardItems(newArr);

    } else {
      meal.quantity = 1;
      setCardItems([...cartItems, meal])
    }
    AddToDb(meal.idMeal);
  }

  

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`)
      .then(res => res.json())
    .then(data => setMeals(data.meals))
  }, [searchtext])
  
  useEffect(() => {

    if (meals.length > 0) {
      let saveCartItem = [];
      const saveCartObj = getDb();
      for (const key in saveCartObj) {

        const newItem = meals.find(meal => meal.idMeal === key);
        newItem["quantity"] = saveCartObj[key];
        saveCartItem.push(newItem);
      }
      setCardItems(saveCartItem);
    }
    
  },[meals])

  return (
    <main>
      
      <Header
        searchHandelar={searchHandelar}
        searchFieldHandaler={searchFieldHandaler}
      ></Header>

      <section className='container foods-parrent'>
        <div className='foods'>
          <Foods meals={meals} addToCartHandeler={addToCartHandeler}></Foods>

        </div>
        <div className='cart'>

          <Cart cartItems={cartItems} ></Cart>

        </div>

      </section>


    </main>
  );
};

export default Main;