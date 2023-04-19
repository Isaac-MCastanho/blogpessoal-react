import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";

export function ListTemas() {
	return (
		<>
			<Box m={4}>
				<Card>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Tema:
						</Typography>
						<Typography variant="h5" component="h2">
							descrição do tema
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
		</>
	);
}
