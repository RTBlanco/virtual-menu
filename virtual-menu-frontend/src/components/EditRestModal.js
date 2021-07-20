import { useState } from "react";
import Modal from 'react-modal';


const EditRestModal = ({resturant, modalIsOpen, closeModal}) => {

  const [state, setState] = useState(resturant.name)


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
          <div className="new-cat-header">Edit Resturant</div>
          <form onSubmit={handleSubmit} className="new-cat-form">
            <label htmlFor="category-name">Name of Resturant: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" defaultValue={state} />
            {/* <div className="food-cost-cal">
              <label htmlFor="cost">Cost:</label>
              <input type="text" name='cost' id='cost' />
              <label htmlFor="cals">Cals:</label>
              <input type="text" name='cals' id='cals' /> 
            </div> */}
            <button onClick={closeModal} className="create-btn" type="Submit" >Create!</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditRestModal;