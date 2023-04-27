import { Grid, Typography, Button, Card, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../models/Tema";
import { deleteId, getId } from "../../../services/Service";
import { Postagem } from "../../../models/Postagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { useTheme } from "../../../contexts/theme/ThemeContext";
import "./DeletarPostagem.css";

function DeletarPostagem() {
	const history = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const { state: themeContext } = useTheme();

	const token = useSelector<TokenState, TokenState["token"]>(
		(state) => state.token
	);
	const { id } = useParams<{ id: string }>();

	const [postagem, setPostagem] = useState<Postagem>();

	async function getPostagemById(id: string) {
		await getId(`/postagens/${id}`, setPostagem, {
			headers: {
				Authorization: token,
			},
		});
	}

	async function deletarPostagem() {
		setIsLoading(true);
		await deleteId(`/postagens/${id}`, {
			headers: {
				Authorization: token,
			},
		}).finally(() => setIsLoading(false));
		toast.success("Postagem deletada", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: themeContext.dark ? "dark" : "colored",
		});
		history("/postagens");
	}

	function voltar() {
		history("/postagens");
	}

	useEffect(() => {
		if (token === "") {
			alert("Sem token não né meu bom");
			history("/login");
		}
	}, []);

	useEffect(() => {
		if (id !== undefined) {
			getPostagemById(id);
		}
	});

	return (
		<>
			<Grid container justifyContent={"center"} paddingTop={10} mt={4}>
				<Grid item xs={4}>
					<Card variant="outlined">
						<Typography variant="h3" gutterBottom align="center">
							Deletar Postagem
						</Typography>
						<Typography variant="body1" gutterBottom align="center">
							Você tem certeza de que deseja deletar a postagem com título:{" "}
							<br /> <strong>{postagem?.titulo}</strong>{" "}
						</Typography>

						<Box display="flex">
							<Button
								variant="contained"
								color="primary"
								onClick={voltar}
								fullWidth
							>
								Não
							</Button>
							<Button
								variant="contained"
								color="error"
								onClick={deletarPostagem}
								fullWidth
							>
								{isLoading ? <span className="loaderLogin"></span> : "Sim"}
							</Button>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}

export default DeletarPostagem;
