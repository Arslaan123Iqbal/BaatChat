import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
