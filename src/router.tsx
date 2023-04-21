import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ListaPostagem } from "./components/posts/listPosts/ListaPostagem";

import { ListaTema } from "./components/temas/listTemas/ListaTema";
import { CadastroUsuario } from "./pages/cadastroUsuarios/CadastroUsuario";
import { CadastroTema } from "./components/temas/cadastroTema/CadastroTema";

export function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<div style={{ minHeight: "85vh" }}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/temas" element={<ListaTema />} />

					<Route path="/cadastrarUsuario" element={<CadastroUsuario />} />
					<Route path="/cadastrarTemas" element={<CadastroTema />} />

					<Route path="/postagens" element={<ListaPostagem />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
