import { Theme } from "./themeTypes";
import { zinc, emerald } from "./colors";
import { ThemeActions } from "../components/contexts/theme/ThemeContext";

export const lightMode: Theme = {
	dark: false,
	bg: {
		primary: zinc[50],
		secondary: emerald[500],
	},

	text: {
		primary: {
			light: zinc[50],
			300: zinc[200],
			main: emerald[600],
			700: emerald[900],
			dark: emerald[950],
		},
		secondary: {
			light: emerald[400],
			main: emerald[500],
			dark: emerald[950],
		},
	},

	button: {
		primary: {
			bg: zinc[50],
			bgHover: zinc[600],
			text: emerald[600],
		},
		secondary: {
			bg: zinc[100],
			bgHover: zinc[200],
			text: emerald[500],
		},
	},
};

export const darkMode: Theme = {
	dark: true,
	bg: {
		primary: emerald[950],
		secondary: zinc[600],
	},

	text: {
		primary: {
			light: zinc[50],
			300: zinc[200],
			main: zinc[600],
			700: zinc[900],
			dark: zinc[400],
		},
		secondary: {
			light: zinc[600],
			main: zinc[900],
			dark: emerald[600],
		},
	},

	button: {
		primary: {
			bg: emerald[500],
			bgHover: zinc[600],
			text: zinc[100],
		},
		secondary: {
			bg: zinc[100],
			bgHover: zinc[200],
			text: emerald[500],
		},
	},
};
