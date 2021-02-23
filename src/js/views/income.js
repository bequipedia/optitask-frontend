import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";

function Income() {
	// Estado inicial incomes
	const formDataIncome = {
		group_id: "", //REQUIERE LECTURA O SELECT PARA GRUPO
		user_id: "", // LECTURA DESDE EL PROPIO FRONT
		date: "",
		coin: "",
		payment: "",
		method_payment: "",
		amount: "",
		usd_amount: "",
		rate_to_dolar: "",
		bank: "", //(opcional)
		description: "" //(opcional)
	};
	const [dataIncome, setDataIncome] = useState(formDataIncome);

	//funcion para guardar data del formulario Expenses en el estado.
	const changeDataIncome = e => {
		setDataIncome({
			...dataIncome,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	};

	const saveIncome = async e => {
		e.preventDefault();
		let success = await actions.addIncome(dataIncome);
		if (success) {
			console.log("Su registro ha sido creado");
			//aquí se llamaría un fetch que consulta los últimos 5 registros de la API
		} else {
			console.log("Su registro no pudo ser creado");
		}
	};

	const { store, actions } = useContext(Context);
	const [paymentOption, setPaymentOption] = useState("");

	function selectedOption(e) {
		setPaymentOption(e.target.value);
	}
	return (
		<React.Fragment>
			{/* Start of the Income Form */}
			{/* Inicio del Formulario de Ingresos */}
			<div className="container-fluid">
				<div className="d-flex row-flex">
					<div className="col-md-12 d-flex mt-3 mb-3 justify-content-center text-secondary">
						<h1>Registro de ingresos</h1>
					</div>
				</div>
				{/* Falta agregar la propiedad onClick para agregar un Nuevo registro a la tabla. */}
				<div className="col-7 d-flex ml-5">
					<div className="d-flex flex-row">
						<button type="button" className="btn btn-outline-primary mt-3 mb-3 mx-6" onClick="">
							Nuevo registro
						</button>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-12">
						<div className="form-group">
							<div className="row justify-content-center">
								{/*---------------- Este Input me trae el calendario------------------ */}
								<input
									className="form-control col-5 mx-1 mb-6 border border-primary  bg-light rounded-pill"
									type="date"
									placeholder="fecha"
								/>
								<select
									className="custom-select form-select-lg bg-light mb-6 col-5 mx-1 border border-primary rounded-pill"
									aria-label=".form-select-lg example">
									{/* Aquí debemos hacer el llamado a la API de conversión de monedas en tiempo real 
                                    y la API del precio del Bitcoin. */}
									{/* ---------------Select Seleccione Moneda--------------------- */}
									<option selected>Seleccione moneda</option>
									<option value="1">Bitcoin</option>
									<option value="2">Bolívares (Cambio Oficial)</option>
									<option value="2">Bolívares (Cambio Alternativo)</option>
									<option value="3">Dólar Americano</option>
									<option value="4">Euro</option>
									<option value="5">Pesos Colombianos</option>
									<option value="6">Reales Brasileños</option>
								</select>
							</div>
						</div>
						<br />
						<div className="form-group">
							<div className="row justify-content-center">
								{/* ---------------Select Forma de Pago--------------------- */}
								<select
									onChange={selectedOption}
									className="custom-select form-select-lg bg-light mb-6 col-5 mx-1 border border-primary rounded-pill"
									aria-label=".form-select-lg example">
									<option selected>Seleccione una forma de pago</option>
									{store.paymentForms.map((item, index) => {
										return (
											<option key={index} value={item.payment}>
												{item.payment}
											</option>
										);
									})}
								</select>
								{/* ---------------Select Metodo Asociado de Pago--------------------- */}
								<select
									className="custom-select form-select-lg bg-light mb-6 col-5 mx-1 border border-primary rounded-pill"
									aria-label=".form-select-lg example">
									<option selected>Seleccione un metodo asociado de pago</option>
									{store.paymentForms.map((item, index) => {
										return (
											<>
												{paymentOption == item.payment &&
													item.paymentMethod.map((method, index) => {
														return (
															<option key={index} value={method}>
																{method}
															</option>
														);
													})}
											</>
										);
									})}
								</select>
							</div>
						</div>
						<br />
						<div className="form-group">
							<div className="row justify-content-center">
								{/* ---------------Input Monto a Registar-------------- */}
								<input
									className="form-control col-5 mx-1 bg-light border border-primary rounded-pill"
									type="text"
									placeholder="Monto a registar"
								/>
								{/* -----------------------Referencia Tipo de Cambio---------------------- */}
								<div className="row justify-content-center">
									<div className="card col-5">
										<div className="card-body">
											<h5 className="card-title">BTC/USD</h5>
											<p className="card-text">58892.45$</p>
											<p className="card-text text-muted">
												<small className="text-muted">Ultima actualización</small>
											</p>
										</div>
										<button type="button" className="btn btn-outline-primary btn-sm" onClick="">
											Usar
										</button>
									</div>
									{/* -----------------------Tipo de Cambio---------------------- */}
									<input
										className="form-control col-5 mx-1 bg-light border border-primary rounded-pill"
										type="text"
										placeholder="Tipo de cambio"
									/>
								</div>
								<br />
								{/* -----Input Monto a Registar en Dolares Americanos (USD)---- */}
								<input
									className="form-control col-5 mx-1 bg-light border border-primary rounded-pill"
									type="text"
									placeholder="Monto registrado en dolares americanos (USD)"
								/>
							</div>
						</div>
						<br />
						<div className="form-group">
							{/* ----------------Select Entidad Bancaria----------------- */}
							<div className="row justify-content-center">
								<select className="custom-select col-5 mb-6 mx-1 bg-light border border-primary rounded-pill">
									<option selected>Seleccione una entidad bancaria</option>
									<option value="1">Banco Central de Venezuela</option>
									<option value="2">Banco de Venezuela S.A.C.A. Banco Universal</option>
									<option value="3">Venezolano de Crédito, S.A. Banco Universal</option>
									<option value="4">Banco Mercantil, C.A. Banco Universal</option>
									<option value="5">Banco Provincial, S.A. Banco Universa</option>
									<option value="6">Bancaribe C.A. Banco Universa</option>
									<option value="7">Banco Exterior C.A. Banco Universa</option>
									<option value="8">Banco Occidental de Descuento, Banco Universal C.A</option>
									<option value="9">Banco Caroní C.A. Banco Universal</option>
									<option value="10">Banesco Banco Universal S.A.C.A.</option>
									<option value="11">Banco Sofitasa, Banco Universal</option>
									<option value="12">Banco Plaza, Banco Universal</option>
									<option value="13">Banco de la Gente Emprendedora C.A</option>
									<option value="14">BFC Banco Fondo Común C.A. Banco Universal</option>
									<option value="15">100% Banco, Banco Universal C.A.</option>
									<option value="16">DelSur Banco Universal C.A.</option>
									<option value="17">Banco del Tesoro, C.A. Banco Universal</option>
									<option value="18">Banco Agrícola de Venezuela, C.A. Banco Universa</option>
									<option value="19">Bancrecer, S.A. Banco Microfinanciero</option>
									<option value="20">Mi Banco, Banco Microfinanciero C.A.</option>
									<option value="21">Banco Activo, Banco Universa</option>
									<option value="22">Bancamica, Banco Microfinanciero C.A.</option>
									<option value="23">Banco Internacional de Desarrollo, C.A. Banco Universal</option>
									<option value="24">Banplus Banco Universal, C.A</option>
									<option value="25">
										Banco Bicentenario del Pueblo de la Clase Obrera, Mujer y Comunas B.U.
									</option>
									<option value="26">Novo Banco, S.A. Sucursal Venezuela Banco Universa</option>
									<option value="27">Banco de la Fuerza Armada Nacional Bolivariana, B.U.</option>
									<option value="28">Citibank N.A.</option>
									<option value="29">Banco Nacional de Crédito, C.A. Banco Universal</option>
									<option value="30">Instituto Municipal de Crédito Popular</option>
								</select>
								{/* ----------------Input Tipo de Negocio----------------- */}
								<input
									type="text"
									className="form-control col-5 mb-6 mx-1 bg-light border border-primary rounded-pill"
									placeholder="Tipo de negocio"
								/>
							</div>
						</div>
						<br />
						<div className="form-group">
							<div className="row justify-content-center">
								<button type="button" className="btn btn-outline-primary mt-3 mb-3 mx-6" onClick="">
									Agregar
								</button>
							</div>
						</div>
						<br />
						{/* ----------------Tabla de los Ultimos 5 Registros de Ingresos----------------- */}
						<div className="form-group">
							<div className="row justify-content-center">
								<div className="col-8 table-responsive-sm">
									<table className="table table-sm table-primary">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Fecha</th>
												<th scope="col">Forma de Pago</th>
												<th scope="col">Método de Pago</th>
												<th scope="col">Entidad Bancaria</th>
												<th scope="col">Tipo de Negocio</th>
												<th scope="col">Descripción del Ingreso</th>
												<th scope="col">Monto en USD Dolar</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
											<tr>
												<th scope="row">2</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
											<tr>
												<th scope="row">3</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
											<tr>
												<th scope="row">4</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
											<tr>
												<th scope="row">5</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
										</tbody>
									</table>
									<div className="container-fluid">
										<div className="row justify-content-center">
											{/* Falta agregar la propiedad onClick para Cancelar el Registro del Valor a la Tabla. */}
											<button
												type="button"
												className="btn btn-xs btn-outline-danger m-3"
												onClick="">
												Cancelar
											</button>
											{/* Falta agregar la propiedad onClick para Aceptar el Registro e Introducir el Valor a la Tabla. */}
											<button
												type="button"
												className="btn btn-xs btn-outline-primary m-3"
												onClick="">
												Aceptar
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Income;
