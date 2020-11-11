"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
// import { useDispatch } from "react-redux";
const rootSlice_1 = __importDefault(require("../rootSlice/rootSlice"));
const redux_logger_1 = __importDefault(require("redux-logger"));
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const store = toolkit_1.configureStore({
    reducer: { root: rootSlice_1.default().reducer },
    middleware: [redux_thunk_1.default, redux_logger_1.default],
});
// export type AppDispatch = typeof store.dispatch;
// export type StoreT = typeof store;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
exports.default = store;
//# sourceMappingURL=store.js.map