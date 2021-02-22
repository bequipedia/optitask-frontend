import React, { useState } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Button, Modal } from "react-bootstrap";
//import { Login } from "./views/login";
// import "../../styles/navbarLogged.scss";
// import "../../img/full-logo.png";

export const NavbarLogged = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Navbar expand="lg" className="navbar">
				<Navbar.Brand href="/">
					<div className="brand" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/AboutUs" className="text-dark font-weight-bolder">
							About Us
						</Nav.Link>
						<Nav.Link href="/Contact" className="text-dark font-weight-bolder">
							Contact
						</Nav.Link>
						<Button
							variant="outline-dark"
							className="styleButton navbarLogin text-white font-weight-bolder"
							onClick={handleShow}>
							Log in
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* Modal Login */}
			<Modal show={show} backdrop="static" keyboard={false}>
				<Modal.Header>
					<Modal.Title>Log in</Modal.Title>
				</Modal.Header>
				<Modal.Body>{/* <Login /> */}</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-dark" onClick={handleClose} className="styleButton font-weight-bolder">
						Close
					</Button>
					<Button variant="outline-dark" className="styleButton font-weight-bolder">
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
			{/* End Modal Login */}
		</>

		// <nav className="main-nav">
		// 	<div className="">
		// 		<a className="bg-dark p-2 d-block" href="/dashboard">
		// 			<img src="full-logo.png" className="img" />
		// 		</a>
		// 		<div>
		// 			<ul className="list-group menu-options">
		// 				<li className="list-group-item list-group-item-action active">
		// 					<a href="/dashboard" className="text-light text-left">
		// 						{/* <i className="fas fa-house mr-2" /> */}
		// 						<span>Dashboard</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Grupo</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Cierre de ventas</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Registrar gastos</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Calculadora cambiaria</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Reportes</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Recordatorios</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Perfil</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Acerca de...</span>
		// 					</a>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<a href="#" className="text-left">
		// 						<i />
		// 						<span>Cerrar sesión</span>
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
};
