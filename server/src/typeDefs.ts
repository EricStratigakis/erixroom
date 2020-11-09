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
  # type ServerState { # might only need this when dealing with real database
  #   rooms: [Room!]
  # }
  type ClientState {
    user: UserT;
    room: RoomT;
  }
  type Query {
    getRooms: [Room!]
  }
  type Mutation {
    welcome(clientState: ClientState!): ClientState

    # setName(clientState: ClientState!, newName: String!): ClientState
  #   generateNewRoom(userid: ID!, name: String!, roomid: ID!): Room
  #   joinExisitingRoom(userid: ID!, name: String!, roomid: ID!): Room
  #   leaveCurrentRoom(userid: ID!, name: String!, roomid: ID!): Room
  }
  # type Subscription {
  #   room(roomid: ID!): Room
  # }
`;
