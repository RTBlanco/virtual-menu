import {ReactComponent as EditBtn } from '../assests/edit-svgrepo-com.svg';

const CategoryComponent = ({category}) => {

  const handleOnClick = (food) => {
    window.alert(`open edit model ${food.name}`)
  }

  const renderfoods = () => {
    return category.foods.map(food => <button onClick={() => handleOnClick(food)} key={food.id} className="category-food">{food.name}</button>)
  }

  return (
    <div className="admin-category">
      <div className="category-header">
        {category.name}
        <button onClick={() => window.alert("Modal should open ")} className='edit-cat-btn'><EditBtn /></button>
      </div>
      <div className="category-foods">
        {renderfoods()}
      </div>
    </div>
  )
  
} 

export default CategoryComponent;