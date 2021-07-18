import React from 'react';

const FoodComponent = ({match}) => {
  return (
    <>
      <p>this is a food</p>
      <p> {match.params.category_name} / {match.params.name}</p>
    </>
  )
}

export default FoodComponent;