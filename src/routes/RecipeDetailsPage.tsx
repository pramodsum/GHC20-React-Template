import React from "react";
import { RouteComponentProps } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { RouteParams } from "../utils/types";

const RecipeDetailsPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { slug } = match.params as RouteParams;

  return <Layout>{slug}</Layout>;
};

export default RecipeDetailsPage;
