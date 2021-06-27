import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import IntroComponent from "./App.js";
import WorkComponent from './Work.js'
// import BlogComponent from './Blog'
// import ContactComponent from './Contact'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/'><Redirect to='/home' /> </Route>
        <Route exact path="/home" component={IntroComponent} />
        <Route exact path="/work" component={WorkComponent} />
        {/* <Route exact path="/blog" component={BlogComponent} />
        <Route exact path="/contact" component={ContactComponent} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;