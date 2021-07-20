import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { Link } from "react-router-dom";

const Categories = ({categories}) => {

  return (
    <>
      <div className="display">
        {categories.map(cat => (
          <Link key={cat.id} to={`/${cat.name}`}>
            <CategoryCard category={cat} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Categories;