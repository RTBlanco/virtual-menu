import { combineReducers } from "redux";

export function restaurantReducer(state = {name: "", categories: [], foods: [], loading: false}, action) {
  // console.log(action)
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