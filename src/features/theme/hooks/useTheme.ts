import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme, selectTheme } from "../themeSlice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const { isDarkMode, colors } = useSelector(selectTheme);

  return {
    // Theme state
    isDarkMode,
    colors,

    // Theme actions
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (isDark: boolean) => dispatch(setTheme(isDark)),
  };
};
