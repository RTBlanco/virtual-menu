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

    case "ADDING_CATEGORY":
      return {
        ...state, 
        categories: [ ...state.categories, action.category],
        loading: false
      }

    case "REMOVE_CATEGORY":
      return {
        ...state, 
        categories: [...state.categories.filter(cat => cat.id !== action.id )],
        loading: false
      } 

    case "EDIT_CATEGORY":
      let index = state.categories.findIndex(cat => cat.id == action.payload.id)

      return {
        ...state,
        categories: [...state.categories.slice(0, index), action.payload, ...state.categories.slice(index + 1)],
        // categories: [...categories],
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
      window.sessionStorage.setItem('token', action.token)
      window.sessionStorage.setItem('id', action.id)
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