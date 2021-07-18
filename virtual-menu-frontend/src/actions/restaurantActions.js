

const BASE_URL = 'http://localhost:3000'
const jwt = window.sessionStorage.getItem('token')
const admin_id = window.sessionStorage.getItem('id')

export function LogOut() {
  return (dispatch) => {
    dispatch({type: "LOGOUT"})
  }
}

export function fetchResturant() {
  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1`)
      .then(response => response.json())
      .then(restaurant => {
        dispatch({type: "ADDING_RESTAURANT", name: restaurant.name, categories: restaurant.categories})
        // dispatch({type: "ADDING_CATEGORIES", categories: restaurant.categories})
        // dispatch({type: "ADDING_FOODS", foods: restaurant.categories.foods})
      })
      .catch(er => console.log('error',er))
  }
}

export function fetchLogin(admin) {
  console.log(admin)
  return (dispatch) => {
    dispatch({type: "LOGGING_IN"})
    fetch(`${BASE_URL}/resturants/1/login`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Accept" : "application/json",
      },body: JSON.stringify(admin)
    })
    .then(response => response.json())
    .then(req => {
      console.log(req)
      dispatch({type: "LOGGED_IN", id: req.admin.id, name: req.admin.name, username: req.admin.username, token: req.jwt})
    })
    .catch(error => console.log("error",error))
  }
}

export function fetchAdmin(){
  return (dispatch) => {
    dispatch({type: 'GETTING_ADMIN'})
    fetch(`${BASE_URL}/resturants/1/admins/${admin_id}`,{
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    })
    .then(response => response.json())
    .then(req => {
      console.log(req)
      dispatch({type: "ADD_ADMIN", id: req.id, name: req.name, username: req.name})
    })
  }
}