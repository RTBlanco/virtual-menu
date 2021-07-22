import { useState } from "react";
import Modal from 'react-modal';


const EditRestModal = ({restaurant, modalIsOpen, closeModal}) => {

  const [state, setState] = useState(restaurant.name)

  const handleOnChange = (e) => {
    setState(e.target.value)
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className="new-cat-header">Edit Restaurant</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="category-name">Name of Restaurant: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" defaultValue={state} />
            <div className="rest-image-input">
              <label htmlFor="image">Image</label>
              <input type="file" name='image' id='image' accept="image/*" />
            </div>
            <button className="create-btn" type="submit" >Edit!</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditRestModal;