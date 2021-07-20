import {ReactComponent as EditBtn } from '../assests/edit-svgrepo-com.svg';

const CategoryComponent = ({category}) => {
  return (
    <div className="admin-category">
      <div>
        {category.name}
        <button onClick={() => window.alert("Modal should open ")} className='edit-cat-btn'><EditBtn /></button>
      </div>
    </div>
  )
  
} 

export default CategoryComponent;