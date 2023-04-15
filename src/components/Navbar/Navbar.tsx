import "./Navbar.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

export function Navbar() {
	return (
		<>
			<AppBar position="static" color="primary">
				<Toolbar variant="dense">
					<input type="" name="" id="" />
					<Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
						<Box
							borderColor=""
							bgcolor="primary.dark"
							color="primaryText"
							style={{ cursor: "pointer" }}
						>
							<Typography variant="h5" color="inherit">
								BlogPessoal
							</Typography>
						</Box>

						<Box display="flex" justifyContent="start">
							<Box mx={1} style={{ cursor: "pointer" }}>
								<Typography variant="h6" color="inherit">
									home
								</Typography>
							</Box>
							<Box mx={1} style={{ cursor: "pointer" }}>
								<Typography variant="h6" color="inherit">
									postagens
								</Typography>
							</Box>
							<Box mx={1} style={{ cursor: "pointer" }}>
								<Typography variant="h6" color="inherit">
									temas
								</Typography>
							</Box>
							<Box mx={1} style={{ cursor: "pointer" }}>
								<Typography variant="h6" color="inherit">
									cadastrar tema
								</Typography>
							</Box>
							<Box mx={1}>
								<Typography variant="h6" color="inherit">
									logout
								</Typography>
							</Box>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}
