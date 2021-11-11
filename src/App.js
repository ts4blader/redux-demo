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
          <Route path="/users/:userId">
            <UserAdmin />
          </Route>
          <Route path="/add-user" exact>
            <AddUser />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
