import React from "react";
import "typeface-roboto";

import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button
} from "@material-ui/core";

import "./Layout.css";

const Layout: React.FC = ({ children }) => {
  const [userName] = React.useState<string | null>(
    localStorage.getItem("ghc20-username")
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className="title" variant="h6">
            Home
          </Typography>
          {userName ? (
            <Box>
              <Typography variant="body1">{userName}</Typography>
              <Button color="inherit" href="/login">
                {`Not ${userName}?`}
              </Button>
            </Box>
          ) : (
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box py={4}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
