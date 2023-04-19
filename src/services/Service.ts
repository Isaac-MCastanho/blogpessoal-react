import axios from "axios";
import { UserLogin } from "../models/UserLogin";
import { User } from "../models/User";

export const api = axios.create({
	baseURL: "https://blogpessoal-pekc.onrender.com/",
});

export const login = async (
	url: string,
	dados: UserLogin,
	setDados: Function
) => {
	const resposta = await api.post(url, dados);

	setDados(resposta.data);
};

export const cadastrarUsuario = async (
	url: string,
	dados: User,
	setDados: Function
) => {
	const resposta = await api.post(url, dados);

	setDados(resposta.data);
};
