import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import optimus2 from "../../img/optimus2.png";
import { useHistory } from "react-router-dom";

function newTasks() {
	const { store, actions } = useContext(Context);
	var history = useHistory();

	const formDataNewTask = {
		label_task: "", // LECTURA DESDE EL PROPIO FRONT
		status_text: "",
		status_task: "",
		top_date: "",
		init_date: "",
		group_id: "",
		user_id: ""
	};

	const [dataNewTask, setDataNewTask] = useState(formDataNewTask);

	//funcion para guardar data del formulario en el estado.
	const changeDataNewTask = e => {
		setDataNewTask({
			...dataNewTask,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	};

	//Funcion para guardar nuevo grupo
	const saveNewTask = async e => {
		e.preventDefault();
		let success = await actions.addTask(dataNewGroup);
		if (success) {
			alert("Su tarea ha sido creada");
			//revisar si se direcciona al nuevo grupo
		} else {
			alert("Su tarea no pudo ser creada, revise los datos");
		}
	};

	return (
		<React.Fragment>
			{/* ------------------------Start of the Expenses Form-----------------------------------------*/}
			{/* ----------------------Inicio del Formulario de Egresos------------------------------------- */}
			{/*-----------------------------Titulo Registro de Usuarios-------------------------------------*/}
			<div className="container-fluid">
				<div className="row col-md-12 mt-3 justify-content-center text-secondary">
					<h1>Tareas</h1>
				</div>
				<br />
				{/*-----------------------------Imagen de Optimus en Tareas-------------------------------------*/}
				<div className="row d-flex flex-row">
					<div className="col-md-12 d-flex justify-content-center">
						<img src={optimus2} className="img-fluid" width="120" height="120" style={{ opacity: 0.7 }} />
					</div>
				</div>
				{/*-----------------------------Boton de Nueva Tarea-------------------------------------*/}
				{/* <div className="col-md-4 d-flex justify-content-center">
					<button type="button" className="btn btn-primary mt-3 mb-3 mx-3" onClick="">
						Nueva Tarea
					</button>
				</div> */}
				<br />
				{/*-----------------------------Label de Fecha de Inicio-------------------------------------*/}
				<div className="col-md-12 d-flex justify-content-center">
					<label className="text-muted mx-1 mt-4 mb-1 justify-content-center">
						<small>Fecha de inicio</small>
					</label>
					<br />
					{/*-----------------------------Input de Fecha de Inicio-------------------------------------*/}
					<input
						name="init_date"
						className="form-control col-4 mx-2 mt-3 mb-2 border border-primary  bg-light rounded-pill"
						type="date"
						placeholder="fecha"
						onChange={changeDataNewTask}
					/>
					<br />
					{/*-----------------------------Label de Fecha de Finalización------------------------------*/}
					<label className="text-muted mx-1 mt-4 mb-1 justify-content-center">
						<small>Fecha de finalización</small>
					</label>
					<br />
					{/*-----------------------------Input de Fecha de Inicio-------------------------------------*/}
					<input
						name="top_date"
						className="form-control col-4 mx-2 mt-3 mb-2 border border-primary  bg-light rounded-pill"
						type="date"
						placeholder="fecha"
						onChange={changeDataNewTask}
					/>
					<br />
				</div>
				<br />
				{/*-----------------------------Form Asignar Colaborador y Tareas--------------------------------*/}
				{/*-----------------------------Select Asignar Colaborador----------------------------*/}
				<div className="form-group justify-content-center col-md-12 d-flex flex-col">
					<div className="row">
						<div className="col-sm-10">
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="gridRadios"
									id="gridRadios1"
									value="option1"
									checked
								/>
								<label className="form-check-label" forHTML="gridRadios1">
									Tarea iniciada
								</label>
							</div>
							<br />
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="gridRadios"
									id="gridRadios2"
									value="option2"
								/>
								<label className="form-check-label" forHTML="gridRadios2">
									Tarea por iniciar
								</label>
							</div>
						</div>
					</div>
				</div>
				{/*---------------------------Label Descripción de la Tarea--------------------------*/}
				<div className="form-group justify-content-center col-md-12 d-flex fles-row">
					<label className="exampleFormControlTextarea1 mx-1 mt-3 mb-3">
						<small className="text-muted">Descripción de la Tarea</small>
					</label>
					{/*----------------------TextArea Descripción de la Tarea--------------------------*/}
					<textarea
						className="form col-7 mx-2 mt-3 mb-3 border border-primary bg-light"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="Escriba una Tarea"
					/>
				</div>
				{/*---------------------------Botones Cancelar y Aceptar--------------------------*/}
				<div className="container-fluid">
					<div className="row justify-content-center">
						{/* Falta agregar la propiedad onClick para Cancelar el Registro. */}
						<button
							type="button"
							className="btn btn-xs btn-danger m-3"
							onClick={() => history.push("/profile")}>
							Cancelar
						</button>
						{/* Falta agregar la propiedad onClick para Aceptar el Registro. */}
						<button type="button" className="btn btn-xs btn-primary m-3" onClick={saveNewTask}>
							Aceptar
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default newTasks;
