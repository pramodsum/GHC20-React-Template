import React from "react";
import "typeface-roboto";

import { Container, AppBar, Typography, Toolbar, Box } from "@material-ui/core";

import "./Layout.css";

const Layout: React.FC = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography className="title" variant="h6">
          Home
        </Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg">
      <Box py={4}>{children}</Box>
    </Container>
  </>
);

export default Layout;
