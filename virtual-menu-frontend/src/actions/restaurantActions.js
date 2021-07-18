

const BASE_URL = 'http://localhost:3000'

export function fetchResturant() {
  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1`)
      .then(response => response.json())
      .then(restaurant => {
        console.log(restaurant)
        dispatch({type: "ADDING_RESTAURANT", name: restaurant.name, categories: restaurant.categories})
        // dispatch({type: "ADDING_CATEGORIES", categories: restaurant.categories})
        // dispatch({type: "ADDING_FOODS", foods: restaurant.categories.foods})
      })
      .catch(er => console.log('error',er))
  }
}