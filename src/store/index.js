import { configureStore } from '@reduxjs/toolkit';
import tokenReducer, { tokenMiddleware }  from './token/tokenReducer';
import authReducer from './auth/authSlice';
import  photosReducer from './photos/photosSlice';
import  photoReducer from './photo/photoSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    photos: photosReducer,
    photo: photoReducer,

    },
  middleware: (getDefauldMiddleware) =>
    getDefauldMiddleware().concat(tokenMiddleware),
});
