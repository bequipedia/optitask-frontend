import React, { useState, useContext } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Modal, Button, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
//import { Login } from "./views/login";
// import "../../styles/navbarLogged.scss";
// import "../../img/full-logo.png";
import { Context } from "../store/appContext.js";
import { SideBar } from "./sidebar.js";

export const NavbarLogged = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);
	return (
		<>
			<Navbar expand="lg" className="navbar">
				<Navbar.Brand href="/">
					<div className="brand" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/Contact" className="text-dark font-weight-bolder justify-content-start" />
						<Button
							variant="outline-dark"
							className="styleButton navbarLogin text-white font-weight-bolder"
							onClick={handleShow}>
							Perfil
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* Modal Login */}
			<Modal show={show} backdrop="static" keyboard={false}>
				<Modal.Header>
					<Modal.Title>Perfil</Modal.Title>
				</Modal.Header>
				<Modal.Body className="show-grid">
					<Container>
						<Row>
							<Col xs={6} md={4} />
							<Col xs={6} md={4}>
								<Image src="/../../profileimage.png" roundedCircle className="self-align-center" />
							</Col>
							<Col xs={6} md={4} />
						</Row>
						<Row>
							<Col xs={6} md={12}>
								{/* agregar aquí botón para examinar */}
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={6}>
								<small>Hola, {store.user.email}</small>
							</Col>
							<Col xs={6} md={6}>
								<small>Registrado el: </small>
								<small>{store.user.user_registered}</small>
								<i className="fas fa-edit text-muted" />
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={6}>
								<small>Nombre: {store.user.name}</small>
								<i className="fas fa-edit text-muted" />
							</Col>
							<Col xs={6} md={6}>
								<small> País: {store.user.country_name}</small>
								<i className="fas fa-edit text-muted" />
							</Col>
						</Row>
					</Container>
				</Modal.Body>

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
	);
};
