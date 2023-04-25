import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/theme/ThemeContext";
import { Router } from "./router";
import { store } from "./store/store";

function App() {
	return (
		<ThemeProvider>
			<Provider store={store}>
				<Router />
			</Provider>
		</ThemeProvider>
	);
}

export default App;
