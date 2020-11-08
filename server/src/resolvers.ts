import { ApolloError } from "apollo-server";
import { RoomT, ServerStateT } from "../../appTypes";

const state: ServerStateT = {
  rooms: [
    {
      roomid: "homeroom",
      host: {
        name: "homie",
        userid: "homid",
        online: true,
      },
      users: [
        {
          name: "homie",
          userid: "homid",
          online: true,
        },
      ],
    },
  ],
};

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
