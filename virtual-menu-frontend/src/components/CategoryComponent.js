import {ReactComponent as EditBtn } from '../assests/edit-svgrepo-com.svg';
import EditCategoryModal from './EditCategoryModal';
import { useState } from 'react';

const CategoryComponent = ({category}) => {

  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  const handleOnClick = (food) => {
    window.alert(`open edit model ${food.name}`)
  }

  const renderfoods = () => {
    return category.foods.map(food => <button onClick={() => handleOnClick(food)} key={food.id} className="category-food">{food.name}</button>)
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