import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Button } from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";
import { useNavigate, useParams } from "react-router-dom";
import { Tema } from "../../../models/Tema";
import { deleteId } from "../../../services/Service";

export function DeletarTema() {
	const [tema, setTema] = useState<Tema>({
		id: 0,
		descricao: "",
	});
	const [token, setToken] = useLocalStorage("token");
	const history = useNavigate();

	const { id } = useParams<{ id: string }>();

	const getTemaById = async (id: string) => {
		// await getId(`/temas/${id}`, setTema, {
		// 	Authorization: token,
		// });
	};

	function deletarTema() {
		deleteId(`/temas/${id}`, {
			Authorization: token,
		});
		alert("Tema deletado com sucesso, eu acho.");
	}

	useEffect(() => {
		if (token === "") {
			alert("Sem acesso!");
			history("/login");
		}
	}, []);
	return (
		<Grid container justifyContent={"center"}>
			<Grid item xs={6}>
				<Typography>Deletar tema</Typography>
				<Typography>
					Você tem certeza de que deseja deletar o tema: {tema.descricao}
				</Typography>
				<Button variant="contained" color="primary">
					Não
				</Button>
				<Button onClick={() => deletarTema()} variant="contained">
					Sim
				</Button>
			</Grid>
		</Grid>
	);
}
