import { Box, Grid, Typography } from "@mui/material";

import { LinkedIn, GitHub } from "@material-ui/icons";

import { Home } from "./pages/home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Footer />
		</>
	);
}

export default App;