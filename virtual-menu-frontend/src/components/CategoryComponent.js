import {ReactComponent as EditBtn } from '../assests/edit-svgrepo-com.svg';
import EditCategoryModal from './EditCategoryModal';
import AdminFoodComponent from './AdminFoodComponent';
import { useState } from 'react';

const CategoryComponent = ({category}) => {

  const [modalIsOpen, setIsOpen] = useState(false)
  // const [FoodIsOpen, setFoodIsOpen]

  const openModal = () => {
    setIsOpen(true);
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
      <div className="category-header">
        {category.name}
        <button onClick={openModal} className='edit-cat-btn'><EditBtn /></button>
      </div>
      <div className="category-foods">
        {renderfoods()}
      </div>
    </div>
  )
  
} 

export default CategoryComponent;