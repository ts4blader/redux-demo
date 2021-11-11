import React from "react";
import "./app.css";
import Header from "./features/header/Header";
import Hero from "./features/hero/Hero";
import UserList from "./features/user-list/UserList";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <UserList />
    </div>
  );
}

export default App;
