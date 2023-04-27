import { useState } from "react";
import "./Navbar.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ThemeActions, useTheme } from "../../contexts/theme/ThemeContext";
import Logo from "../../assets/img/The_Green001.png";

import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useLocalStorage from "react-use-localstorage";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { addToken } from "../../store/tokens/action";
import { toast } from "react-toastify";

export function Navbar() {
	const token = useSelector<TokenState, TokenState["token"]>(
		(state) => state.token
	);
	const history = useNavigate();
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(false);
	const { state: themeContext, dispatch: themeDispatch } = useTheme();

	const logout = () => {
		dispatch(addToken(""));
		themeDispatch(ThemeActions.lightMode);
		toast.info("usuario deslogado com sucesso", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		history("/login");
	};

	const toggleChecked = () => {
		setChecked((prev) => !prev);
		themeDispatch(
			themeContext.dark ? ThemeActions.lightMode : ThemeActions.darkMode
		);
	};

	let navbarComponent;

	if (token !== "") {
		navbarComponent = (
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
						<Box
							display={"flex"}
							justifyContent={"space-between"}
							width={"100%"}
						>
							<Box style={{ cursor: "pointer" }}>
								<Typography variant="h5" color="inherit">
									<img
										src={Logo}
										alt=""
										className="logo"
										style={{ maxWidth: "100px" }}
									/>
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

								<Link to="/cadastrartema">
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
									<Link onClick={logout} to="/login">
										<Typography variant="h6" color="inherit">
											Logout
										</Typography>
									</Link>
								</Box>
							</Box>
						</Box>
						<Switch
							color="primary"
							checked={checked}
							onChange={toggleChecked}
						/>
					</Toolbar>
				</AppBar>
			</>
		);
	}
	return <>{navbarComponent}</>;
}
