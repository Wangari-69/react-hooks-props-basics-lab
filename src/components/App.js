import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About name={user.name} bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
