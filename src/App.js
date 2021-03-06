import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar/";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/room/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
