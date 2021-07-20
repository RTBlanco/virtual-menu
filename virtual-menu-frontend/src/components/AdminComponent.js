import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmin } from "../actions/restaurantActions";
// import { LogOut } from "../actions/restaurantActions";
import CategoryComponent from './CategoryComponent'
import { ReactComponent as AddButton } from "../assests/iconmonstr-plus-6.svg";
import NewCategoryModal from "./NewCategoryModal";


const AdminComponent = () => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <NewCategoryModal afterOpenModal={afterOpenModal} closeModal={closeModal} subtitle={subtitle} modalIsOpen={modalIsOpen}/>
      {/* <AddButton /> */}
      <button onClick={openModal} className="new-cat-btn">New Category</button>
      <div className="admin-control">
        {restaurant.loading ? 'loading....': renderCategories()}
      </div>
    </div>
  )
}

export default AdminComponent;