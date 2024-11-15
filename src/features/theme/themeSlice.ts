import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const colors = {
  light: {
    primary: "#1DA1F2", // Twitter blue
    background: "#FFFFFF",
    text: "#14171A",
    secondary: "#657786",
  },
  dark: {
    primary: "#1DA1F2",
    background: "#15202B",
    text: "#FFFFFF",
    secondary: "#8899A6",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectTheme = (state: { theme: ThemeState }) => ({
  isDarkMode: state.theme.isDarkMode,
  colors: state.theme.isDarkMode ? colors.dark : colors.light,
});
export default themeSlice.reducer;
