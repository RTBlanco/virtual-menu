import { useState } from "react";
import Modal from 'react-modal';
import { addFood } from "../actions/restaurantActions";
import { useDispatch } from "react-redux";

const NewFoodModal = ({ category, modalIsOpen, closeModal}) => {

  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    cost: '',
    calories: '',
    category_id: category
  })



  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
 
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    dispatch(addFood(state))
    closeModal()
  }


  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="new-cat-modal"
        overlayClassName="new-cat-modal-overlay"
      >
        <div className="new-category-model">
          <div className="new-cat-header">New Food</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="category-name">Name of Food: </label>
            <input onChange={handleOnChange} type="text" name="name" id="category-name" />
            <div className="food-cost-cal">
              <label htmlFor="cost">Cost:</label>
              <input onChange={handleOnChange} type="text" name='cost' id='cost' />
              <label htmlFor="cals">Cals:</label>
              <input onChange={handleOnChange} type="text" name='calories' id='cals' /> 
            </div>
            <button className="create-btn" type="Submit" >Create!</button>
          </form>
        </div>
    </Modal>
  )
}

export default NewFoodModal;