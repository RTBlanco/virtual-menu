import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmin } from "../actions/restaurantActions";
import CategoryComponent from './CategoryComponent'
import NewCategoryModal from "./NewCategoryModal";


const AdminComponent = () => {

  const [modalIsOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


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
      <NewCategoryModal closeModal={closeModal} modalIsOpen={modalIsOpen}/>
      <button onClick={openModal} className="new-cat-btn">New Category</button>
      <div className="admin-control">
        {restaurant.loading ? 'loading....': renderCategories()}
      </div>
    </div>
  )
}

export default AdminComponent;