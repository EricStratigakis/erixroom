"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const store_1 = __importDefault(require("./redux/store/store"));
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
};
//# sourceMappingURL=resolvers.js.map