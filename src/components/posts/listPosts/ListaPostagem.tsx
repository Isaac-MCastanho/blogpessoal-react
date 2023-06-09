import { useState, useEffect } from "react";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import { Postagem } from "../../../models/Postagem";
import { getAll } from "../../../services/Service";
import useLocalStorage from "react-use-localstorage";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { Link, useNavigate } from "react-router-dom";

export function ListaPostagem() {
	const [posts, setPosts] = useState<Postagem[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const history = useNavigate();

	const token = useSelector<TokenState, TokenState["token"]>(
		(state) => state.token
	);

	async function getAllPosts() {
		await getAll("/postagens", setPosts, {
			headers: {
				Authorization: token,
			},
		}).finally(() => {
			setIsLoading(false);
		});
	}
	useEffect(() => {
		if (token === "") {
			alert("Sem acesso!");
			history("/login");
		}
	}, []);

	useEffect(() => {
		setIsLoading(true);
		getAllPosts();
	}, []);

	return (
		<>
			{isLoading && posts.length == 0 && <p>Carregando...</p>}
			{!isLoading && posts.length == 0 && <p>Não há Postagens!</p>}
			{posts &&
				posts.map((post) => {
					return (
						<Box m={4} paddingTop={10} key={post.id}>
							<Card>
								<CardContent>
									<Typography color="textSecondary" gutterBottom>
										{post.titulo}
									</Typography>
									<Typography variant="h5" component="h2">
										{post.texto}
									</Typography>
									<Typography variant="body1" component="p">
										{post.tema.descricao}
									</Typography>
								</CardContent>
								<CardActions>
									<Button color="primary" variant="contained" size="small">
										Editar
									</Button>
									<Link to={`/deletarPostagem/${post.id}`}>
										<Button color="secondary" variant="contained" size="small">
											Deletar
										</Button>
									</Link>
								</CardActions>
							</Card>
						</Box>
					);
				})}
		</>
	);
}
