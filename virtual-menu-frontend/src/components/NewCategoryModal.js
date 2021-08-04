import { useState } from 'react';
import {useDispatch} from 'react-redux'
import Modal from 'react-modal';
import { addCategory } from '../actions/restaurantActions';

const NewCategoryModal = ({modalIsOpen, closeModal}) => {

  const dispatch = useDispatch();

  const [state, setState] = useState('')

  const handleOnChange = (e) => {
    setState(e.target.value)
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    closeModal()
    dispatch(addCategory(state))
  }

  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="new-category-model">
          <div className="new-cat-header">New Category</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="category-name">Name of Category: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" />
            <button className="create-btn" type="Submit" >Create!</button>
          </form>
        </div>
    </Modal>
  )
}

export default NewCategoryModal;