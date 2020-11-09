// import { gql, useMutation } from "@apollo/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApolloError } from "apollo-server";
import { v1 as uuid } from "uuid";
import {
  ServerStateT,
  UserT,
  GenerateNewRoomInputT,
  JoinExistingRoomInputT,
  SetNameInputT,
  WelcomeInputT,
  RoomT,
} from "../../../../appTypes";
import { initailServerState } from "../../../../testObjects/serverStates";

const rootSlice = (state: ServerStateT = initailServerState) =>
  createSlice({
    name: "rootSlice",
    initialState: state,
    reducers: {
      welcome(state: ServerStateT, action: PayloadAction<WelcomeInputT>) {
        const { userid } = action.payload;
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
      setName(state: ServerStateT, action: PayloadAction<SetNameInputT>) {
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
      generateNewRoom(
        state: ServerStateT,
        action: PayloadAction<GenerateNewRoomInputT>
      ) {
        const { userid } = action.payload;
        if (state.users[userid].roomid !== "homeroom") {
          throw new ApolloError("Can only Generate from homeroom");
        }
        if (userid === "homid") {
          throw new ApolloError("Homie can't leave the homeroom");
        }
        if (!state.users[userid].online) {
          throw new ApolloError("An Offline User cant create a room");
        }
        const newRoomid = uuid();
        const userCreatingRoom = { ...state.users[userid], roomid: newRoomid };
        state.users[userid] = userCreatingRoom;
        const newRoom = {
          host: userCreatingRoom,
          users: [userCreatingRoom],
          roomid: newRoomid,
        };
        state.rooms["homeroom"].users = state.rooms["homeroom"].users.filter(
          (u) => u.userid !== userid
        );
        state.rooms[newRoomid] = newRoom;
      },
      joinExistingRoom(
        state: ServerStateT,
        action: PayloadAction<JoinExistingRoomInputT>
      ) {
        const { userid, newRoomid } = action.payload;
        if (state.users[userid].roomid !== "homeroom") {
          throw new ApolloError("Can only Join A room from homeroom");
        }
        if (userid === "homid") {
          throw new ApolloError("Homie can't leave the homeroom");
        }
        if (!state.users[userid].online) {
          throw new ApolloError("An Offline User cant join a room");
        }
        if (!state.rooms[newRoomid]) {
          throw new ApolloError("cant join a room that does not exist");
        }
        const newUser: UserT = {
          ...state.users[userid],
          roomid: newRoomid,
        };
        state.users[userid] = newUser;
        const newRoom: RoomT = {
          ...state.rooms[newRoomid],
          users: [...state.rooms[newRoomid].users, newUser],
        };
        state.rooms["homeroom"].users = state.rooms["homeroom"].users.filter(
          (u) => u.userid !== userid
        );
        state.rooms[newRoomid] = newRoom;
      },
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
