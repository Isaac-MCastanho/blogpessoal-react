import React from "react";
import "./Login.css";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export function Login() {
	return (
		<>
			<Grid container alignItems={"center"}>
				<Grid item xs={6} justifyContent="center">
					<Box display="flex" justifyContent={"center"}>
						<Grid item xs={6}>
							<form>
								<Typography
									variant="h3"
									align="center"
									gutterBottom
									fontWeight="bold"
								>
									Entrar
								</Typography>
								<TextField
									variant="outlined"
									label="Usuário"
									margin="normal"
									fullWidth
								/>
								<TextField
									type="password"
									variant="outlined"
									label="Senha"
									margin="normal"
									fullWidth
								/>
								<Box marginY={2}>
									<Link to="/home">
										<Button
											type="submit"
											size="large"
											variant="contained"
											className="botaolegal"
											fullWidth
										>
											Logar
										</Button>
									</Link>
								</Box>
							</form>
							<hr />
							<Typography marginTop={2} align="center" variant="body1">
								Ainda não tem uma conta?{" "}
								<Link to="" className="linkLogin">
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
