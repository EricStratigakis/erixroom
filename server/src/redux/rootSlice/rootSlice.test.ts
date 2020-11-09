import rootSlice from "./rootSlice";
import {
  initialServerState,
  vanillaWelcomeResult,
  singleUserInitialServerState,
} from "../../../../states";

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
  test("welcome action creator", () => {
    const myRootSlice = rootSlice();
    expect(myRootSlice.actions.welcome("some uuid()")).toStrictEqual({
      type: "rootSlice/welcome",
      payload: "some uuid()",
    });
  });
  test("welcome adds a new user", () => {
    const myRootSlice = rootSlice(initialServerState);
    expect(
      myRootSlice.reducer(initialServerState, {
        type: "rootSlice/welcome",
        payload: "some uuid()",
      })
    ).toStrictEqual(vanillaWelcomeResult);
  });
  test("welcome reactivates an old user", () => {
    const myRootSlice = rootSlice(singleUserInitialServerState);
    expect(
      myRootSlice.reducer(singleUserInitialServerState, {
        type: "rootSlice/welcome",
        payload: "some uuid()",
      })
    ).toStrictEqual(vanillaWelcomeResult);
  });
  //test("welcome reactivates an old user that is the host of a room", () => {
  //    can only be tested when we have ability to leave room
});

// describe("setName", () => {
//   test("setName action creator", () => {
//     const myRootSlice = rootSlice(blankState);
//     expect(myRootSlice.actions.setName("eric")).toStrictEqual({
//       type: "rootSlice/setName",
//       payload: "eric",
//     });
//   });
//   test("setName sets the user name", () => {
//     const myRootSlice = rootSlice(blankState);
//     expect(
//       myRootSlice.reducer(blankState, {
//         type: "rootSlice/setName",
//         payload: "eric",
//       })
//     ).toStrictEqual({
//       clientRoomid: "1234",
//       user: { userid: "4321", name: "eric", online: true },
//       room: {
//         roomid: "homeroom",
//         host: { userid: "homid", name: "homie", online: true },
//         users: [{ userid: "4321", name: "eric", online: true }],
//       },
//     });
// myRootSlice.actions.setName("eric")
// expect()
// });
// });
