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

	setDados(resposta.data.token);
};

export const cadastrarUsuario = async (
	url: string,
	dados: User,
	setDados: Function
) => {
	const resposta = await api.post(url, dados);

	setDados(resposta.data);
};

export const getAll = async (
	url: string,
	setDados: Function,
	headers: Object
) => {
	const resposta = await api.get(url, headers);
	setDados(resposta.data);
};

export const getId = async (
	url: string,
	setDados: Function,
	headers: Object
) => {
	const resposta = await api.get(url, headers);
	setDados(resposta.data);
};

export const post = async (
	url: string,
	dados: Object,
	setDados: Function,
	headers: Object
) => {
	const resposta = await api.post(url, dados, headers);

	setDados(resposta.data);
};

export const put = async (
	url: string,
	dados: Object,
	setDados: Function,
	headers: Object
) => {
	const resposta = await api.put(url, dados, headers);

	setDados(resposta.data);
};

export const deleteId = async (url: string, headers: Object) => {
	await api.delete(url, headers);
};
