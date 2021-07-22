import { useState } from "react"
import EditAdminModal from "./EditAdminModal"
import EditRestModal from "./EditRestModal"

const EditAreaComponent = ({restaurant}) => {

  // need to refactor 

  const [modal, setModal] = useState({
    restaurant: false,
    admin: false
  })

  const open = (name) => {
    setModal({
      ...modal,
      [name]: true
    })
  }

  const close = (name) => {
    setModal({
      ...modal,
      [name]: false
    })
  }

  console.log(restaurant)
  return (
    <>
      <EditAdminModal admin={restaurant.admin} closeModal={() => close('admin')} modalIsOpen={modal.admin}/>
      <EditRestModal restaurant={restaurant} closeModal={() => close('restaurant')} modalIsOpen={modal.restaurant}/>

      <div className="edit-area-container">
        <button onClick={() => open('restaurant')} className="edit-area-btn">Edit Resturant</button>
        <button onClick={() => open('admin')} className="edit-area-btn">Edit Admin</button>
      </div>
    </>
  )
}

export default EditAreaComponent