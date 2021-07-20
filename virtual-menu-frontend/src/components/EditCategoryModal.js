import { useState } from "react"
import Modal from 'react-modal'

const EditCategoryModal = ({category, modalIsOpen, closeModal}) => {
  const [state, setState] = useState(category.name)

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
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="new-cat-modal"
        overlayClassName="new-cat-modal-overlay"
      >
        <div className="new-category-model">
          <div className="new-cat-header">Edit Category</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="category-name">Name of Category: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" value={state}/>
            <button onClick={closeModal} className="create-btn" type="Submit" >Edit!</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditCategoryModal;