import React from "react";
import "typeface-roboto";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./Layout.css";

const Layout: React.FC = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography className="title" variant="h6">
          Home
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Container>{children}</Container>
  </>
);

export default Layout;
