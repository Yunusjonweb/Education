/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';

const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;
