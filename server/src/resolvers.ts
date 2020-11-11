import { Dictionary } from "@reduxjs/toolkit";
import { ApolloError } from "apollo-server";
import { RoomT, ServerStateT } from "../../appTypes";
import store from "./redux/store/store";

export default {
  Query: {
    getRooms: (_: any, {}: any): RoomT[] | ApolloError => {
      let roomsArr: RoomT[] = [];

      for (const [key, value] of Object.entries(store.getState().root.rooms)) {
        roomsArr.push(value);
      }

      if (roomsArr.length == 0) {
        return new ApolloError("Rooms are empty");
      }
      return roomsArr;
    },
  },
};
