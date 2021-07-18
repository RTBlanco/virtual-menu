import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmin } from "../actions/restaurantActions";
import { LogOut } from "../actions/restaurantActions";
import CategoryComponent from './CategoryComponent'


const AdminComponent = () => {

  const dispatch = useDispatch();

  const admin = useSelector( state => {
    return {
      name: state.admin.name,
      username: state.admin.username,
      loading: state.admin.loading
    }
  })

  const restaurant = useSelector( state => {
    return {
      name: state.restaurant.name,
      categories: state.restaurant.categories,
      loading: state.restaurant.loading
    }
  })

  useEffect(() => {
    dispatch(fetchAdmin())
  },[])

  const renderCategories = () => {
    return restaurant.categories.map(cat => <CategoryComponent key={cat.id} category={cat}/>)
  }

  return (
    <div>
      {admin.loading ? "loading" : `Welcome ${admin.name}`}
      <button onClick={() => dispatch(LogOut())}>Log Out</button>
      <div>
        {restaurant.loading ? 'loading....': renderCategories()}
      </div>
    </div>
  )
}

export default AdminComponent;