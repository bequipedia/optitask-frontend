import { bool } from "prop-types";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "./../../styles/cardoption.scss";
import "./../../img/profileimage.png";
import { Modal, Button, Container, Image, Row, Col } from "react-bootstrap";

export const ModalEditUserProfile = () => {
	const profileimg = {
		img_default: "profileimage.png"
	};
	const { store, actions } = useContext(Context);
	const [profileImg, setprofileImg] = useState(profileimg);

	return (
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Editar perfil</Modal.Title>
			</Modal.Header>
			<Modal.Body className="show-grid">
				<Container>
					<Row>
						<Col xs={6} md={4}>
							.col-xs-6 .col-md-4
						</Col>
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
							.col-xs-6 .col-md-6 Hola, {store.user.name}
						</Col>
						<Col xs={6} md={6}>
							.col-xs-6 .col-md-6
							<small>Registrado el: {store.user.user_registered}</small>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={changeCloseModal}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

function App() {
	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Launch modal with grid
			</Button>

			<ModalEditUserProfile show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
}
