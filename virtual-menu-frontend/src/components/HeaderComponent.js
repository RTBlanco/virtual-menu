
const HeaderComponent = ({resturant}) => {

  if (resturant.loading) {
    return <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader"></img>
  }

  return (
    <div className="header">
      <h1 >{resturant.name}</h1>
    </div>
  )
}


export default HeaderComponent
