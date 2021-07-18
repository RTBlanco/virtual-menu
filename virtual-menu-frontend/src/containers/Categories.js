import React from 'react';
import { Link } from "react-router-dom";

const Categories = ({categories}) => {

  // const fakeCats = [
  //   {name: "Drink"},
  //   {name: "Pasta"},
  //   {name: "Steak"}
  // ]

  return (
    <>
      <p>list of categories</p>
      <div>
        {categories.map(cat => (
          <Link key={cat.id} to={`/${cat.name}`}>
            <div>
              {cat.name}
            </div>
          </Link>
        ))}
        {/* {fakeCats.map(cat => (
          <Link to={`/${cat.name}`}>
            <div>
              {cat.name}
            </div>
          </Link>
        ))} */}
      </div>
    </>
  )
}

export default Categories;