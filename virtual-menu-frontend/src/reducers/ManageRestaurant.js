import { combineReducers } from "redux";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  admin: adminReducer
})

export default rootReducer;

function restaurantReducer(state = {name: "", categories: [], loading: false, about: "", image: null}, action) {
  let index
  let category
  let indexOfCategory
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
        about: action.about,
        loading: false,
        image: action.image
      }

    case 'EDIT_RESTAURANT':
      return {
        ...state,
        name: action.name,
        about: action.about,
        image: action.image,
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
      index = state.categories.findIndex(cat => cat.id === action.payload.id)

      return {
        ...state,
        categories: [...state.categories.slice(0, index), action.payload, ...state.categories.slice(index + 1)],
        loading: false
      }

    case "ADD_FOOD":
      index = state.categories.findIndex(cat => cat.id === action.payload.category)
      category = state.categories[index]

      return {
        ...state,
        categories: [
          ...state.categories.slice(0, index),
          {...category, foods:[...category.foods, action.payload] },
          ...state.categories.slice(index + 1)
        ],
        loading: false
      }

    case "EDIT_FOOD":
      indexOfCategory = state.categories.findIndex(cat => cat.id === action.payload.category_id)
      category = state.categories[indexOfCategory]
    
      let indexOfFood = category.foods.findIndex(food => food.id === action.payload.id)

      return {
        ...state,
        categories: [
          ...state.categories.slice(0, indexOfCategory),
          {...category, foods:[...category.foods.slice(0, indexOfFood), action.payload, ...category.foods.slice(indexOfFood + 1)] },
          ...state.categories.slice(indexOfCategory + 1)
        ],
        loading: false
      }

    case "REMOVE_FOOD":
      indexOfCategory = state.categories.findIndex(cat => cat.id === action.payload.category)
      category = state.categories[indexOfCategory]

      return {
        ...state,
        categories:[
          ...state.categories.slice(0, indexOfCategory),
          {...category, foods:[...category.foods.filter(food => food.id !== action.payload.id)] },
          ...state.categories.slice(indexOfCategory + 1)
        ],
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
      return {
        ...state,
        id: action.id,
        name: action.name,
        username: action.username,
        loading: false
      }

    case "LOGOUT":
      window.sessionStorage.clear()
      return {id:"",  name: "", username: "", token:"", loading: false}


    case "EDIT_ADMIN":
      return {
        ...state,
        id: action.id,
        name: action.name,
        username: action.username,
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