import React from "react";
import {Switch, Route, Redirect , HashRouter} from "react-router-dom";
import IntroComponent from "./App.js";
import WorkComponent from './Work.js'
// import BlogComponent from './Blog'
// import ContactComponent from './Contact'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path = '/'> <Redirect to='/home' /> </Route>
        <Route exact path="/home" component={IntroComponent} />
        <Route exact path="/work" component={WorkComponent} />
        {/* <Route exact path="/blog" component={BlogComponent} />
        <Route exact path="/contact" component={ContactComponent} /> */}
      </Switch>
    </HashRouter>
  );
};

export default Routes;