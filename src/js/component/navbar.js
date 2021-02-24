import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import "../../img/logo.png";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	//Función con Hook:evalua si la ruta es una determinada y afecta las className.
	//Intentos fallidos con esta función al renderizar porque no redirigía al link
	//tiene que ver con useLocation
	// const location = useLocation();
	// function ValorClase() {
	// 	if ((location.pathname = "/")) {
	// 		return "Nav-background";
	// 	} else {
	// 		return "Nav-opti";
	// 	}
	// }

	return (
		<nav className="navbar back-nav navbar-expand-lg d-flex justify-content-between bg-light text-white Nav-Background shift">
			<div className="bar-collapse col">
				<button
					className="navbar-toggler btn-outline-secondary align-middle"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-dark">
						<i className="fas fa-bars mt-1" />
					</span>
				</button>
				<Link className="navbar-brand letra font-italic" to="/">
					<img src="logo.png" className="img" width="20" height="20" />
					Optitask
				</Link>
			</div>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				<ul className="navbar-nav col mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<Link to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup">Registro</Link>
					</li>
					<li className="nav-item">
						<Link to="/login">Inicia Sesión</Link>
					</li>
				</ul>
				<div />
			</div>
		</nav>
	);
};
