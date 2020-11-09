// import { gql, useMutation } from "@apollo/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { v1 as uuid } from "uuid";
import {
  ClinetStateT,
  ServerStateT,
  UserT,
  SetNameServerActionT,
} from "../../../../appTypes";
import { initailServerState } from "../../../../testObjects/serverStates";

const rootSlice = (state: ServerStateT = initailServerState) =>
  createSlice({
    name: "rootSlice",
    initialState: state,
    reducers: {
      welcome(state: ServerStateT, action: PayloadAction<string>) {
        const userid = action.payload;
        if (state.users[userid]) {
          // case where user is returning
          const exisitingUserRoomid = state.users[userid].roomid;
          state.rooms[exisitingUserRoomid].users = state.rooms[
            exisitingUserRoomid
          ].users.map((u) =>
            u.userid === userid ? { ...u, online: true } : u
          );
          state.users[userid] = { ...state.users[userid], online: true };
        } else {
          // case where user is new
          const newUser: UserT = {
            userid,
            name: "",
            roomid: "homeroom",
            online: true,
          };
          state.rooms["homeroom"].users.push(newUser);
          state.users[userid] = newUser;
        }
      },
      setName(
        state: ServerStateT,
        action: PayloadAction<SetNameServerActionT>
      ) {
        const { userid, name } = action.payload;
        state.users[userid].name = name;
        const roomid = state.users[userid].roomid;
        state.rooms[roomid].users = state.rooms[roomid].users.map((u) =>
          u.userid === userid ? { ...u, name: name } : u
        );
        if (state.rooms[roomid].host.userid === userid) {
          state.rooms[roomid].host.name = name;
        }
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
