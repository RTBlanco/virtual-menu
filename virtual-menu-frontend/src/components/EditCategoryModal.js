import { useState } from "react"
import Modal from 'react-modal'
import { useDispatch } from "react-redux"
import { removeCategory, editCategory } from "../actions/restaurantActions"

const EditCategoryModal = ({category, modalIsOpen, closeModal}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({name: category.name})
  // console.log(category)
  const handleOnChange = (e) => {
    setState({name: e.target.value})
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    closeModal()
    dispatch(editCategory(category, state))
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
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div>
          <div className="cat-header">Edit Category</div>
          <form onSubmit={handleSubmit} className="cat-form">
            <label htmlFor="category-name">Name of Category: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" value={state.name}/>
            <button className="create-btn" type="Submit" >Edit!</button>
            <button className="red-btn" onClick={handleClick}>Delete</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditCategoryModal;