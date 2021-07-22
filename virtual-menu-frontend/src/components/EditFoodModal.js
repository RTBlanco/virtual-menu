import { useState } from "react";
import Modal from 'react-modal';
import { editFood, removeFood} from "../actions/restaurantActions";
import { useDispatch } from "react-redux";

const EditFoodModal = ({food, modalIsOpen, closeModal}) => {
  const dispatch = useDispatch();

  const [state, setState] = useState(food)

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editFood(state))
    closeModal()
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(removeFood(state))
    closeModal()
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
            <input onChange={handleOnChange} type="text" name="name" id="category-name" defaultValue={state.name}/>
            <label htmlFor="description">Description:</label>
            <textarea type="text" onChange={handleOnChange} name="description" id="food-description" defaultValue={state.description}/>
            <div className="food-cost-cal">
              <label htmlFor="cost">Cost:</label>
              <input onChange={handleOnChange} type="text" name='cost' id='cost' defaultValue={showCurrency()}/>
              <label htmlFor="calories">Cals:</label>
              <input onChange={handleOnChange} type="text" name='calories' id='calories' defaultValue={state.calories}/>
            </div>
            <button className="create-btn" type="Submit" >Edit!</button>
            <button className="red-btn" onClick={handleClick}>Delete</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditFoodModal;