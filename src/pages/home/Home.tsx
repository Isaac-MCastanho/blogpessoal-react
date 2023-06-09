import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import { TabPosts } from "./../../components/posts/tabPosts/TabPosts";
import { Link } from "react-router-dom";
export function Home() {
	return (
		<>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				style={{ backgroundColor: "#6B7C65" }}
			>
				<Grid alignItems="center" item xs={6}>
					<Box paddingX={20}>
						<Typography
							variant="h3"
							gutterBottom
							color="textPrimary"
							component="p"
							align="center"
							style={{ color: "white", fontWeight: "bold" }}
						>
							Seja bem vindo(a)!
						</Typography>
						<Typography
							variant="h5"
							gutterBottom
							color="textPrimary"
							component="h5"
							align="center"
							style={{ color: "white", fontWeight: "bold" }}
						>
							expresse aqui os seus pensamentos e opiniões!
						</Typography>
					</Box>
					<Box display="flex" justifyContent="center">
						<Box marginRight={1}></Box>
						<Link to={"/postagens"}>
							<Button
								variant="outlined"
								style={{
									borderColor: "white",
									backgroundColor: "var(--blue-600)",
									color: "white",
								}}
							>
								Ver Postagens
							</Button>
						</Link>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<img
						src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80"
						alt=""
						className="fotoHome"
					/>
				</Grid>
				<Grid xs={12} style={{ backgroundColor: "white" }}>
					<TabPosts />
				</Grid>
			</Grid>
		</>
	);
}
