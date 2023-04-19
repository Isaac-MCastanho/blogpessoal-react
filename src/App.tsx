import { ThemeProvider } from "./components/contexts/theme/ThemeContext";
import { Router } from "./router";

function App() {
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
}

export default App;
