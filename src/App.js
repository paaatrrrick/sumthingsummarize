import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} />
    </Switch>
  );
}

export default App;
