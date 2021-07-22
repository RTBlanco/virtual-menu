import { useState } from "react";
import Modal from 'react-modal';

const EditAdminModal = ({admin, closeModal, modalIsOpen}) => {
  

  const [state, setState] = useState(admin)

  const handleOnChange = (e) => {
    setState({
      [e.target.name]: e.target.value
    })
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal()
    console.log("submit",state)
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