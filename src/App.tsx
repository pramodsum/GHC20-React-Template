import React from "react";
import "typeface-roboto";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFoundPage from "./routes/NotFoundPage";
import Homepage from "./routes/Homepage";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
