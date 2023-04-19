import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ListPosts } from "./components/posts/listPosts/ListPosts";

import { ListTemas } from "./components/temas/listTemas/ListTemas";
import { CadastroUsuario } from "./pages/cadastroUsuarios/CadastroUsuario";

export function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<div style={{ minHeight: "85vh" }}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/temas" element={<ListTemas />} />

					<Route path="/cadastrarUsuario" element={<CadastroUsuario />} />

					<Route path="/postagens" element={<ListPosts />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
