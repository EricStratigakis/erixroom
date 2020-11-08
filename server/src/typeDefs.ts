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
    hostid: User!
  }
  type ServerState {
    rooms: [Room!]
  }
  type ClientState {
    clientRoomid: string;
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
