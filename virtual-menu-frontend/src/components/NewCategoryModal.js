import { useState } from 'react';
import Modal from 'react-modal';

const NewCategoryModal = ({modalIsOpen, closeModal}) => {

  const [state, setState] = useState('')

  const handleOnChange = (e) => {
    setState(e.target.value)
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className="new-cat-modal"
        overlayClassName="new-cat-modal-overlay"
      >
        <div className="new-category-model">
          <div className="new-cat-header">New Category</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="category-name">Name of Category: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" />
            <button className="create-btn" type="Submit" >Create!</button>
          </form>
          {/* <button onClick={closeModal}>close</button>
          <div>I am a modal</div> */}
        </div>
    </Modal>
  )
}

export default NewCategoryModal;