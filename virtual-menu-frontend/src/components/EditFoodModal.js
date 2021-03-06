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
    const formData = new FormData(e.target)
    dispatch(editFood(state, formData))
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

  const backgroundImage = {
    backgroundImage: `url(${state.image})`,
    backgroundSize: '100% 100%'
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
          <div className="food-header">Edit Food</div>
          {/* <img src={state.image} alt="food" /> */}
          <form onSubmit={handleSubmit} className="food-form">
            <label htmlFor="food-name">Name of Food: </label>
            <input onChange={handleOnChange} type="text" name="name" id="food-name" defaultValue={state.name}/>
            <label htmlFor="description">Description:</label>
            <textarea type="text" onChange={handleOnChange} name="description" id="food-description" defaultValue={state.description}  rows="4" cols="50"/>
            <div className="food-cost-cal">
              <label htmlFor="cost">Cost:</label>
              <input onChange={handleOnChange} type="text" name='cost' id='cost' defaultValue={showCurrency()}/>
              <label htmlFor="calories">Cals:</label>
              <input onChange={handleOnChange} type="text" name='calories' id='calories' defaultValue={state.calories}/>
            </div>
            {/* adding images here */}
            <label style={backgroundImage} className="image-label" htmlFor="image">
              <input type="file" name="image" id="image" accept="image/*"/>
              Image
            </label>
            <button className="create-btn" type="Submit" >Edit!</button>
            <button className="red-btn" onClick={handleClick}>Delete</button>
          </form>
        </div>
    </Modal>
  )
}

export default EditFoodModal;