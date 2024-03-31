// src/features/users/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    // Add other reducers as needed
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;

// src/features/users/usersSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
 const response = await axios.get('/api/users');
 return response.data;
});

// src/features/users/usersSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
 const response = await axios.get('/api/users');
 return response.data;
});
