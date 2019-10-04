import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { homePageQuery_authenticatedUser } from "../_generated/schemaTypes";
import { Card, CardHeader, CardContent } from "@material-ui/core";

const HOME_PAGE_QUERY = gql`
  query homePageQuery {
    authenticatedUser {
      displayName
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery<homePageQuery_authenticatedUser>(
    HOME_PAGE_QUERY
  );
  const results = data!;
  return <></>;
}
