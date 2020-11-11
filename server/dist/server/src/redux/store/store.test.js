"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __importDefault(require("./store"));
const serverStates_1 = require("../../../../testObjects/serverStates");
describe("Store defenition", () => {
    test("store intial state", () => {
        expect(store_1.default.getState().root).toStrictEqual(serverStates_1.initailServerState);
    });
});
//# sourceMappingURL=store.test.js.map