import { useState } from "react";
import Modal from 'react-modal';



const EditRestModal = ({restaurant, modalIsOpen, closeModal}) => {

  const [state, setState] = useState(restaurant.name)

  console.log(restaurant)
  const handleOnChange = (e) => {
    setState(e.target.value)
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal()
    console.log("submit",state)
  }

  const handleClick = (e) => {
    e.preventDefault()
    closeModal()
    console.log('delete')
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
          <div className="new-cat-header">Edit Restaurant</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="category-name">Name of Restaurant: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" defaultValue={state} />
            <button className="create-btn" type="submit" >Edit!</button>
            <button className="red-btn" onClick={handleClick}>Delete</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditRestModal;