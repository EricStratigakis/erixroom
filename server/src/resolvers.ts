import { ApolloError } from "apollo-server";
import { ClinetStateT, RoomT, UserT, WelcomeInputT } from "../../appTypes";
import store from "./redux/store/store";
import { welcome } from "./redux/rootSlice/rootSlice";

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
  Mutation: {
    welcome: (
      _: any,
      welcomeInput: WelcomeInputT
    ): ClinetStateT | ApolloError => {
      const { userid } = welcomeInput;
      store.dispatch(welcome(welcomeInput));
      const welcomedUser: UserT = store.getState().root.users[userid];
      const welcomedRoom: RoomT = store.getState().root.rooms[
        welcomedUser.roomid
      ];
      const welcomeInitialClientState: ClinetStateT = {
        user: welcomedUser,
        room: welcomedRoom,
      };
      return welcomeInitialClientState;
    },
  },
};
