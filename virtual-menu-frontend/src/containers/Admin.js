import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import {fetchLogin } from "../actions/restaurantActions";
import AdminComponent from "../components/AdminComponent";


const Admin = () => {

  const dispatch = useDispatch();

  const cred = useSelector( state => {
    return {
      valid: state.admin.loggedIn,
      error: state.error
    }
  })
  

  const login = (admin) => {
    dispatch(fetchLogin(admin))
  }

  return (
    <>
    {cred.valid ? <AdminComponent /> : <Login cred={cred} login={login}/>}
    </>
  )
}

export default Admin;