export type Action = {
	type: "ADD_TOKEN";
	payload: string;
};

export function addToken(token: string): Action {
	return {
		type: "ADD_TOKEN",
		payload: token,
	};
}
