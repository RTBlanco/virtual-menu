import { useState } from "react"
import Modal from 'react-modal'
import { useDispatch } from "react-redux"
import { removeCategory, editCategory } from "../actions/restaurantActions"

const EditCategoryModal = ({category, modalIsOpen, closeModal}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(category.name)
  // console.log(category)
  const handleOnChange = (e) => {
    setState(e.target.value)
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    closeModal()
    dispatch(editCategory(category))
    console.log(state)
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(removeCategory(category))
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
          <div className="new-cat-header">Edit Category</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="category-name">Name of Category: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" value={state}/>
            <button className="create-btn" type="Submit" >Edit!</button>
            <button className="red-btn" onClick={handleClick}>Delete</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditCategoryModal;