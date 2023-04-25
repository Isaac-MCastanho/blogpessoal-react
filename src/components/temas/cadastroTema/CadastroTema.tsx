import { Button, TextField } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../models/Tema";
import { getId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

export function CadastroTema() {
	const token = useSelector<TokenState, TokenState["token"]>(
		(state) => state.token
	);
	const history = useNavigate();

	const { id } = useParams<{ id: string }>();

	const [tema, setTema] = useState<Tema>({
		id: 0,
		descricao: "",
	});

	function updateModel(event: ChangeEvent<HTMLInputElement>) {
		setTema({
			...tema,
			[event.target.name]: event.target.value,
		});
	}

	async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
		event.preventDefault();

		if (id !== undefined) {
			try {
				await put("/temas", tema, setTema, {
					headers: {
						Authorization: token,
					},
				});
				alert("Tema atualizado com sucesso");
				history("/temas");
			} catch (error) {
				alert("Deu ruim");
			}
		} else {
			try {
				await post("/temas", tema, setTema, {
					headers: {
						Authorization: token,
					},
				});
				alert("Tema cadastrado com sucesso");
				history("/temas");
			} catch (error) {
				alert("Deu ruim");
			}
		}
	}

	const getTemaById = async () => {
		await getId(`/temas/${id}`, setTema, {
			Authorization: token,
		});
	};

	useEffect(() => {
		if (id !== undefined) {
			getTemaById();
		}
	});

	useEffect(() => {
		if (token === "") {
			alert("Sem acesso!");
			history("/login");
		}
	}, []);

	return (
		<>
			<form onSubmit={onSubmit} style={{ paddingTop: "100px" }}>
				<TextField
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						updateModel(event)
					}
					value={tema.descricao}
					label="Descrição do tema"
					name="descricao"
				/>
				<Button type="submit" variant="contained">
					{tema.id !== 0 ? "Editar" : "Cadastrar"}
				</Button>
			</form>
		</>
	);
}
