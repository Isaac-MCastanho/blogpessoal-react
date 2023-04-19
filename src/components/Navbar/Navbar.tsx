import "./Navbar.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeActions, useTheme } from "../contexts/theme/ThemeContext";

import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useState } from "react";

export function Navbar() {
	const [checked, setChecked] = useState(false);
	const { state: themeContext, dispatch } = useTheme();

	const toggleChecked = () => {
		setChecked((prev) => !prev);
		dispatch(
			themeContext.dark ? ThemeActions.lightMode : ThemeActions.darkMode
		);
	};
	return (
		<>
			<AppBar
				id="navbar"
				position="fixed"
				style={{ background: themeContext.bg.primary }}
			>
				<Toolbar
					variant="regular"
					style={{ color: themeContext.text.primary.dark }}
				>
					<Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
						<Box style={{ cursor: "pointer" }}>
							<Typography variant="h5" color="inherit">
								BlogPessoal
							</Typography>
						</Box>

						<Box display="flex" alignItems="center" justifyContent="center">
							<Link to="/home">
								<Box
									display="inherit"
									alignItems="center"
									mx={1}
									style={{ cursor: "pointer" }}
								>
									<Typography variant="h6" color="inherit">
										Home
									</Typography>
								</Box>
							</Link>

							<Link to="/temas">
								<Box
									display="inherit"
									alignItems="center"
									mx={1}
									style={{ cursor: "pointer" }}
								>
									<Typography variant="h6" color="inherit">
										Temas
									</Typography>
								</Box>
							</Link>

							<Link to="/temas">
								<Box
									display="inherit"
									alignItems="center"
									mx={1}
									style={{ cursor: "pointer" }}
								>
									<Typography variant="h6" color="inherit">
										Cadastrar Temas
									</Typography>
								</Box>
							</Link>

							<Box display="inherit" alignItems="center" mx={1}>
								<Link to="/login">
									<Typography variant="h6" color="inherit">
										Logout
									</Typography>
								</Link>
							</Box>
						</Box>
					</Box>
					<Switch color="primary" checked={checked} onChange={toggleChecked} />
				</Toolbar>
			</AppBar>
		</>
	);
}
