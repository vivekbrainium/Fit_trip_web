import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Container/Authentication/Login";
import ForgotPassword from "./Container/Authentication/ForgotPassword";
import Erorr from './Erorr';
import Home from "./Container/Home"



function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/login'  component={Login} />
          <Route path='/forgotPassword' component={ForgotPassword} />

          <Route component={Erorr} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
