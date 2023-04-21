import { Tema } from "./Tema";
import { User } from "./User";

export interface Postagem {
	id: number;
	titulo: string;
	texto: string;
	data: string;
	tema: Tema;
	usuario: User;
}
