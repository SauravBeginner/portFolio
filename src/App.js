import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/work" component={Work}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/blog" component={Blog}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
