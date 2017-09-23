import React from "react";
import router, {
  Route,
  Router,
  hashHistory,
  IndexRoute
} from "react-router";

//bring in all components
import Main from "../components/Main";
import Form from "../components/containers/form.js";
import Form_SetUser from "../components/subcomponents/form_setUser.js";
import Form_SetMenu from "../components/subcomponents/form_setMenu.js";
import Form_Confirmation from "../components/subcomponents/Form_Confirmation.js";

module.exports = (
  <Router history={hashHistory}>
      <Route path="/" component={Form}>
        <Route path="/step_1" component={Form_SetUser}/>
        <Route path="/step_2" component={Form_SetMenu}/>
        <Route path="/step_3" component={Form_Confirmation}/>
        <IndexRoute component={Form_SetUser}/>
      </Route>
  </Router>
);