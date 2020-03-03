import React from "react";
import "typeface-roboto";

import Container from "@material-ui/core/Container";

import initializeFirebase from './utils/firebase/init';

import "./App.css";

function App() {
  initializeFirebase();
  return <Container>TESTING</Container>;
}

export default App;
