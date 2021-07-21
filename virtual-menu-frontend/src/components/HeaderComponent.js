import React, { useState } from 'react';
import EditRestModal from './EditRestModal';


const HeaderComponent = ({resturant}) => {

  // const [modalIsOpen, setIsOpen] = useState(false)

  // const openModal = () => {
  //   setIsOpen(true);
  // }

  // const closeModal = () => {
  //   setIsOpen(false);
  // }

  if (resturant.loading) {
    return <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader"></img>
  }

  return (
    <div className="header">
      {/* <EditRestModal resturant={resturant} modalIsOpen={modalIsOpen} closeModal={closeModal}/> */}
      <p>background image here</p>
      <h1 >{resturant.name}</h1>
    </div>
  )
}


export default HeaderComponent
