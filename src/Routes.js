import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
