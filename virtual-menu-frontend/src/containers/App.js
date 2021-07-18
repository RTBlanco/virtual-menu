import Name from "../components/Name";
import NavBar from "../components/NavBar";
import FoodComponent from "../components/FoodComponent";
import Foods from "./Foods";
import Home from "./Home";
import { fetchResturant } from "../actions/restaurantActions";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

function App(props) {

  const dispatch = useDispatch(); 

  const restaurant = useSelector( (state) => {
    return {
      name: state.name,
      loading: state.loading,
      categories: state.categories
    }
  })

  useEffect(() => {
    dispatch(fetchResturant())
  },[])

  const handleLoading = () => {
    if (restaurant.loading) {
      return "Loading"
    } else {
      return restaurant.name
    }
  }

  return (
    <Router>
      <div className="App">
        <Name name={handleLoading()}/>
        <NavBar />
        <Switch>
          <Route exact path='/' component={() => <Home categories={restaurant.categories}/>}/>
          <Route path='/:category_name/:name' render={match => <FoodComponent {...match} categories={restaurant.categories} /> }/>
          <Route path='/:name' component={match => <Foods {...match} categories={restaurant.categories}/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

