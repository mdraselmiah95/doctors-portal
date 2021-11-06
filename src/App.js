import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";
import LogIn from "./pages/LogIn/LogIn/LogIn";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
