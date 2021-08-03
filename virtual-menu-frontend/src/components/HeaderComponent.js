import { Link } from 'react-router-dom'

const HeaderComponent = ({resturant}) => {


  const headerStyle = {
    backgroundImage: `url(${resturant.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }

  if (resturant.loading) {
    return <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader"></img>
  }

  console.log(resturant.image)
  return (
    <div style={headerStyle} className="header">
      <Link to={"/"} >
        <h1 >{resturant.name}</h1>
      </Link>
    </div>
  )
}


export default HeaderComponent
