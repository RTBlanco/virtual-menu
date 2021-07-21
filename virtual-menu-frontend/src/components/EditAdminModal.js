import { useState } from "react";
import Modal from 'react-modal';

const EditAdminModal = ({admin, closeModal, modalIsOpen}) => {
  const [state, setState] = useState({
    name: admin.name,
    username: admin.username,
    password: ''
  })


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
          <div className="new-cat-header">Edit Admin</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="name">Name: </label>
            <input onChange={handleOnChange} type="text" name="name" id="name" defaultValue={state} />
            <label htmlFor="username">Username: </label>
            <input onChange={handleOnChange} type="text" name="username" id="username" defaultValue={state} />
            <label htmlFor="password">password: </label>
            <input onChange={handleOnChange} type="text" name="password" id="password" defaultValue={state} />
            <button className="create-btn" type="submit" >Edit!</button>
            <button className="red-btn" onClick={handleClick}>Delete</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditAdminModal;