const { gql } = require("apollo-server-express");

const typeDefs = gql`

  input GameInput {
    gameId: Int!
    name: String!
    background: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    games: [Game]
  }

  type Game {
  gameId: Int!
  name: String!
  background: String!
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGameToUser(profileId: ID!, game: GameInput!): User
  }
`;

module.exports = typeDefs;
