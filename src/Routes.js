import React from "react";
import {Switch, Route, Redirect , BrowserRouter} from "react-router-dom";
import IntroComponent from "./App.js";
import WorkComponent from './Work.js';
import BlogComponent from './Blog.js';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IntroComponent} />
        <Route exact path="/work" component={WorkComponent} />
        <Route exact path="/blog" component={BlogComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;