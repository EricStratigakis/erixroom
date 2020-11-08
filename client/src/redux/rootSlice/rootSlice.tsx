// import { gql, useMutation } from "@apollo/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";
import { ClinetStateT } from "../../../../appTypes";
import { initialState } from "../states";

const rootSlice = (state: ClinetStateT = initialState) =>
  createSlice({
    name: "rootSlice",
    initialState: state,
    reducers: {
      welcome(state: ClinetStateT) {
        window.localStorage.setItem(
          "userid",
          window.localStorage.getItem("userid") || uuid()
        );
        // client state = welcomeServer(state)
      },
      setName(state: ClinetStateT, action: PayloadAction<string>) {
        // dont worry about these updates, we get the entire room, and user from the server
        //    this is to ensure that the server and room remain in sync, and so that we only
        //    need to handle the logic in one place.
        // window.localStorage.setItem("name", action.payload);
        const newName = action.payload;

        // API CALL TO GQL and recive tnew USER + ROOM
        // State = GQLChangeName(state, newName)ClientStateResponse

        // state.user.name = name;
      },
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

// export const {
//   setName,
//   // generateNewRoom,
//   joinExisitingRoom,
//   leaveCurrentRoom,
//   setClientRoomid,
//   setRoom,
// } = rootSlice.actions;

export default rootSlice;
