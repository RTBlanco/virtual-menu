import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmin } from "../actions/restaurantActions";
// import { LogOut } from "../actions/restaurantActions";
import CategoryComponent from './CategoryComponent'
import { ReactComponent as AddButton } from "../assests/iconmonstr-plus-6.svg";


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

  console.log(restaurant)
  return (
    <div id="admin-panel">
      {/* <AddButton /> */}
      <button onClick={() => window.alert("Modal should open ")} className="new-cat-btn">New Category</button>
      <div className="admin-control">
        {restaurant.loading ? 'loading....': renderCategories()}
      </div>
    </div>
  )
}

export default AdminComponent;