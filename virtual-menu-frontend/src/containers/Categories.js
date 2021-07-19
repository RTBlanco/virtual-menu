import React from 'react';
import CategoryCard from '../components/CategoryCard';
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
      <div className="categories">
        {categories.map(cat => (
          <Link key={cat.id} to={`/${cat.name}`}>
            <CategoryCard category={cat} />
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