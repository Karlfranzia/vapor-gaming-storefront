import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query {
    user {
      _id
      username
      email
      games {
        gameId
        name
        background
      }
    }
  }
`;
