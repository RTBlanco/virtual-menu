import { combineReducers } from "redux";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  admin: adminReducer
})

export default rootReducer;

function restaurantReducer(state = {name: "", categories: [], foods: [], loading: false}, action) {
  switch(action.type) {
    case 'LOADING_RESTAURANT':
      return {
        ...state, 
        loading: true
      }

    case "ADDING_RESTAURANT":
      return {
        name: action.name,
        categories: action.categories,
        foods: action.foods,
        loading: false
      }
    default:
      return state
  }
}

function adminReducer(state = {id:"",  name: "", username: "", token:"", loading: false}, action ) {
  switch(action.type) {
    case "LOGGING_IN":
      return {
        ...state,
        loading: true
      }

    case 'LOGGED_IN':
      
      return {
        id: action.id,
        name: action.name,
        username: action.username,
        token: action.token,
        loading: false
      }

    case 'GETTING_ADMIN':
      return {
        ...state,
        loading: true
      }

    case "ADD_ADMIN":
      return{
        ...state,
        id: action.id,
        name: action.name,
        username: action.username,
        loading: false
      }

    case "LOGOUT":
      window.sessionStorage.clear()
      return {id:"",  name: "", username: "", token:"", loading: false}

    default:
      return state
  }
}




// const rootReducer = combineReducers({
//   restaurant: restaurantReducer,
//   categories: categoiesReducer,
//   foods: foodsReducer
// })

// export default rootReducer;

// function restaurantReducer(state = {name: "", loading: false}, action) {
//   // console.log(action)
//   switch(action.type) {
//     case 'LOADING_RESTAURANT':
//       return{
//         ...state,
//         loading: true
//       }

//     case 'ADDING_RESTAURANT':
//       return {
//         name: action.name, 
//         loading: false
//       }

//     default: 
//       return state
//   }
// }

// function categoiesReducer(state = [], action) {
//   switch(action.type) {

//     case 'ADDING_CATEGORIES':
//       return [...state, action.categories]

//     default: 
//       return state
//   }
// }

// function foodsReducer(state = [], action) {
//   switch(action.type) {
    
//     case 'ADDING_FOODS':
//       return [
//         ...state,
//         action.foods
//       ]

//     default: 
//       return state
//   }
// }

// function adminReducer(state = {name: '', username: "", loading: false}, action ) {
//   return state
// }