"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const store_1 = __importDefault(require("./redux/store/store"));
const rootSlice_1 = require("./redux/rootSlice/rootSlice");
exports.default = {
    Query: {
        getRooms: (_, {}) => {
            let roomsArr = [];
            for (const [key, value] of Object.entries(store_1.default.getState().root.rooms)) {
                roomsArr.push(value);
            }
            if (roomsArr.length == 0) {
                return new apollo_server_1.ApolloError("Rooms are empty");
            }
            return roomsArr;
        },
    },
    Mutation: {
        welcome: (_, welcomeInput) => {
            const { userid } = welcomeInput;
            store_1.default.dispatch(rootSlice_1.welcome(welcomeInput));
            const welcomedUser = store_1.default.getState().root.users[userid];
            const welcomedRoom = store_1.default.getState().root.rooms[welcomedUser.roomid];
            const welcomeInitialClientState = {
                user: welcomedUser,
                room: welcomedRoom,
            };
            console.log(welcomeInitialClientState);
            return welcomeInitialClientState;
        },
    },
};
//# sourceMappingURL=resolvers.js.map