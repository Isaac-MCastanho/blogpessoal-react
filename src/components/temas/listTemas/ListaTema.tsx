import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Tema } from "../../../models/Tema";
import { getAll } from "../../../services/Service";
import useLocalStorage from "react-use-localstorage";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

export function ListaTema() {
	const [temas, setTemas] = useState<Tema[]>([]);
	const [isLoad, setIsLoad] = useState(false);
	// const [token, setToken] = useLocalStorage("token");
	const token = useSelector<TokenState, TokenState["token"]>(
		(state) => state.token
	);
	const history = useNavigate();

	async function getAllTemas() {
		await getAll("/temas", setTemas, {
			headers: {
				Authorization: token,
			},
		}).finally(() => {
			setIsLoad(false);
		});
	}

	useEffect(() => {
		setIsLoad(true);
		getAllTemas();
	}, []);

	useEffect(() => {
		if (token === "") {
			alert("Sem acesso!");
			history("/login");
		}
	}, []);

	return (
		<div style={{ paddingTop: "100px" }}>
			{isLoad && temas.length == 0 && <p>Carregando...</p>}
			{!isLoad && temas.length == 0 && <p>Não há Postagens!</p>}
			{temas &&
				temas.map((tema) => {
					return (
						<Box m={4} key={tema.id}>
							<Card>
								<CardContent>
									<Typography color="textSecondary" gutterBottom>
										Tema:
									</Typography>
									<Typography variant="h5" component="h2">
										{tema.descricao}
									</Typography>
								</CardContent>
								<CardActions>
									<Link to={`/editarTema/${tema.id}`}>
										<Button color="primary" variant="contained" size="small">
											Editar
										</Button>
									</Link>
									<Link to={`/deletarTema/${tema.id}`}>
										<Button color="secondary" variant="contained" size="small">
											Deletar
										</Button>
									</Link>
								</CardActions>
							</Card>
						</Box>
					);
				})}
		</div>
	);
}
