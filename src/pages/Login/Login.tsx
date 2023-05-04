import { ChangeEvent, useEffect } from "react";
import "./Login.css";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { useState } from "react";
import { UserLogin } from "../../models/UserLogin";
import { login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/action";
import { toast } from "react-toastify";

export function Login() {
	const [isLoading, setIsLoading] = useState(false);

	const { state: themeContext } = useTheme();

	const history = useNavigate();

	const dispatch = useDispatch();

	const [token, setToken] = useState("");

	const [usuarioLogin, setUserLogin] = useState<UserLogin>({
		id: 0,
		nome: "",
		usuario: "",
		foto: "",
		senha: "",
		token: "",
	});

	function updateModel(event: ChangeEvent<HTMLInputElement>) {
		setUserLogin({
			...usuarioLogin,
			[event.target.name]: event.target.value,
		});
	}

	async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			setIsLoading(true);
			await login("/usuarios/logar", usuarioLogin, setToken);
			// alert("Usuario logado com sucesso");
			toast.success("Usuario logado com sucesso", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: themeContext.dark ? "dark" : "colored",
			});
		} catch (error) {
			setIsLoading(false);
			// alert("Usuário ou senha inválidos");
			toast.error("Usuário ou senha inválidos", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: themeContext.dark ? "dark" : "colored",
			});
		}
	}

	useEffect(() => {
		if (token !== "") {
			dispatch(addToken(token));
			history("/home");
		}
	}, [token]);

	return (
		<>
			<Grid
				style={{ background: themeContext.bg.secondary }}
				container
				alignItems={"center"}
			>
				<Grid item xs={6} justifyContent="center">
					<Box display="flex" justifyContent={"center"}>
						<Grid item xs={6}>
							<form onSubmit={onSubmit}>
								<Typography
									variant="h3"
									align="center"
									gutterBottom
									fontWeight="bold"
								>
									Entra
								</Typography>

								<TextField
									name="usuario"
									value={usuarioLogin.usuario}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									color="success"
									variant="outlined"
									label="Usuário"
									margin="normal"
									fullWidth
								/>
								<TextField
									name="senha"
									value={usuarioLogin.senha}
									onChange={(event: ChangeEvent<HTMLInputElement>) =>
										updateModel(event)
									}
									color="success"
									className="field"
									type="password"
									variant="outlined"
									label="Senha"
									margin="normal"
									fullWidth
									style={{
										borderColor: themeContext.button.primary.text,
									}}
								/>
								<Box marginY={2}>
									<Button
										type="submit"
										size="large"
										variant="contained"
										className="botaolegal"
										fullWidth
										style={{
											color: themeContext.button.primary.text,
											background: themeContext.button.primary.bgHover,
										}}
									>
										{isLoading ? (
											<span className="loaderLogin"></span>
										) : (
											"Logar"
										)}
									</Button>
								</Box>
							</form>
							<hr />
							<Typography marginTop={2} align="center" variant="body1">
								Ainda não tem uma conta?{" "}
								<Link
									to="/cadastrarUsuario"
									style={{
										color: themeContext.text.secondary.dark,
									}}
									className="linkLogin"
								>
									Cadastre-se aqui
								</Link>
							</Typography>
						</Grid>
					</Box>
				</Grid>
				<Grid xs={6} className="imagemLogin"></Grid>
			</Grid>
		</>
	);
}
