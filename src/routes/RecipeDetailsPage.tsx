import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout/Layout";
import { RouteParams, RecipeDetails } from "../utils/types";

const RecipeDetailsPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { slug } = match.params as RouteParams;
  const [recipeDetails, setItemDetails] = React.useState<RecipeDetails>();

  React.useEffect(() => {
    ////////////////////////////////
    ////////////////////////////////
    ////////////////////////////////
    // FETCH RECIPE DETAILS FROM API
    ////////////////////////////////
    ////////////////////////////////
    ////////////////////////////////
  }, [slug]);

  return (
    <Layout>
      {recipeDetails && (
        <>
          <h1>{recipeDetails.name}</h1>
          <ReactMarkdown source={recipeDetails.recipe} />
        </>
      )}
    </Layout>
  );
};

export default RecipeDetailsPage;
