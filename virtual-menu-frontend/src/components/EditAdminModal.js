import { useState } from "react";
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { editAdmin } from "../actions/restaurantActions";

const EditAdminModal = ({admin, closeModal, modalIsOpen}) => {
  
  const dispatch = useDispatch();

  const [state, setState] = useState({
    id: admin.id,
    name: admin.name,
    username: admin.username
  })

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAdmin(state))
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
        <div className="new-category-model">
          <div className="new-cat-header">Edit Admin</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="name">Name: </label>
            <input onChange={handleOnChange} type="text" name="name" id="name" defaultValue={state.name} />
            <label htmlFor="username">Username: </label>
            <input onChange={handleOnChange} type="text" name="username" id="username" defaultValue={state.username} />
            <label htmlFor="password">password: </label>
            <input onChange={handleOnChange} type="text" name="password" id="password" />
            <button className="create-btn" type="submit" >Edit!</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditAdminModal;