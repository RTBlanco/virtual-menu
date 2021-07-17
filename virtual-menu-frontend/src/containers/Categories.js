import React from 'react';
import { Link } from "react-router-dom";

const Categories = ({categories}) => {
  return (
    <>
      <p>list of categories</p>
      <div>
        {/* {categories.map(cat => (
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