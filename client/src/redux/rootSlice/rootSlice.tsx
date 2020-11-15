import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClinetStateT, RoomT, UserT } from "../../../../appTypes";

const unknownInitialUser: UserT = {
  userid: "unknow",
  name: "unknown",
  online: false,
  roomid: "unknown",
};

const unknownInitalRoom: RoomT = {
  users: [unknownInitialUser],
  roomid: "unknown",
  host: unknownInitialUser,
};

const initalClientState: ClinetStateT = {
  user: unknownInitialUser,
  room: unknownInitalRoom,
};

const rootSlice = (state: ClinetStateT = initalClientState) =>
  createSlice({
    name: "rootSlice",
    initialState: state,
    reducers: {
      welcome(state: ClinetStateT, action: PayloadAction<ClinetStateT>) {
        console.log(action.payload);
        state.room = action.payload.room;
        state.user = action.payload.user;
      },
      // setName(state: ClinetStateT, action: PayloadAction<string>) {
      // dont worry about these updates, we get the entire room, and user from the server
      //    this is to ensure that the server and room remain in sync, and so that we only
      //    need to handle the logic in one place.
      // window.localStorage.setItem("name", action.payload);
      // const newName = action.payload;

      // API CALL TO GQL and recive tnew USER + ROOM
      // State = GQLChangeName(state, newName)ClientStateResponse

      // state.user.name = name;
      // },
      // setClientRoomid(state: ClinetStateT, action: PayloadAction<string>) {
      //   window.localStorage.setItem("clientRoomid", action.payload);
      //   state.clientRoomid = action.payload;
      // },
      // // generateNewRoom(state: ClinetStateT, action: PayloadAction<string>) {
      // //   window.localStorage.setItem("clientRoomid", action.payload);
      // //   state.clientRoomid = action.payload;
      // // },
      // joinExisitingRoom(state: ClinetStateT, action: PayloadAction<string>) {
      //   window.localStorage.setItem("clientRoomid", action.payload);
      //   state.clientRoomid = action.payload;
      // },
      // leaveCurrentRoom(state: ClinetStateT, action: PayloadAction<void>) {},
      // setRoom(state: ClinetStateT, action: PayloadAction<RoomT>) {
      //   window.localStorage.setItem("clientRoomid", action.payload.roomid);
      //   state.room = action.payload;
      // },
    },
  });

export const {
  welcome,
  // generateNewRoom,
  // joinExisitingRoom,
  // leaveCurrentRoom,
  // setClientRoomid,
  // setRoom,
} = rootSlice().actions;

export default rootSlice;
