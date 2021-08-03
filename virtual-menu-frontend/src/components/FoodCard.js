
const FoodCard = ({food}) => {

  return (
    <div className="food-card">
      <h1>{food.name}</h1>
      <img src={food.image} alt="food" />
    </div>
  )
}

export default FoodCard;