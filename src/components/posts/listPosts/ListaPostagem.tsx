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

export function ListaPostagem() {
	const [posts, setPosts] = useState<Postagem[]>([]);
	const [isLoad, setIsLoad] = useState(false);
	const [token, setToken] = useLocalStorage("token");

	async function getAllPosts() {
		await getAll("/postagens", setPosts, {
			headers: {
				Authorization: token,
			},
		}).finally(() => {
			setIsLoad(false);
		});
	}

	useEffect(() => {
		setIsLoad(true);
		getAllPosts();
	}, []);

	return (
		<>
			{isLoad && posts.length == 0 && <p>Carregando...</p>}
			{!isLoad && posts.length == 0 && <p>Não há Postagens!</p>}
			{posts &&
				posts.map((post) => {
					return (
						<Box m={4} key={post.id}>
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
									<Button color="secondary" variant="contained" size="small">
										Deletar
									</Button>
								</CardActions>
							</Card>
						</Box>
					);
				})}
		</>
	);
}
