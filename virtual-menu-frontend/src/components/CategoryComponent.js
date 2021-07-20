import {ReactComponent as EditBtn } from '../assests/edit-svgrepo-com.svg';
import EditCategoryModal from './EditCategoryModal';
import AdminFoodComponent from './AdminFoodComponent';
import { useState } from 'react';
import {ReactComponent as AddBtnFood} from '../assests/iconmonstr-plus-6.svg'
import NewFoodModal from './NewFoodModal';

const CategoryComponent = ({category}) => {

  const [modalIsOpen, setIsOpen] = useState(false)
  const [NewFoodIsOpen, setNewFoodIsOpen] = useState(false)

  const openNewFood = () => {
    setNewFoodIsOpen(true)
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeNewFood = () => {
    setNewFoodIsOpen(false)
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const renderfoods = () => {
    return category.foods.map(food => <AdminFoodComponent key={food.id} food={food} />)
  }

  return (
    <div className="admin-category">
      <EditCategoryModal category={category} closeModal={closeModal} modalIsOpen={modalIsOpen}/>
      <NewFoodModal closeModal={closeNewFood} modalIsOpen={NewFoodIsOpen} />
      <div className="category-header">
        {category.name}
        <button onClick={openNewFood} className="add-food-btn"><AddBtnFood /></button>
        <button onClick={openModal} className='edit-cat-btn'><EditBtn /></button>
      </div>
      <div className="category-foods">
        {renderfoods()}
      </div>
    </div>
  )
  
} 

export default CategoryComponent;