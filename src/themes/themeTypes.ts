import { ThemeActions } from "../components/contexts/theme/ThemeContext";

export type Theme = {
	dark: true | false;
	bg: {
		primary: string;
		secondary: string;
	};
	text: {
		primary: {
			light: string;
			main: string;
			dark: string;
			300: string;
			700: string;
		};
		secondary: {
			light: string;
			main: string;
			dark: string;
		};
	};
	button: {
		primary: {
			bg: string;
			bgHover: string;
			text: string;
		};
		secondary: {
			bg: string;
			bgHover: string;
			text: string;
		};
	};
};
