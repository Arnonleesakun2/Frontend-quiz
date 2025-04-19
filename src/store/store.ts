"use client";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import useReducer from "./slices/userSlice";
import { loadState, saveState } from "@/utils/localStorage";

const persistedState = loadState();
export const store = configureStore({
  reducer: { useReducer },
  preloadedState: {
    useReducer: persistedState?.user ? persistedState : undefined,
  },
});
store.subscribe(() => {
  saveState({
    user: store.getState().useReducer.user,
  });
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
