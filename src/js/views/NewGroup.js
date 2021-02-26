import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "./../../styles/cardoption.scss";
import { ModalEditProfile } from "../component/modalEditProfile";
import { Modal } from "bootstrap";
import optimus1 from "../../img/optimus1.png";
import { useHistory } from "react-router-dom";

export const NewGroup = () => {
	const { store, actions } = useContext(Context);
	var history = useHistory();

	// Estado inicial groups
	const formDataNewGroup = {
		user_admin_id: store.user.id, // LECTURA DESDE EL PROPIO FRONT
		group_name: "",
		description: "",
		group_url: "",
		paymentMethod: "",
		url_image: "" //inicialmente una imagen de grupo predeterminada
	};
	//estado con la información dentro del objeto form data
	const [dataNewGroup, setDataNewGroup] = useState(formDataNewGroup);

	//funcion para guardar data del formulario en el estado.
	const changeDataNewGroup = e => {
		setDataNewGroup({
			...dataNewGroup,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	};

	//Funcion para guardar nuevo grupo
	const saveNewGroup = async e => {
		e.preventDefault();
		let success = await actions.addGroup(dataNewGroup);
		if (success) {
			alert("Su grupo ha sido creado");
			//revisar si se direcciona al nuevo grupo
		} else {
			alert("Su grupo no pudo ser creado, revise los datos");
		}
	};

	return (
		<React.Fragment>
			{/* Start of the New group Form */}
			{/* Inicio del Formulario de Nuevo grupo */}
			{/*-----------------------------Titulo Registro de negocio-------------------------------------*/}
			<div className="container-fluid">
				<div className="row">
					<div className="col-2" />
					<div className="col-8">
						<div className="row col-md-12 mt-3 justify-content-center text-secondary">
							<h1>Crea un nuevo negocio</h1>
						</div>
						<div className="row justify-content-center">
							<img
								src={optimus1}
								className="img-fluid"
								width="120"
								height="120"
								style={{ opacity: 0.7 }}
							/>
						</div>
						<br />
						{/*-----------------------------Boton de Nuevo Registro-------------------------------------*/}
						<div className="row ml-5 d-flex flex-row">
							<div className="col-md-4 d-flex justify-content-center">
								<button
									type="button"
									className="btn btn-primary mt-3 mb-3 mx-6"
									onClick={ModalEditProfile}>
									Nuevo negocio
								</button>
							</div>
						</div>
						<br />
						<div className="row d-flex flex-row">
							<div className="col-md-12 d-flex justify-content-center">
								<input
									id="group_name"
									name="group_name"
									className="form-control col-8 mx-1 mt-1 mb-3 border border-primary  bg-light rounded-pill"
									type="text"
									placeholder="Nombre del negocio"
									onChange={changeDataNewGroup}
								/>
							</div>
						</div>
						<br />
						<div className="row d-flex flex-row">
							<div className="col-md-12 d-flex justify-content-center">
								<input
									id="description"
									name="description"
									className="form-control col-8 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
									type="text"
									placeholder="Descripción del negocio"
									onChange={changeDataNewGroup}
								/>
							</div>
						</div>
						<br />
						{/* ----------------------- Botón añadir colaborador---------------------- */}
						<div className="row d-flex flex-row justify-content-center">
							<div className="col-4 justify-content-center">
								<div className="card">
									<div className="card-option color-1 " onClick={() => history.push("/newGuest")}>
										<div className="container-fluid">
											<div className="row d-flex justify-content-center">
												<div className="col-4">
													<i className="fas fa-user-plus icon-height" />
												</div>
												<div className="col-8 options-font">
													<h6>Anadir</h6>
													<h6>Colaborador</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
							<div className="col-4 justify-content-center">
								<div className="card">
									<div className="card-option color-1 " onClick={() => history.push("/newTasks")}>
										<div className="container-fluid">
											<div className="row d-flex justify-content-center">
												<div className="col-4">
													<i className="fas fa-tasks icon-height" />
												</div>
												<div className="col-5 options-font">
													<h6>Anadir</h6>
													<h6>Tarea </h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<br />
						{/*-----------------------Boton para ----------------------*/}
						<div className="row d-flex flex-row" />
						{/*-----------------botones de aceptar y cancelar------------ */}
						<div className="form-group col-12">
							<div className="row justify-content-center">
								{/* Falta agregar la propiedad onClick para Cancelar el Registro del Valor a la Tabla. */}
								<button
									type="button"
									className="btn btn-xs btn-danger m-3"
									onClick={() => history.push("/profile")}>
									Cancelar
								</button>
								{/* Falta agregar la propiedad onClick para Aceptar el Registro e Introducir el Valor a la Tabla. */}
								<button type="button" className="btn btn-xs btn-primary m-3" onClick={saveNewGroup}>
									Aceptar
								</button>
							</div>
							<br />
						</div>
						<br />
					</div>
					<br />
				</div>
				<br />
			</div>
		</React.Fragment>
	);
};
