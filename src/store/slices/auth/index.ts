import { createSlice } from 'utils/@reduxjs/toolkit';
import { AuthState } from './types';

export const initialState: AuthState = {
  lang: 'EN',
  user: null,
  token: null,
  loading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInAction(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    changeLang(state, action) {
      state.lang = action.payload;
    },
    logOut(state) {
      state.token = null;
    },
    handleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = slice;

export const { signInAction, logOut, changeLang, handleLoading } =
  slice.actions;
