import { Button, TextField } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../models/Tema";
import { post } from "../../../services/Service";

export function CadastroTema() {
	const [token, setToken] = useLocalStorage("token");
	const history = useNavigate();

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
		try {
			await post("/temas", tema, setTema, {
				headers: {
					Authorization: token,
				},
			});
			alert("Tema cadastrado com sucesso");
		} catch (error) {
			alert("Deu ruim");
		}
	}

	useEffect(() => {
		if (token === "") {
			alert("Sem acesso!");
			history("/login");
		}
	}, []);

	useEffect(() => {
		if (tema.id !== 0) {
			history("/temas");
		}
	}, [tema.id]);

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
					Cadastrar
				</Button>
			</form>
		</>
	);
}
