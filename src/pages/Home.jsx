import React from "react";
import Hero from "../features/hero/Hero";
import UserList from "../features/user-list/UserList";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <UserList />
    </div>
  );
}
