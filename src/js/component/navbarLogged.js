import React, { useState, useContext } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Modal, Button, Container, Image, Row, Col } from "react-bootstrap";
//import { Login } from "./views/login";
// import "../../styles/navbarLogged.scss";
// import "../../img/full-logo.png";
import { Context } from "../store/appContext.js";

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
					<Modal.Title>Profile</Modal.Title>
				</Modal.Header>
				<Modal.Body className="show-grid">
					<Container>
						<Row>
							<Col xs={6} md={4} />
							<Col xs={6} md={4}>
								.col-xs-6 .col-md-4
								<Image src="profileimage.png/171x180" roundedCircle />
							</Col>
							<Col xs={6} md={4}>
								.col-xs-6 .col-md-4
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={12}>
								.col-xs-6 .col-md-12
								{/* agregar aquí botón para examinar */}
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={6}>
								.col-xs-6 .col-md-6
								<small>Hola, {store.user.name}</small>
							</Col>
							<Col xs={6} md={6}>
								.col-xs-6 .col-md-6
								<small>Registrado el: {store.user.user_registered}</small>
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
