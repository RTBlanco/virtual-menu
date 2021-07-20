import { useState } from "react";
import Modal from 'react-modal';

const EditFoodModal = ({food, modalIsOpen, closeModal}) => {
  const [state, setState] = useState({
    name: food.name,
    cost: food.cost,
    cals: food.calories
  })

  const handleOnChange = (e) => {
    setState(e.target.value)
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
  }

  const showCurrency = () => {
    const Money = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return Money.format(state.cost)
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
            <label htmlFor="category-name">Name of Food: </label>
            <input onChange={handleOnChange} type="text" name="category" id="category-name" defaultValue={state.name}/>
            <div className="food-cost-cal">
              <label htmlFor="cost">Cost:</label>
              <input type="text" name='cost' id='cost' defaultValue={showCurrency()}/>
              <label htmlFor="calories">Cals:</label>
              <input type="text" name='calories' id='calories' defaultValue={state.cals}/>
              {/* Image goes hear  */}
            </div>
            <button onClick={closeModal} className="create-btn" type="Submit" >Edit!</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditFoodModal;