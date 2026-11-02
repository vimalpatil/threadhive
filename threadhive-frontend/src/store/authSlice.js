import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  const token = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');
  let user = null;

  if (storedUser && storedUser !== 'undefined' && storedUser !== 'null') {
    try {
      user = JSON.parse(storedUser);
    } catch {
      user = null;
    }
  }

  return {
    token: token && token !== 'undefined' && token !== 'null' ? token : null,
    user,
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    setCredentials(state, { payload }) {
      if (payload.token) state.token = payload.token;
      if (payload.user) state.user = payload.user;
    },
    clearCredentials(state) {
      state.token = null;
      state.user = null;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

const { setCredentials, clearCredentials, setUser } = authSlice.actions;

export const loginUser = (data) => (dispatch) => {
  if (data.token) localStorage.setItem('token', data.token);
  if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
  dispatch(setCredentials(data));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch(clearCredentials());
};

export const updateUser = (user) => (dispatch) => {
  localStorage.setItem('user', JSON.stringify(user));
  dispatch(setUser(user));
};

export default authSlice.reducer;
