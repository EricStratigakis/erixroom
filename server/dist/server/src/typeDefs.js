"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql `
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
//# sourceMappingURL=typeDefs.js.map