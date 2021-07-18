import Name from "../components/Name";
import NavBar from "../components/NavBar";
import Food from "../components/Food";
import Foods from "./Foods";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Name />
        <NavBar />
        {/* <Categories /> */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/:name' component={match => <Foods {...match}/>} />
          <Route path="/:category_name/:name" render={match => <Food {...match}/> }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
