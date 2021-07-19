import React from 'react';
import { Link } from "react-router-dom";
import FoodCard from '../components/FoodCard';

const Foods = ({match, categories, loading}) => {


  let category = categories.find(cat => cat.name === match.params.name)
  
   
  if (typeof category === 'undefined') {
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader"></img>
    )
  }

  return (
    <>
      <p>this is the list of foods for {match.params.name} </p>
      <div className="display"> 
        {category.foods.map(food => (
          <Link key={food.id} to={`/${match.params.name}/${food.name}`}>
            {/* <div>
              {food.name}
            </div> */}
            <FoodCard food={food}/>
          </Link>
        ))}
      </div>
  </>
)
}

export default Foods;