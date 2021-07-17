import Name from "../components/Name";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Categories from "./Categories";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Name />
      <NavBar />
      <About />
      <Categories />
    </div>
  );
}

export default App;
