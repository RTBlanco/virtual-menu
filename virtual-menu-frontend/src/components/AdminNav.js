import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmin } from "../actions/restaurantActions";
import { LogOut } from "../actions/restaurantActions";
import { ReactComponent as LogOutIcon } from "../assests/logout-svgrepo-com.svg";

const AdminNav = () => {

  const dispatch = useDispatch();

  const admin = useSelector( state => {
    return {
      name: state.admin.name,
      username: state.admin.username,
      loading: state.admin.loading
    }
  })

  useEffect(() => {
    dispatch(fetchAdmin())
  },[])

  const loggedIn = window.sessionStorage.getItem('token') ? true : false

  const renderLoggedIn = () => {
    if(loggedIn) {
      return (
        <>
          <h3>{admin.loading ? "loading" : `Welcome ${admin.name}`}</h3>
          {/* <PlusIcon className="plus-icon" /> */}
          <button className="logout-btn" onClick={() => dispatch(LogOut())}><LogOutIcon/></button>
        </>
      )
    } else {
      return <h3>Admin Panel</h3>
    }
  }

  return (
    <nav id='navbar'>
      {renderLoggedIn()}
    </nav>
  )
}

export default AdminNav;