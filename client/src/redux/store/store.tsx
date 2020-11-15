import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import rootSlice from "../rootSlice/rootSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: { root: rootSlice().reducer },
  middleware: [thunk, logger] as const,
});

// export type AppDispatch = typeof store.dispatch;
// export type StoreT = typeof store;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export default store;
