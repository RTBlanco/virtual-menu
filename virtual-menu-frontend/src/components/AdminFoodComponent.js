import { useState } from "react";
import EditFoodModal from './EditFoodModal';

const AdminFoodComponent = ({food}) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <>
      <EditFoodModal food={food} closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <button onClick={openModal} className="category-food">{food.name}</button>
    </>
  )
}

export default AdminFoodComponent;