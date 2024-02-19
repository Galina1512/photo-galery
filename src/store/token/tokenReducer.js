import { createSlice } from '@reduxjs/toolkit';
import { setToken } from '../../api/token';
import {UPDATE_TOKEN, DELETE_TOKEN} from './tokenAction';

const initialState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload.token;
    },
    deleteToken: (state) => {
      state.token = '';
    }
  },
})
export const { updateToken, deleteToken } = tokenSlice.actions;

export const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }

  if (action.type === DELETE_TOKEN) {
    setToken('');
  }

  next(action);
};

export default tokenSlice.reducer;

