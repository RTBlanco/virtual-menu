import HeaderComponent from "../components/HeaderComponent";
import NavBar from "../components/NavBar";
import FoodComponent from "../components/FoodComponent";
import Foods from "./Foods";
import Home from "./Home";
import Admin from "./Admin";
import { fetchResturant } from "../actions/restaurantActions";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import './App.css'

function App() {

  const dispatch = useDispatch(); 

  const restaurant = useSelector( (state) => {
    return {
      image: state.restaurant.image,
      about: state.restaurant.about,
      name: state.restaurant.name,
      loading: state.restaurant.loading,
      categories: state.restaurant.categories
    }
  })

  useEffect(() => {
    dispatch(fetchResturant())
  },[])

 
  return (
    <Router>
      <div className="App">
        <HeaderComponent resturant={restaurant}/>
        <NavBar categories={restaurant.categories}/>
        <Switch>
          <Route exact path='/' component={() => <Home restaurant={restaurant}/>}/>
          <Route exact path='/admin' component={Admin} />
          <Route path='/:category_name/:name' render={match => <FoodComponent {...match} categories={restaurant.categories} /> }/>
          <Route path='/:name' component={match => <Foods {...match} categories={restaurant.categories}/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

