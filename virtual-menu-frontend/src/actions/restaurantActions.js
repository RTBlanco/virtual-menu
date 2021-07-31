

const BASE_URL = 'http://localhost:3000'
let jwt 
let admin_id


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
        dispatch({type: "ADDING_RESTAURANT", name: restaurant.name, categories: restaurant.categories, about: restaurant.about, image: restaurant.image})
      })
      .catch(er => console.log('error',er))
  }
}

export function fetchLogin(admin) {
  
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
  admin_id = window.sessionStorage.getItem('id')
  jwt = window.sessionStorage.getItem('token')
  return (dispatch) => {
    dispatch({type: 'GETTING_ADMIN'})
    fetch(`${BASE_URL}/resturants/1/admins/${admin_id}`,{
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    })
    .then(response => response.json())
    .then(req => {
      dispatch({type: "ADD_ADMIN", id: req.id, name: req.name, username: req.username})
    })
  }
}

export function addCategory(category) {
  let newCategory = {
    name: category,
    resturant_id: "1"
  }
  jwt = window.sessionStorage.getItem('token')

  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1/categories`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json",
        "Accept" : "application/json",
      },body: JSON.stringify(newCategory)
    })
    .then(response => response.json())
    .then(req => {
      dispatch({type: "ADDING_CATEGORY", category: req})
    })
    .catch(error => console.log("error",error))
  } 
}

export function removeCategory(category) {
  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1/categories/${category.id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json",
        "Accept" : "application/json",
      }
    })
    .then(response => response.json())
    .then(req => {
      dispatch({type: "REMOVE_CATEGORY", id: req.id})
    })
    .catch(error => console.log("error",error))
  } 
}

export function editCategory(category, state) {
  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1/categories/${category.id}`, {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json",
        "Accept" : "application/json",
      }, body: JSON.stringify(state)
    })
    .then(response => response.json())
    .then(req => {
      dispatch({type: "EDIT_CATEGORY", payload: req })
    })
    .catch(error => console.log("error",error))
  }
} 


export function addFood(food, id) {
  // food.cost = parseFloat(food.cost).toFixed(2)
  
  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1/categories/${id}/foods`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        // "Content-Type": "application/json",
        "Accept" : "application/json",
      },body: food
    })
    .then(response => response.json())
    .then(req => {
      console.log(req)
      dispatch({type: "ADD_FOOD", payload: req})
    })
  }
} 

export function editFood(food, foodForm) {
  // food = {
  //   ...food, 
  //   category_id: food.category
  // }
  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1/categories/${food.category_id}/foods/${food.id}`, {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        // "Content-Type": "application/json",
        "Accept" : "application/json",
      }, body: foodForm
    })
    .then(response => response.json())
    .then(req => {
      dispatch({type: "EDIT_FOOD", payload: req })
    })
    .catch(error => console.log("error",error))
  }
}

export function removeFood(food) {
  // food = {
  //   ...food, 
  //   category_id: food.category
  // }
  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1/categories/${food.category_id}/foods/${food.id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json",
        "Accept" : "application/json",
      }
    })
    .then(response => response.json())
    .then(req => {
      dispatch({type: "REMOVE_FOOD", payload: req })
    })
    .catch(error => console.log("error",error))
  }
}

export function editRestaurant(res) {
  return (dispatch) => {
    dispatch({type: "LOADING_RESTAURANT"})
    fetch(`${BASE_URL}/resturants/1`,{
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        // "Content-Type": "application/json",
        "Accept" : "application/json",
      }, body: res
    })
      .then(response => response.json())
      .then(restaurant => {
        dispatch({type: "EDIT_RESTAURANT", name: restaurant.name, about: restaurant.about, image: restaurant.image})
      })
      .catch(er => console.log('error',er))
  }
}

export function editAdmin(admin) {
  return (dispatch) => {
    dispatch({type: 'GETTING_ADMIN'})
    fetch(`${BASE_URL}/resturants/1/admins/${admin_id}`,{
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json",
        "Accept" : "application/json",
      }, body: JSON.stringify(admin)
    })
    .then(response => response.json())
    .then(req => {
      dispatch({type: "EDIT_ADMIN", id: req.id, name: req.name, username: req.username})
    })
  }
}