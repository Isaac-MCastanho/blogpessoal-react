import { Box } from "@mui/material";
import { Grid, Paper } from "@material-ui/core";

import "./Home.css";

import SecureIcon from "./../../assets/img/SecureIcon.svg";

export function Home() {
	return (
		<>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				style={{ width: "100vw" }}
			>
				<Grid item xs={6}>
					<Paper style={{ height: "100vh", background: "red" }} />
				</Grid>
				<Grid item xs={6} spacing={2}>
					<Grid item>
						<Paper style={{ height: "49vh", background: "orange" }} />
					</Grid>
					<Grid item>
						<Paper style={{ height: "49vh", background: "white" }} />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
