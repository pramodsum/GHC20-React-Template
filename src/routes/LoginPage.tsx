import React from "react";
import "typeface-roboto";

import { TextField, FormControl } from "@material-ui/core";

import Layout from "../components/Layout";

const LoginPage: React.FC = () => {
  const [userName, setUserName] = React.useState<string | null>(
    localStorage.getItem("ghc20-username")
  );
  return (
    <Layout>
      <FormControl>
        <TextField
          helperText="Set User Name"
          variant="outlined"
          placeholder="Username"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </FormControl>
    </Layout>
  );
};

export default LoginPage;
