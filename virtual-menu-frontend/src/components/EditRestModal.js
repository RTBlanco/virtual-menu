import { useRef, useState } from "react";
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { editRestaurant } from "../actions/restaurantActions";


const EditRestModal = ({restaurant, modalIsOpen, closeModal}) => {

  const dispatch = useDispatch();
  const [state, setState] = useState(restaurant)


  const handleOnChange = (e) => {
    setState({[e.target.name]:e.target.value})
    
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    dispatch(editRestaurant(formData))
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
          <div className="res-header">Edit Restaurant</div>
          <form onSubmit={handleSubmit} className="res-form">
            <label htmlFor="restaurant-name">Name of Restaurant: </label>
            <input onChange={handleOnChange} type="text" name="name" id="restaurant-name" defaultValue={state.name} />
            <label htmlFor="about">about:</label>
            <textarea type="text" onChange={handleOnChange} name="about" id="about" defaultValue={state.about}  rows="8" cols="50"/>
            <label htmlFor="image">Image</label>
            <input type="file" name="image" id="image" accept="image/*"/>
            <button className="create-btn" type="submit" >Edit!</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditRestModal;