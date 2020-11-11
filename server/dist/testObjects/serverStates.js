"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ericInHomeOnlineSonjaHostRoomAServerState = exports.ericHostRoomASonjaInRoomAOnlineSereverState = exports.ericHostRoomASonjaInHomeroomOnlineSereverState = exports.ericaHostRoomAOnlineServerState = exports.ericHostRoomAOnlineServerState = exports.ericInHomeOnlineServerState = exports.ericInHomeOfflineServerState = exports.newbaccaServerState = exports.WelcomeServerState = exports.initailServerState = void 0;
const users_1 = require("./users");
const rooms_1 = require("./rooms");
exports.initailServerState = {
    rooms: {
        homeroom: rooms_1.homieAlone,
    },
    users: {
        homid: users_1.homid,
    },
};
exports.WelcomeServerState = {
    rooms: {
        homeroom: rooms_1.newidInHome,
    },
    users: {
        homid: users_1.homid,
        newid: users_1.newid,
    },
};
exports.newbaccaServerState = {
    rooms: {
        homeroom: rooms_1.newbaccaInHome,
    },
    users: {
        homid: users_1.homid,
        newid: users_1.newbacca,
    },
};
exports.ericInHomeOfflineServerState = {
    rooms: {
        homeroom: rooms_1.ericOfflineInHomeRoom,
    },
    users: {
        homid: users_1.homid,
        ericid: users_1.ericInHomeOffline,
    },
};
exports.ericInHomeOnlineServerState = {
    rooms: {
        homeroom: rooms_1.ericOnlineInHomeRoom,
    },
    users: {
        homid: users_1.homid,
        ericid: users_1.ericInHomeOnline,
    },
};
exports.ericHostRoomAOnlineServerState = {
    rooms: {
        homeroom: rooms_1.homieAlone,
        RoomA: rooms_1.ericHostRoomA,
    },
    users: {
        homid: users_1.homid,
        ericid: users_1.ericInRoomAOnline,
    },
};
exports.ericaHostRoomAOnlineServerState = {
    rooms: {
        homeroom: rooms_1.homieAlone,
        RoomA: rooms_1.ericaHostRoomA,
    },
    users: {
        homid: users_1.homid,
        ericid: users_1.ericaInRoomAOnline,
    },
};
exports.ericHostRoomASonjaInHomeroomOnlineSereverState = {
    rooms: {
        homeroom: rooms_1.sonjaOnlineInHomeRoom,
        RoomA: rooms_1.ericHostRoomA,
    },
    users: {
        homid: users_1.homid,
        ericid: users_1.ericInRoomAOnline,
        sonjaid: users_1.sonjaInHomeOnline,
    },
};
exports.ericHostRoomASonjaInRoomAOnlineSereverState = {
    rooms: {
        homeroom: rooms_1.homieAlone,
        RoomA: rooms_1.ericHostRoomASonjaInRoomAOnline,
    },
    users: {
        homid: users_1.homid,
        ericid: users_1.ericInRoomAOnline,
        sonjaid: users_1.sonjaInRoomAOnline,
    },
};
exports.ericInHomeOnlineSonjaHostRoomAServerState = {
    rooms: {
        homeroom: rooms_1.ericOnlineInHomeRoom,
        RoomA: rooms_1.sonjaHostRoomA,
    },
    users: {
        homid: users_1.homid,
        ericid: users_1.ericInHomeOnline,
        sonjaid: users_1.sonjaInRoomAOnline,
    },
};
//# sourceMappingURL=serverStates.js.map