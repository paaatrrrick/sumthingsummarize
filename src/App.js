import logo from './logo.svg';
import './App.css';
import './Saber.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/quiz' component={Quiz} />
      <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} />
    </Switch>
  );
}

export default App;
