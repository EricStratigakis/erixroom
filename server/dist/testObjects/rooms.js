"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ericHostRoomASonjaInRoomAOffline = exports.ericHostRoomASonjaInRoomAOnline = exports.sonjaHostRoomA = exports.ericaHostRoomA = exports.ericHostRoomA = exports.ericOfflineAndSonjaOnlineInHomeRoom = exports.ericAndSonjaOfflineInHomeRoom = exports.ericAndSonjaOnlineInHomeRoom = exports.sonjaOnlineInHomeRoom = exports.ericOfflineInHomeRoom = exports.ericOnlineInHomeRoom = exports.newbaccaInHome = exports.newidInHome = exports.homieAlone = void 0;
const users_1 = require("./users");
exports.homieAlone = {
    users: [users_1.homid],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.newidInHome = {
    users: [users_1.homid, users_1.newid],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.newbaccaInHome = {
    users: [users_1.homid, users_1.newbacca],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.ericOnlineInHomeRoom = {
    users: [users_1.homid, users_1.ericInHomeOnline],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.ericOfflineInHomeRoom = {
    users: [users_1.homid, users_1.ericInHomeOffline],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.sonjaOnlineInHomeRoom = {
    users: [users_1.homid, users_1.sonjaInHomeOnline],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.ericAndSonjaOnlineInHomeRoom = {
    users: [users_1.homid, users_1.ericInHomeOnline, users_1.sonjaInHomeOnline],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.ericAndSonjaOfflineInHomeRoom = {
    users: [users_1.homid, users_1.ericInHomeOffline, users_1.sonjaInHomeOffline],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.ericOfflineAndSonjaOnlineInHomeRoom = {
    users: [users_1.homid, users_1.ericInHomeOffline, users_1.sonjaInHomeOnline],
    host: users_1.homid,
    roomid: "homeroom",
};
exports.ericHostRoomA = {
    users: [users_1.ericInRoomAOnline],
    host: users_1.ericInRoomAOnline,
    roomid: "RoomA",
};
exports.ericaHostRoomA = {
    users: [users_1.ericaInRoomAOnline],
    host: users_1.ericaInRoomAOnline,
    roomid: "RoomA",
};
exports.sonjaHostRoomA = {
    users: [users_1.sonjaInRoomAOnline],
    host: users_1.sonjaInRoomAOnline,
    roomid: "RoomA",
};
exports.ericHostRoomASonjaInRoomAOnline = {
    users: [users_1.ericInRoomAOnline, users_1.sonjaInRoomAOnline],
    host: users_1.ericInRoomAOnline,
    roomid: "RoomA",
};
exports.ericHostRoomASonjaInRoomAOffline = {
    users: [users_1.ericInRoomAOnline, users_1.sonjaInRoomAOffline],
    host: users_1.ericInRoomAOnline,
    roomid: "RoomA",
};
//# sourceMappingURL=rooms.js.map