import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { darkMode: localStorage.getItem('darkMode') === 'true' },
  reducers: {
    setDarkMode(state, { payload }) {
      state.darkMode = payload;
    },
  },
});

export const toggleDarkMode = () => (dispatch, getState) => {
  const darkMode = !getState().theme.darkMode;
  localStorage.setItem('darkMode', darkMode);
  dispatch(themeSlice.actions.setDarkMode(darkMode));
};

export default themeSlice.reducer;
