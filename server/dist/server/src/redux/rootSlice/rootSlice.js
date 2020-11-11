"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { gql, useMutation } from "@apollo/client";
const toolkit_1 = require("@reduxjs/toolkit");
const apollo_server_1 = require("apollo-server");
const uuid_1 = require("uuid");
const serverStates_1 = require("../../../../testObjects/serverStates");
const rootSlice = (state = serverStates_1.initailServerState) => toolkit_1.createSlice({
    name: "rootSlice",
    initialState: state,
    reducers: {
        welcome(state, action) {
            const { userid } = action.payload;
            if (state.users[userid]) {
                // case where user is returning
                const exisitingUserRoomid = state.users[userid].roomid;
                state.rooms[exisitingUserRoomid].users = state.rooms[exisitingUserRoomid].users.map((u) => u.userid === userid ? Object.assign(Object.assign({}, u), { online: true }) : u);
                state.users[userid] = Object.assign(Object.assign({}, state.users[userid]), { online: true });
            }
            else {
                // case where user is new
                const newUser = {
                    userid,
                    name: "",
                    roomid: "homeroom",
                    online: true,
                };
                state.rooms["homeroom"].users.push(newUser);
                state.users[userid] = newUser;
            }
        },
        setName(state, action) {
            const { userid, name } = action.payload;
            state.users[userid].name = name;
            const roomid = state.users[userid].roomid;
            state.rooms[roomid].users = state.rooms[roomid].users.map((u) => u.userid === userid ? Object.assign(Object.assign({}, u), { name: name }) : u);
            if (state.rooms[roomid].host.userid === userid) {
                state.rooms[roomid].host.name = name;
            }
        },
        generateNewRoom(state, action) {
            const { userid } = action.payload;
            if (state.users[userid].roomid !== "homeroom") {
                throw new apollo_server_1.ApolloError("Can only Generate from homeroom");
            }
            if (userid === "homid") {
                throw new apollo_server_1.ApolloError("Homie can't leave the homeroom");
            }
            if (!state.users[userid].online) {
                throw new apollo_server_1.ApolloError("An Offline User cant create a room");
            }
            const newRoomid = uuid_1.v1();
            const userCreatingRoom = Object.assign(Object.assign({}, state.users[userid]), { roomid: newRoomid });
            state.users[userid] = userCreatingRoom;
            const newRoom = {
                host: userCreatingRoom,
                users: [userCreatingRoom],
                roomid: newRoomid,
            };
            state.rooms["homeroom"].users = state.rooms["homeroom"].users.filter((u) => u.userid !== userid);
            state.rooms[newRoomid] = newRoom;
        },
        joinExistingRoom(state, action) {
            const { userid, newRoomid } = action.payload;
            if (state.users[userid].roomid !== "homeroom") {
                throw new apollo_server_1.ApolloError("Can only Join A room from homeroom");
            }
            if (userid === "homid") {
                throw new apollo_server_1.ApolloError("Homie can't leave the homeroom");
            }
            if (!state.users[userid].online) {
                throw new apollo_server_1.ApolloError("An Offline User cant join a room");
            }
            if (!state.rooms[newRoomid]) {
                throw new apollo_server_1.ApolloError("cant join a room that does not exist");
            }
            const newUser = Object.assign(Object.assign({}, state.users[userid]), { roomid: newRoomid });
            state.users[userid] = newUser;
            const newRoom = Object.assign(Object.assign({}, state.rooms[newRoomid]), { users: [...state.rooms[newRoomid].users, newUser] });
            state.rooms["homeroom"].users = state.rooms["homeroom"].users.filter((u) => u.userid !== userid);
            state.rooms[newRoomid] = newRoom;
        },
        leaveCurrentRoom(state, action) {
            const { userid } = action.payload;
            const currRoomid = state.users[userid].roomid;
            if (currRoomid === "homeroom") {
                throw new apollo_server_1.ApolloError("Cant Leave the homeroom");
            }
            const newUser = Object.assign(Object.assign({}, state.users[userid]), { roomid: "homeroom" });
            state.rooms["homeroom"].users = [
                ...state.rooms["homeroom"].users,
                newUser,
            ];
            state.rooms[currRoomid].users = state.rooms[currRoomid].users.filter((u) => u.userid !== userid);
            state.users[userid] = newUser;
            if (state.rooms[currRoomid].host.userid === userid) {
                if (state.rooms[currRoomid].users.length === 0) {
                    delete state.rooms[currRoomid];
                }
                else {
                    state.rooms[currRoomid].host = state.rooms[currRoomid].users[0];
                }
            }
        },
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
exports.default = rootSlice;
//# sourceMappingURL=rootSlice.js.map