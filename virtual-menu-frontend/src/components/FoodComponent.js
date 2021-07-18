import React from 'react';

const FoodComponent = ({match, categories, loading}) => {

  let category = categories.find(category => category.name === match.params.category_name)
  
  if (typeof category === 'undefined') {
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader"></img>
    )
  }

  let food = category.foods.find(food => food.name === match.params.name)

  return (
    <>
      <p>this is a food</p>
      <p>{food.name}</p>
      <p>{food.cost}</p>
      <p>{food.calories}</p>
    </>
  )
}

export default FoodComponent;