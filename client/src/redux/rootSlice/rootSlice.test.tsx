import rootSlice from "./rootSlice";
import { initalClientState } from "../../../../testObjects/clientStates";

describe("rootslice defenition", () => {
  const myRootSlice = rootSlice();
  test("rootSlice name", () => {
    expect(myRootSlice.name).toStrictEqual("rootSlice");
  });
  test("rootSlice actions defined", () => {
    expect(myRootSlice.actions.welcome).toBeDefined();
    expect(myRootSlice.actions.welcome.type).toStrictEqual("rootSlice/welcome");
  });
});

describe("welcome", () => {
  test("welcome action creator", () => {
    const myRootSlice = rootSlice();
    expect(myRootSlice.actions.welcome()).toStrictEqual({
      type: "rootSlice/welcome",
      payload: undefined,
    });
  });
});
