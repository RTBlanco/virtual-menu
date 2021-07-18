import React from 'react';
import { Link } from "react-router-dom";

const Foods = ({match}) => {
  const fakeDrinks = [
    {name: "coke"},
    {name: "beer"},
    {name: "sprite"}
  ]

  return (
    <>
      <p>this is the list of foods for {match.params.name} </p>
      {fakeDrinks.map(drink => (
        <Link to={`/${match.params.name}/${drink.name}`}>
          <div>
            {drink.name}
          </div>
        </Link>
      ))}
  </>
)
}

export default Foods;