import { createContext, useContext, useReducer, ReactNode } from "react";
import { Theme } from "./../../themes/themeTypes";
import { darkMode, lightMode } from "./../../themes/themes";

type ContextType = {
	state: Theme;
	dispatch: (action: ThemeActions) => void;
};

type ThemeProvideProps = {
	children: ReactNode;
};

// Context
const ThemeContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum ThemeActions {
	darkMode,
	lightMode,
}

const themeReducer = (state: Theme, action: ThemeActions) => {
	switch (action) {
		case ThemeActions.lightMode:
			return lightMode;
		case ThemeActions.darkMode:
			return darkMode;
		default:
			return state;
	}
};

// Provider

export const ThemeProvider = ({ children }: ThemeProvideProps) => {
	const [state, dispatch] = useReducer(themeReducer, lightMode);
	const value = { state, dispatch };
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

// Context Hook
export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error("useTheme precisa ser usado dentro do themeProvider");
	}
	return context;
};
