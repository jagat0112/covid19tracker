import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Symptoms from "./components/Pages/Symptoms";
import NavBar from "./components/Layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Pages/Footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import CoronaState from "./components/Context/CoronaContext/CoronaState";
import Country from "./components/Country/Country";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-176095332-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <CoronaState>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/symptoms" component={Symptoms} />
            <Route exact path="/country/:country" component={Country} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </CoronaState>
  );
}

export default App;
