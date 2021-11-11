import React from "react";
import "./app.css";
import Home from "./pages/Home";
import UserAdmin from "./pages/UserAdmin";
import AddUser from "./pages/AddUser";
import Header from "./features/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/add-user" exact>
            <AddUser />
          </Route>
          <Route path="/users/:userid">
            <UserAdmin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
