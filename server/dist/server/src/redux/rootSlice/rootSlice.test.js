"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rootSlice_1 = __importDefault(require("./rootSlice"));
const serverStates_1 = require("../../../../testObjects/serverStates");
const apollo_server_1 = require("apollo-server");
const users_1 = require("../../../../testObjects/users");
describe("rootslice defenition", () => {
    const myRootSlice = rootSlice_1.default();
    test("rootSlice name", () => {
        expect(myRootSlice.name).toStrictEqual("rootSlice");
    });
    test("rootSlice actions defined", () => {
        expect(myRootSlice.actions.welcome).toBeDefined();
        expect(myRootSlice.actions.welcome.type).toStrictEqual("rootSlice/welcome");
        expect(myRootSlice.actions.setName).toBeDefined();
        expect(myRootSlice.actions.setName.type).toStrictEqual("rootSlice/setName");
    });
});
describe("welcome", () => {
    const myRootSlice = rootSlice_1.default();
    test("welcome action creator", () => {
        expect(myRootSlice.actions.welcome({ userid: "newid" })).toStrictEqual({
            type: "rootSlice/welcome",
            payload: { userid: "newid" },
        });
    });
    test("welcome adds a new user", () => {
        expect(myRootSlice.reducer(serverStates_1.initailServerState, {
            type: "rootSlice/welcome",
            payload: { userid: "newid" },
        })).toStrictEqual(serverStates_1.WelcomeServerState);
    });
    test("welcome reactivates an old user that is in home", () => {
        expect(myRootSlice.reducer(serverStates_1.ericInHomeOfflineServerState, {
            type: "rootSlice/welcome",
            payload: { userid: "ericid" },
        })).toStrictEqual(serverStates_1.ericInHomeOnlineServerState);
    });
    //test("welcome reactivates an old user that is the host of a room", () => {
    //    can only be tested when we have ability to leave room
});
describe("setName", () => {
    const myRootSlice = rootSlice_1.default();
    test("setName action creator", () => {
        expect(myRootSlice.actions.setName({ userid: "newid", name: "newbacca" })).toStrictEqual({
            type: "rootSlice/setName",
            payload: { userid: "newid", name: "newbacca" },
        });
    });
    test("setName for new user", () => {
        expect(myRootSlice.reducer(serverStates_1.WelcomeServerState, {
            type: "rootSlice/setName",
            payload: { userid: "newid", name: "newbacca" },
        })).toStrictEqual(serverStates_1.newbaccaServerState);
    });
    test("setName sets the user name that is host of other room", () => {
        expect(myRootSlice.reducer(serverStates_1.ericHostRoomAOnlineServerState, {
            type: "rootSlice/setName",
            payload: { userid: "ericid", name: "erica" },
        })).toStrictEqual(serverStates_1.ericaHostRoomAOnlineServerState);
    });
});
describe("generateNewRoom", () => {
    const myRootSlice = rootSlice_1.default();
    test("generateNewRoom action creator", () => {
        expect(myRootSlice.actions.generateNewRoom({ userid: "ericid" })).toStrictEqual({
            type: "rootSlice/generateNewRoom",
            payload: { userid: "ericid" },
        });
    });
    test("generateNewRoom throws error if userid not in homeroom", () => {
        expect(() => {
            myRootSlice.reducer(serverStates_1.ericaHostRoomAOnlineServerState, {
                type: "rootSlice/generateNewRoom",
                payload: { userid: "ericid" },
            });
        }).toThrow(new apollo_server_1.ApolloError("Can only Generate from homeroom"));
    });
    test("generateNewRoom throws error if homie tries to generate a room", () => {
        expect(() => {
            myRootSlice.reducer(serverStates_1.initailServerState, {
                type: "rootSlice/generateNewRoom",
                payload: { userid: "homid" },
            });
        }).toThrow(new apollo_server_1.ApolloError("Homie can't leave the homeroom"));
    });
    test("generateNewRoom throws error if user is offline", () => {
        // should never see this in code by design
        expect(() => {
            myRootSlice.reducer(serverStates_1.ericInHomeOfflineServerState, {
                type: "rootSlice/generateNewRoom",
                payload: { userid: "ericid" },
            });
        }).toThrow(new apollo_server_1.ApolloError("An Offline User cant create a room"));
    });
    test("eric generates new room", () => {
        const res = myRootSlice.reducer(serverStates_1.ericInHomeOnlineServerState, {
            type: "rootSlice/generateNewRoom",
            payload: { userid: "ericid" },
        });
        const newRoomid = res.users["ericid"].roomid;
        expect(newRoomid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
        const newEric = {
            roomid: newRoomid,
            name: "eric",
            online: true,
            userid: "ericid",
        };
        expect(res.rooms[newRoomid]).toStrictEqual({
            users: [newEric],
            host: newEric,
            roomid: newRoomid,
        });
        expect(res.rooms["homeroom"]).toStrictEqual(serverStates_1.initailServerState.rooms["homeroom"]);
        expect(res.users).toStrictEqual({
            homid: users_1.homid,
            ericid: newEric,
        });
    });
});
describe("joinExistingRoom", () => {
    const myRootSlice = rootSlice_1.default();
    test("joinExistingRoom action creator", () => {
        expect(myRootSlice.actions.joinExistingRoom({
            userid: "ericid",
            newRoomid: "roomA",
        })).toStrictEqual({
            type: "rootSlice/joinExistingRoom",
            payload: {
                userid: "ericid",
                newRoomid: "roomA",
            },
        });
    });
    test("joinExistingRoom throws error if userid not in homeroom", () => {
        expect(() => {
            myRootSlice.reducer(serverStates_1.ericaHostRoomAOnlineServerState, {
                type: "rootSlice/joinExistingRoom",
                payload: { userid: "ericid", newRoomid: "whatever" },
            });
        }).toThrow(new apollo_server_1.ApolloError("Can only Join A room from homeroom"));
    });
    test("joinExistingRoom throws error if homie tries to generate a room", () => {
        expect(() => {
            myRootSlice.reducer(serverStates_1.initailServerState, {
                type: "rootSlice/joinExistingRoom",
                payload: { userid: "homid", newRoomid: "whatever" },
            });
        }).toThrow(new apollo_server_1.ApolloError("Homie can't leave the homeroom"));
    });
    test("joinExistingRoom throws error if user is offline", () => {
        // should never see this in code by design
        expect(() => {
            myRootSlice.reducer(serverStates_1.ericInHomeOfflineServerState, {
                type: "rootSlice/joinExistingRoom",
                payload: { userid: "ericid", newRoomid: "whatever" },
            });
        }).toThrow(new apollo_server_1.ApolloError("An Offline User cant join a room"));
    });
    test("joinExistingRoom throws error if room deos not exist is offline", () => {
        // should never see this in code by design
        expect(() => {
            myRootSlice.reducer(serverStates_1.ericInHomeOnlineServerState, {
                type: "rootSlice/joinExistingRoom",
                payload: { userid: "ericid", newRoomid: "whatever" },
            });
        }).toThrow(new apollo_server_1.ApolloError("cant join a room that does not exist"));
    });
    test("sonja joins eric's roomA", () => {
        expect(myRootSlice.reducer(serverStates_1.ericHostRoomASonjaInHomeroomOnlineSereverState, {
            type: "rootSlice/joinExistingRoom",
            payload: { userid: "sonjaid", newRoomid: "RoomA" },
        })).toStrictEqual(serverStates_1.ericHostRoomASonjaInRoomAOnlineSereverState);
    });
});
describe("leaveCurrentRoom", () => {
    const myRootSlice = rootSlice_1.default();
    test("leaveCurrentRoom action creator", () => {
        expect(myRootSlice.actions.leaveCurrentRoom({
            userid: "ericid",
        })).toStrictEqual({
            type: "rootSlice/leaveCurrentRoom",
            payload: {
                userid: "ericid",
            },
        });
    });
    test("leaveCurrentRoom throws error if userid in homeroom", () => {
        expect(() => {
            myRootSlice.reducer(serverStates_1.ericaHostRoomAOnlineServerState, {
                type: "rootSlice/leaveCurrentRoom",
                payload: { userid: "homid" },
            });
        }).toThrow(new apollo_server_1.ApolloError("Cant Leave the homeroom"));
    });
    test("eric is alone as host leaves his room", () => {
        expect(myRootSlice.reducer(serverStates_1.ericHostRoomAOnlineServerState, {
            type: "rootSlice/leaveCurrentRoom",
            payload: { userid: "ericid" },
        })).toStrictEqual(serverStates_1.ericInHomeOnlineServerState);
    });
    test("eric is host and leaves sonja in charge", () => {
        expect(myRootSlice.reducer(serverStates_1.ericHostRoomASonjaInRoomAOnlineSereverState, {
            type: "rootSlice/leaveCurrentRoom",
            payload: { userid: "ericid" },
        })).toStrictEqual(serverStates_1.ericInHomeOnlineSonjaHostRoomAServerState);
    });
});
//# sourceMappingURL=rootSlice.test.js.map