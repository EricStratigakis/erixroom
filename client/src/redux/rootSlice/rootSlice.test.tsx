import rootSlice from "./rootSlice";
import { blankState } from "../states";

describe("rootslice defenition", () => {
  const myRootSlice = rootSlice();
  test("rootSlice name", () => {
    expect(myRootSlice.name).toStrictEqual("rootSlice");
  });
  test("rootSlice actions defined", () => {
    expect(myRootSlice.actions.setName).toBeDefined();
    expect(myRootSlice.actions.setName.type).toStrictEqual("rootSlice/setName");
  });
});

describe("welcome", () => {
  test("welcome action creator", () => {
    const myRootSlice = rootSlice(blankState);
    expect(myRootSlice.actions.welcome()).toStrictEqual({
      type: "rootSlice/welcome",
    });
  });
  // test("welcome sets the user name", () => {
  //   const myRootSlice = rootSlice(blankState);
  //   expect(
  //     myRootSlice.reducer(blankState, {
  //       type: "rootSlice/welcome",
  //     })
  //   ).toStrictEqual({
  //     clientRoomid: "1234",
  //     user: { userid: "4321", name: "eric", online: true },
  //     room: {
  //       roomid: "homeroom",
  //       host: { userid: "homid", name: "homie", online: true },
  //       users: [{ userid: "4321", name: "eric", online: true }],
  //     },
  //   });
  //   // myRootSlice.actions.setName("eric")
  //   // expect()
  // });
});

describe("setName", () => {
  test("setName action creator", () => {
    const myRootSlice = rootSlice(blankState);
    expect(myRootSlice.actions.setName("eric")).toStrictEqual({
      type: "rootSlice/setName",
      payload: "eric",
    });
  });
  test("setName sets the user name", () => {
    const myRootSlice = rootSlice(blankState);
    expect(
      myRootSlice.reducer(blankState, {
        type: "rootSlice/setName",
        payload: "eric",
      })
    ).toStrictEqual({
      clientRoomid: "1234",
      user: { userid: "4321", name: "eric", online: true },
      room: {
        roomid: "homeroom",
        host: { userid: "homid", name: "homie", online: true },
        users: [{ userid: "4321", name: "eric", online: true }],
      },
    });
    // myRootSlice.actions.setName("eric")
    // expect()
  });
});
