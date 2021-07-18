import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmin } from "../actions/restaurantActions";
import { LogOut } from "../actions/restaurantActions";

const AdminComponent = () => {

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

  return (
    <div>
      {admin.loading ? "loading" : `Welcome ${admin.name}`}
      <button onClick={() => dispatch(LogOut())}>Log Out</button>
    </div>
  )
}

export default AdminComponent;