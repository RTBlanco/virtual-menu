import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const NavBar = ({categories}) => {
  const currentPath = useLocation()
  
  const showIfNotAdmin = () =>{
    if (currentPath.pathname === '/admin') {
      return <h2>Admin</h2>
    } else {
      return (
        <nav>
          <ul className="nav-links">
            <NavLink to='/'>
              <li> Home </li>
            </NavLink>
            {renderCategoryLinks()}
          </ul>
        </nav>
      )
    }
  }

  const renderCategoryLinks = () => {
    return categories.map(cat => {
      return <NavLink key={cat.id} to={`admin/${cat.name}`}>
        <li>{cat.name}</li>
      </NavLink>
    })
  }
  console.log(currentPath.pathname.slice(1,currentPath.pathname.length))

  return (
    <>
      {showIfNotAdmin()}
    </>
  )
}

export default NavBar;