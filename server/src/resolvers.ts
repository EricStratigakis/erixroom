import { ApolloError } from "apollo-server";
import { RoomT, ServerStateT } from "../../appTypes";

export default {
  Query: {
    getRooms: (_: any, {}: any): RoomT[] | ApolloError => {
      if (state.rooms.length == 0) {
        return new ApolloError("Rooms are empty");
      }
      return state.rooms;
    },
  },
};
