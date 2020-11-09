import rootSlice from "./rootSlice";
import {
  WelcomeServerState,
  initailServerState,
  ericInHomeOfflineServerState,
  ericInHomeOnlineServerState,
  ericHostRoomAOnlineServerState,
  ericaHostRoomAOnlineServerState,
  newbaccaServerState,
} from "../../../../testObjects/serverStates";

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
    expect(myRootSlice.actions.welcome("newid")).toStrictEqual({
      type: "rootSlice/welcome",
      payload: "newid",
    });
  });
  test("welcome adds a new user", () => {
    expect(
      myRootSlice.reducer(initailServerState, {
        type: "rootSlice/welcome",
        payload: "newid",
      })
    ).toStrictEqual(WelcomeServerState);
  });
  test("welcome reactivates an old user that is in home", () => {
    expect(
      myRootSlice.reducer(ericInHomeOfflineServerState, {
        type: "rootSlice/welcome",
        payload: "ericid",
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
  test("setName action creator", () => {
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
