import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import {fetchLogin } from "../actions/restaurantActions";
import AdminComponent from "../components/AdminComponent";


const Admin = () => {

  const dispatch = useDispatch();

  const loggedIn = useSelector( state => state.loggedIn)

  const login = (admin) => {
    dispatch(fetchLogin(admin))
  }

  // const loggedIn = window.sessionStorage.getItem('token') ? true : false 

  return (
    <>
    {loggedIn ? <AdminComponent /> : <Login login={login}/>}
    </>
  )
}

export default Admin;