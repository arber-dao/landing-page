import { useContext } from "react";
import { ThemeContext } from "@/components/context/themeProvider";

/**
 * Hook for access to color mode state
 */
const useTheme = () => useContext(ThemeContext);

export default useTheme;
