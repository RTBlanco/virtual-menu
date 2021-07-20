import React from 'react';
import AdminNav from './AdminNav';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const NavBar = ({categories}) => {
  
  const currentPath = useLocation()
  
  const showIfNotAdmin = () =>{
    if (currentPath.pathname === '/admin') {
      
      return <AdminNav />
      
    } else {
      return (
        <nav id="navbar">
          <NavLink to='/' className="nav-anchor" id='home'>
            <h3>Home</h3> 
          </NavLink>
          {renderCategoryLinks()}
        </nav>
      )
    }
  }

  const renderCategoryLinks = () => {
    return categories.map(cat =>{
      return (
        <NavLink key={cat.id} to={`/${cat.name}`} >
            <h4>{cat.name}</h4>
        </NavLink>
      )
    })
  }

  return (

    <>
      {showIfNotAdmin()}
    </>
  )
}

export default NavBar;