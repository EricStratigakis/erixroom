import rootSlice from "./rootSlice";
import {
  WelcomeServerState,
  initailServerState,
  ericInHomeOfflineServerState,
  ericInHomeOnlineServerState,
  ericHostRoomAOnlineServerState,
  ericaHostRoomAOnlineServerState,
  newbaccaServerState,
  ericHostRoomASonjaInHomeroomOnlineSereverState,
  ericHostRoomASonjaInRoomAOnlineSereverState,
  ericInHomeOnlineSonjaHostRoomAServerState,
} from "../../../../testObjects/serverStates";
import { ApolloError } from "apollo-server";
import { homid } from "../../../../testObjects/users";
import { UserT } from "../../../../appTypes";

describe("rootslice defenition", () => {
  const myRootSlice = rootSlice();
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
  const myRootSlice = rootSlice();
  test("welcome action creator", () => {
    expect(myRootSlice.actions.welcome({ userid: "newid" })).toStrictEqual({
      type: "rootSlice/welcome",
      payload: { userid: "newid" },
    });
  });
  test("welcome adds a new user", () => {
    expect(
      myRootSlice.reducer(initailServerState, {
        type: "rootSlice/welcome",
        payload: { userid: "newid" },
      })
    ).toStrictEqual(WelcomeServerState);
  });
  test("welcome reactivates an old user that is in home", () => {
    expect(
      myRootSlice.reducer(ericInHomeOfflineServerState, {
        type: "rootSlice/welcome",
        payload: { userid: "ericid" },
      })
    ).toStrictEqual(ericInHomeOnlineServerState);
  });
  //test("welcome reactivates an old user that is the host of a room", () => {
  //    can only be tested when we have ability to leave room
});
describe("setName", () => {
  const myRootSlice = rootSlice();
  test("setName action creator", () => {
    expect(
      myRootSlice.actions.setName({ userid: "newid", name: "newbacca" })
    ).toStrictEqual({
      type: "rootSlice/setName",
      payload: { userid: "newid", name: "newbacca" },
    });
  });
  test("setName for new user", () => {
    expect(
      myRootSlice.reducer(WelcomeServerState, {
        type: "rootSlice/setName",
        payload: { userid: "newid", name: "newbacca" },
      })
    ).toStrictEqual(newbaccaServerState);
  });
  test("setName sets the user name that is host of other room", () => {
    expect(
      myRootSlice.reducer(ericHostRoomAOnlineServerState, {
        type: "rootSlice/setName",
        payload: { userid: "ericid", name: "erica" },
      })
    ).toStrictEqual(ericaHostRoomAOnlineServerState);
  });
});
describe("generateNewRoom", () => {
  const myRootSlice = rootSlice();
  test("generateNewRoom action creator", () => {
    expect(
      myRootSlice.actions.generateNewRoom({ userid: "ericid" })
    ).toStrictEqual({
      type: "rootSlice/generateNewRoom",
      payload: { userid: "ericid" },
    });
  });
  test("generateNewRoom throws error if userid not in homeroom", () => {
    expect(() => {
      myRootSlice.reducer(ericaHostRoomAOnlineServerState, {
        type: "rootSlice/generateNewRoom",
        payload: { userid: "ericid" },
      });
    }).toThrow(new ApolloError("Can only Generate from homeroom"));
  });
  test("generateNewRoom throws error if homie tries to generate a room", () => {
    expect(() => {
      myRootSlice.reducer(initailServerState, {
        type: "rootSlice/generateNewRoom",
        payload: { userid: "homid" },
      });
    }).toThrow(new ApolloError("Homie can't leave the homeroom"));
  });
  test("generateNewRoom throws error if user is offline", () => {
    // should never see this in code by design
    expect(() => {
      myRootSlice.reducer(ericInHomeOfflineServerState, {
        type: "rootSlice/generateNewRoom",
        payload: { userid: "ericid" },
      });
    }).toThrow(new ApolloError("An Offline User cant create a room"));
  });
  test("eric generates new room", () => {
    const res = myRootSlice.reducer(ericInHomeOnlineServerState, {
      type: "rootSlice/generateNewRoom",
      payload: { userid: "ericid" },
    });
    const newRoomid = res.users["ericid"].roomid;
    expect(newRoomid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
    const newEric: UserT = {
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
    expect(res.rooms["homeroom"]).toStrictEqual(
      initailServerState.rooms["homeroom"]
    );
    expect(res.users).toStrictEqual({
      homid: homid,
      ericid: newEric,
    });
  });
});
describe("joinExistingRoom", () => {
  const myRootSlice = rootSlice();
  test("joinExistingRoom action creator", () => {
    expect(
      myRootSlice.actions.joinExistingRoom({
        userid: "ericid",
        newRoomid: "roomA",
      })
    ).toStrictEqual({
      type: "rootSlice/joinExistingRoom",
      payload: {
        userid: "ericid",
        newRoomid: "roomA",
      },
    });
  });
  test("joinExistingRoom throws error if userid not in homeroom", () => {
    expect(() => {
      myRootSlice.reducer(ericaHostRoomAOnlineServerState, {
        type: "rootSlice/joinExistingRoom",
        payload: { userid: "ericid", newRoomid: "whatever" },
      });
    }).toThrow(new ApolloError("Can only Join A room from homeroom"));
  });
  test("joinExistingRoom throws error if homie tries to generate a room", () => {
    expect(() => {
      myRootSlice.reducer(initailServerState, {
        type: "rootSlice/joinExistingRoom",
        payload: { userid: "homid", newRoomid: "whatever" },
      });
    }).toThrow(new ApolloError("Homie can't leave the homeroom"));
  });
  test("joinExistingRoom throws error if user is offline", () => {
    // should never see this in code by design
    expect(() => {
      myRootSlice.reducer(ericInHomeOfflineServerState, {
        type: "rootSlice/joinExistingRoom",
        payload: { userid: "ericid", newRoomid: "whatever" },
      });
    }).toThrow(new ApolloError("An Offline User cant join a room"));
  });
  test("joinExistingRoom throws error if room deos not exist is offline", () => {
    // should never see this in code by design
    expect(() => {
      myRootSlice.reducer(ericInHomeOnlineServerState, {
        type: "rootSlice/joinExistingRoom",
        payload: { userid: "ericid", newRoomid: "whatever" },
      });
    }).toThrow(new ApolloError("cant join a room that does not exist"));
  });
  test("sonja joins eric's roomA", () => {
    expect(
      myRootSlice.reducer(ericHostRoomASonjaInHomeroomOnlineSereverState, {
        type: "rootSlice/joinExistingRoom",
        payload: { userid: "sonjaid", newRoomid: "RoomA" },
      })
    ).toStrictEqual(ericHostRoomASonjaInRoomAOnlineSereverState);
  });
});
describe("leaveCurrentRoom", () => {
  const myRootSlice = rootSlice();
  test("leaveCurrentRoom action creator", () => {
    expect(
      myRootSlice.actions.leaveCurrentRoom({
        userid: "ericid",
      })
    ).toStrictEqual({
      type: "rootSlice/leaveCurrentRoom",
      payload: {
        userid: "ericid",
      },
    });
  });
  test("leaveCurrentRoom throws error if userid in homeroom", () => {
    expect(() => {
      myRootSlice.reducer(ericaHostRoomAOnlineServerState, {
        type: "rootSlice/leaveCurrentRoom",
        payload: { userid: "homid" },
      });
    }).toThrow(new ApolloError("Cant Leave the homeroom"));
  });
  test("eric is alone as host leaves his room", () => {
    expect(
      myRootSlice.reducer(ericHostRoomAOnlineServerState, {
        type: "rootSlice/leaveCurrentRoom",
        payload: { userid: "ericid" },
      })
    ).toStrictEqual(ericInHomeOnlineServerState);
  });
  test("eric is host and leaves sonja in charge", () => {
    expect(
      myRootSlice.reducer(ericHostRoomASonjaInRoomAOnlineSereverState, {
        type: "rootSlice/leaveCurrentRoom",
        payload: { userid: "ericid" },
      })
    ).toStrictEqual(ericInHomeOnlineSonjaHostRoomAServerState);
  });
});
