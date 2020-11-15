import { gql } from "apollo-server";

export default gql`
  type User {
    userid: ID!
    name: String!
    online: Boolean!
    roomid: ID!
  }
  type Room {
    roomid: ID!
    users: [User!]
    host: User!
  }
  type ClientState {
    user: User!
    room: Room!
  }
  type Query {
    getRooms: [Room!]
  }
  type Mutation {
    welcome(userid: ID!): ClientState!
  }
`;
