import { gql } from "apollo-server";

export default gql`
  type User {
    userid: ID!
    name: String!
    online: Boolean!
  }
  type Room {
    roomid: ID!
    users: [User!]
    host: User!
  }
  type Query {
    getRooms: [Room!]
  }
`;
