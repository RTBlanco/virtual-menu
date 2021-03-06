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
    description: "",
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
    let formData = new FormData(e.target)
    dispatch(addFood(formData, category))
    closeModal()
  }


  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div>
          <div className="new-food-header">New Food</div>
          <form onSubmit={handleSubmit} className="new-food-form">
            <label htmlFor="food-name">Name of Food: </label>
            <input  type="text" name="name" id="food-name" />
            <label htmlFor="description">Description:</label>
            <textarea type="text"  name="description" id="food-description"  rows="4" cols="50"/>
            <div className="food-cost-cal">
              <label htmlFor="cost">Cost:</label>
              <input  type="text" name='cost' id='cost' />
              <label htmlFor="cals">Cals:</label>
              <input  type="text" name='calories' id='cals' /> 
            </div>
            {/* adding images here */}
            <label className='image-label' htmlFor="image">
              <input type="file" name="image" id="image" accept="image/*"/>
              Image
            </label>
            <button className="create-btn" type="Submit" >Create!</button>
          </form>
        </div>
    </Modal>
  )
}

export default NewFoodModal;