import { combineReducers } from "redux";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  categories: categoiesReducer,
  foods: foodsReducer
})

export default rootReducer;

function restaurantReducer(state = {name: ""}, action) {
  return state
}

function categoiesReducer(state = { name:"" }, action) {
  return state
}

function foodsReducer(state = {name: "", cost: 0, calories: 0}, action) {
  return state
}

function adminReducer(state = {name: '', username: ""}, action ) {
  return state
}