import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import accountSlicer from "store/slicers/account";
import proposalSlicer from "store/slicers/proposals";
import themeSlice from "./slicers/theme";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    account: accountSlicer,
    proposals: proposalSlicer,
  },
  middleware: (getDefaultMiddleware) => {
    const customizedMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });
    return customizedMiddleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
