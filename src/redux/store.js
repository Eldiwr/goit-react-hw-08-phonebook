import { configureStore } from "@reduxjs/toolkit";
// import { filterReducer } from "./contacts/filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from "./auth/slice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer, 
    // filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


setupListeners(store.dispatch);
export const persistor = persistStore(store);


