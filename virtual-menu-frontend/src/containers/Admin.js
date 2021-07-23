import { useDispatch } from "react-redux";
import Login from "../components/Login";
import {fetchLogin } from "../actions/restaurantActions";
import AdminComponent from "../components/AdminComponent";


const Admin = () => {

  const dispatch = useDispatch();

  // const admin = useSelector( state => {
  //   return {
  //     token: state.admin.token,
  //     name: state.admin.name,
  //     username: state.admin.username,
  //     loading: state.admin.loading
  //   }
  // })

  const login = (admin) => {
    dispatch(fetchLogin(admin))
  }

  const loggedIn = window.sessionStorage.getItem('token') ? true : false 

  return (
    <>
    {loggedIn ? <AdminComponent /> : <Login login={login}/>}
    </>
  )
}

export default Admin;