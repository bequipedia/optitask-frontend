import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.scss";
import "../../img/logo.png";

export const Navbar = () => {
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
				<a className="navbar-brand letra font-italic" href="/">
					<img src="logo.png" className="img" width="20" height="20" />
					Optitask
				</a>
			</div>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				<ul className="navbar-nav col mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<a className="nav-link" href="/">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/signup">
							Registro
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/login">
							Inicia Sesión
						</a>
					</li>
				</ul>
				{/* <form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form> */}
			</div>
		</nav>
	);
};
