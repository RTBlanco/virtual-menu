
const FoodCard = ({food}) => {

  // const cardStyle = {
  //   backgroundImage: `url(${food.image})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: '100% 100%'
  // }


  return (
    <div className="card">
      <h1>{food.name}</h1>
      <img src={food.image} alt="food" />
    </div>
  )
}

export default FoodCard;