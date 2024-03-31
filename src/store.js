// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import filtersReducer from './features/filters/filtersSlice';
import teamsReducer from './features/teams/teamsSlice';


// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';





export default configureStore({
  reducer: {
    users: usersReducer,
    filters: filtersReducer,
    teams: teamsReducer,
  },
});



