import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "../rootSlice/rootSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = configureStore({
  reducer: { root: rootSlice().reducer },
  middleware: [thunk, logger] as const,
});

export default store;
