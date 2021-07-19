import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const NavBar = ({categories}) => {

  // const [sticking, setSticking] = useState(false)

  // window.onscroll = function() {scrollFunction()}
  // // let navbar = document.getElementById('navbar');
  // let navbar = useRef(null)
  // let sticky = navbar.offsetTop;

  // console.log(window.pageYOffset)
  // console.log(navbar.current.offsetTop)

  // function scrollFunction() {
  //   // console.log('running')
  //   if (window.pageYOffset >= sticky) {
  //     // console.log('true')
  //     // navbar.current.classList.add("sticky")
  //     setSticking(true)
  //   } else {
  //     // console.log('false')
  //     // navbar.current.classList.remove("sticky");
  //     setSticking(false)
  //   }
  // }

  
  const currentPath = useLocation()
  
  const showIfNotAdmin = () =>{
    if (currentPath.pathname === '/admin') {
      return <h2>Admin</h2>
    } else {
      return (
        <nav id="navbar">
          <NavLink to='/' className="nav-anchor" id='home'>
              Home 
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
            {cat.name}
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