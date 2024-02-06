import { configureStore } from '@reduxjs/toolkit';
import tokenReducer, { tokenMiddleware }  from './token/tokenReducer';
import  photosReducer from './photos/photosSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    photos: photosReducer,

    },
  middleware: (getDefauldMiddleware) =>
    getDefauldMiddleware().concat(tokenMiddleware),
});
