import store from "./store";
import { initailServerState } from "../../../../testObjects/serverStates";

describe("Store defenition", () => {
  test("store intial state", () => {
    expect(store.getState().root).toStrictEqual(initailServerState);
  });
});
