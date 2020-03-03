import React from "react";
import "typeface-roboto";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFoundPage from "./routes/NotFoundPage";
import Homepage from "./routes/Homepage";
import LoginPage from "./routes/LoginPage";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Homepage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/account" component={LoginPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
