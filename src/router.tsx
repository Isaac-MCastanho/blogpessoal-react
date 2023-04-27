import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ListaPostagem } from "./components/posts/listPosts/ListaPostagem";

import { ListaTema } from "./components/temas/listTemas/ListaTema";
import { CadastroUsuario } from "./pages/cadastroUsuarios/CadastroUsuario";
import { CadastroTema } from "./components/temas/cadastroTema/CadastroTema";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./contexts/theme/ThemeContext";
import DeletarPostagem from "./components/posts/deletarPosts/DeletarPostagem";

export function Router() {
	const { state: themeContext } = useTheme();

	return (
		<BrowserRouter>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={themeContext.dark ? "dark" : "light"}
			/>
			<Navbar />
			<div style={{ minHeight: "85vh" }}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/temas" element={<ListaTema />} />

					<Route path="/cadastrarUsuario" element={<CadastroUsuario />} />
					<Route path="/cadastrarTema" element={<CadastroTema />} />
					<Route path="/editarTema/:id" element={<CadastroTema />} />

					<Route path="/postagens" element={<ListaPostagem />} />
					<Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
