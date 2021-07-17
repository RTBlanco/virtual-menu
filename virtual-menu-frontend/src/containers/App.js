import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Name from "../components/Name";
import NavBar from "../components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Name />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
