import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmin } from "../actions/restaurantActions";
import CategoryComponent from './CategoryComponent'
import NewCategoryModal from "./NewCategoryModal";
import EditAreaComponent from "./EditAreaComponent";



const AdminComponent = () => {

  const dispatch = useDispatch();
 
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const restaurant = useSelector( state => {
    return {
      about: state.restaurant.about,
      name: state.restaurant.name,
      categories: state.restaurant.categories,
      loading: state.restaurant.loading,
      admin: state.admin
    }
  })

  useEffect(() => {
    dispatch(fetchAdmin())
  },[])

  const renderCategories = () => {
    return restaurant.categories.map(cat => <CategoryComponent key={cat.id} category={cat}/>)
  }

  if (restaurant.loading) {
    return <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader"></img>
  }
  return (
    <>
      <EditAreaComponent restaurant={restaurant} />
      
      <div id="admin-panel">
        <NewCategoryModal closeModal={closeModal} modalIsOpen={modalIsOpen}/>
        <button onClick={openModal} className="new-cat-btn">New Category</button>
        <div className="admin-control">
          {restaurant.loading ? 'loading....': renderCategories()}
        </div>
      </div>
    </>
  )
}

export default AdminComponent;