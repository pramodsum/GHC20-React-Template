import React from "react";
import "typeface-roboto";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFoundPage from "./routes/NotFoundPage";
import Homepage from "./routes/Homepage";
import initializeFirebase from "./utils/firebase/init";

const App: React.FC = () => {
  initializeFirebase();

  return (
    <Router>
      <Switch>
        <Route exact path="/tacopundit/" component={Homepage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
