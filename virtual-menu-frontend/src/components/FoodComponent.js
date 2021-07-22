import React from 'react';

const FoodComponent = ({match, categories, loading}) => {

  let category = categories.find(category => category.name === match.params.category_name)
  
  if (typeof category === 'undefined') {
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader"></img>
    )
  }

  let food = category.foods.find(food => food.name === match.params.name)
  
  const showCurrency = () => {

    const Money = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return Money.format(food.cost)
  }

  return (
    <div className="food-display">
      <h3>{food.name}</h3>
      <div className="food-info">
        <div className="food-details-show">
          <span>{food.calories} Cals</span>
          <span>Cost: {showCurrency()}</span>
        </div>
        <div className="description-show">
          <label htmlFor="description">Description:</label>
          <p>{food.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodComponent;