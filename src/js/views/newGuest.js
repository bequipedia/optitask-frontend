import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "./../../styles/cardoption.scss";
import { ModalEditProfile } from "../component/modalEditProfile";
import { Modal } from "bootstrap";
import optimus1 from "../../img/optimus1.png";
import { useHistory } from "react-router-dom";

export const NewGuest = () => {
	const { store, actions } = useContext(Context);
	var history = useHistory();

	// Estado inicial groups
	const formDataNewGuest = {
		user_admin_id: store.user.id, // LECTURA DESDE EL PROPIO FRONT
		group_name: "",
		description: "",
		group_url: "",
		paymentMethod: "",
		url_image: "" //inicialmente una imagen de grupo predeterminada
	};
	//estado con la información dentro del objeto form data
	const [dataNewGuest, setDataNewGuest] = useState(formDataNewGuest);

	//funcion para guardar data del formulario en el estado.
	const changeDataNewGuest = e => {
		setDataNewGuest({
			...dataNewGuest,
			[e.target.name]: e.target.valuve
		});
		e.preventDefault();
	};

	//Funcion para invitar nuevo colaborador
	const saveNewGuest = async e => {
		e.preventDefault();
		let success = await actions.addPersonGroup(dataNewGuest);
		if (success) {
			alert("El colaborador ha sido asignado");
			//revisar si se direcciona al nuevo Colaborador
		} else {
			alert("No se ha podido asignar un colaborador, revise los datos");
		}
	};
	//Funcion para invitar nuevo colaborador
	useEffect(
		() => {
			actions.getUserGroups(store.user.id);
		},
		[store.user]
	);

	return (
		<React.Fragment>
			{/* Start of the New group Form */}
			{/* Inicio del Formulario de invitar colaborador */}
			{/*-----------------------------Titulo Invitar Nuevo Colaborador-------------------------------------*/}
			<div className="container-fluid">
				<div className="row">
					<div className="col-2" />
					<div className="col-8">
						<div className="row col-md-12 mt-3 justify-content-center text-secondary">
							<h1>Invitar Nuevo Colaborador</h1>
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
						{/*-----------------------------Boton de Nuevo Colaborador-------------------------------------*/}
						{/* <div className="row ml-5 d-flex flex-row">
							<div className="col-md-4 d-flex justify-content-center">
								<button type="button" className="btn btn-primary mt-3 mb-3 mx-6" onClick="">
									Nuevo Colaborador
								</button>
							</div>
						</div> */}
						<br />
						<div className="row d-flex flex-row">
							<div className="col-md-12 d-flex justify-content-center">
								<input
									id="group_name"
									name="group_name"
									className="form-control col-8 mx-1 mt-1 mb-3 border border-primary  bg-light rounded-pill"
									type="text"
									placeholder="Nombre del colaborador"
									onChange={changeDataNewGuest}
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
									type="email"
									placeholder="Email del colaborador"
									onChange={changeDataNewGuest}
								/>
							</div>
						</div>
						<br />
						<div className="row d-flex flex-row">
							<div className="col-md-12 d-flex justify-content-center">
								<select
									name="cathegory"
									onChange={changeDataNewGuest}
									className="custom-select col-5 mt-3 mb-3 mx-1 bg-light border border-primary rounded-pill">
									<option selected>Seleccione el grupo</option>
									{store.userGroups.map(item => {
										return <option key={item.id}>{item.group_name}</option>;
									})}
								</select>
							</div>
						</div>
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
								<button type="button" className="btn btn-xs btn-primary m-3" onClick={saveNewGuest}>
									Invitar
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
