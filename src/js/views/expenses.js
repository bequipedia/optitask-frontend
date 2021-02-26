import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

function Expenses() {
	const { store, actions } = useContext(Context);

	//construye las listas desplegables condicionales
	const [paymentOption, setPaymentOption] = useState("");

	function selectedOption(e) {
		setPaymentOption(e.target.value);
	}

	function selectedCoinOption(e) {
		setCoinSelected(e.target.value);
	}

	// Estado inicial Expenses
	const formDataExpense = {
		group_id: "", //REQUIERE LECTURA O SELECT PARA GRUPO
		user_id: store.user.id, // LECTURA DESDE EL PROPIO FRONT
		date: "",
		coin: "",
		payment: "",
		paymentMethod: "",
		amount: "",
		usd_amount: "",
		rate_to_dolar: "",
		bank: "",
		category: "",
		provider: "", //(opcional)
		description: "" //(opcional)
	};
	//estado con la información dentro del objeto form data
	const [dataExpense, setDataExpense] = useState(formDataExpense);

	//funcion para guardar data del formulario Expenses en el estado.
	const changeDataExpense = e => {
		setDataExpense({
			...dataExpense,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	};

	//Funcion para guardar en expenses
	const saveExpense = async e => {
		e.preventDefault();
		let success = await actions.addExpense(dataExpenses);
		if (success) {
			console.log("Su registro ha sido creado");
			//aquí se llamaría un fetch que consulta los últimos 5 registros de la API
		} else {
			console.log("Su registro no pudo ser creado");
		}
	};

	//función para mostrar el tipo de cambio acorde a la selección de una moneda específica
	const [coinSelected, setCoinSelected] = useState("");
	const [resultRate, setResultRate] = useState([]);
	const [useRateRef, setUseRateRef] = useState("");

	useEffect(() => {
		if (coinSelected != "") {
			const results_rate = store.rates.filter(rate => rate.symbol.includes(coinSelected));
			setResultRate(results_rate);
		}
	}, [coinSelected]);

	//función para buscar los grupos de un usuario

	useEffect(() => {
		actions.getUserGroups(store.user.id);
	}, [store.user]);

	//función para enviar valor de rate a input de TDC desde campo de referencia
	const sendRatetoTDC = e => {
		setUseRateRef(resultRate[0].rate_to_dolar);
		setDataExpense({
			...dataExpense,
			rate_to_dolar: resultRate[0].rate_to_dolar
		});
	};

	//calcular el monto al tipo de cambio seleccionado ó escrito
	const [montoUSD, setMontoUSD] = useState("");

	const calculatorToUSD = e => {
		setMontoUSD((dataExpense.amount / dataExpense.rate_to_dolar).toFixed(2));
	};

	return (
		<React.Fragment>
			{/* ------------------------Start of the Expenses Form-----------------------------------------*/}
			{/* ----------------------Inicio del Formulario de Egresos------------------------------------- */}
			{/*-----------------------------Titulo Registro de Usuarios-------------------------------------*/}
			<div className="container-fluid">
				<div className="row col-md-12 mt-3 justify-content-center text-secondary">
					<h1>Registro de Egresos</h1>
				</div>
				<br />
				{/*-----------------------------Boton de Nuevo Registro-------------------------------------*/}
				<div className="row d-flex flex-row">
					<div className="col-md-4 d-flex justify-content-center">
						<button type="button" className="btn btn-primary mt-3 mb-3 mx-6" onClick={calculatorToUSD}>
							Nuevo registro
						</button>
					</div>
				</div>
				<br />
				<div className="row d-flex flex-row">
					<div className="col-md-12 d-flex justify-content-center">
						{/*---------------- Este Input me trae la Fecha en el calendario------------------ */}
						<input
							name="date"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							type="date"
							placeholder="fecha"
							onChange={changeDataExpense}
						/>
						<select
							name="coin"
							className="custom-select form-select col-5 mx-1 mt-3 mb-3 justify-content-center bg-light border border-primary rounded-pill"
							aria-label=".form-select-lg example"
							onClick={e => {
								selectedCoinOption(e), changeDataExpense(e);
							}}>
							{/* ---------------Select Seleccione Moneda--------------------- */}
							<option selected>Seleccione moneda</option>
							<option value="BTC">Bitcoin</option>
							<option value="Bs">Bolívares (Cambio Oficial)</option>
							<option value="Sb TA">Bolívares (Cambio Alternativo)</option>
							<option value="$">Dólar Americano</option>
							<option value="€">Euro</option>
							<option value="COP">Pesos Colombianos</option>
							<option value="BRL">Reales Brasileños</option>
						</select>
					</div>
				</div>
				<div className="row d-flex flex-row">
					<div className="col-md-12 d-flex justify-content-center">
						{/* ---------------Select Forma de Pago--------------------- */}
						<select
							name="payment"
							onChange={e => {
								selectedOption(e), changeDataExpense(e);
							}}
							className="custom-select form-select col-5 mx-1 mt-3 mb-3 justify-content-center bg-light border border-primary rounded-pill"
							aria-label=".form-select-lg example">
							<option selected> Seleccione una forma de pago</option>
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
							name="paymentMethod"
							className="custom-select form-select-lg bg-light mx-1 mt-3 mb-3 col-5  border border-primary rounded-pill"
							aria-label=".form-select-lg example"
							onChange={changeDataExpense}>
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
				{/* ----------------------- Tipo de Cambio---------------------- */}
				<div className="row d-flex flex-row">
					<div className="col-md-12 d-flex justify-content-center">
						<input
							id="rate_to_dolar"
							name="rate_to_dolar"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							type="text"
							placeholder={useRateRef == "" ? "Tipo de cambio a dólar (USD)" : useRateRef}
							onChange={changeDataExpense}
						/>
						{/*-----------------------Boton para usar Tipo de Cambio----------------------*/}
						<button
							type="button"
							className=" col-2 btn btn-primary mt-3 mb-3 mx-6 "
							onClick={sendRatetoTDC}>
							Usar
						</button>
						<div className="form-control text-muted d-flex col-3 mx-1 mt-3 mb-3 justify-content-center border border-primary  bg-light rounded-pill">
							{resultRate.map((item, index) => {
								return (
									<small key={index}>
										`Ref: {item.rate_to_dolar} {item.symbol} .
									</small>
								);
							})}
							<i className="fas fa-coins" />
						</div>
					</div>
				</div>

				<div className="row d-flex flex-row">
					<div className="col-md-12 d-flex justify-content-center">
						{/* ---------------Input Monto a Registar-------------- */}
						<input
							id="amount"
							name="amount"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							type="text"
							placeholder="Monto a registar"
							onChange={changeDataExpense}
							onBlur={calculatorToUSD}
						/>
						{/* -----Input Monto a Registar en Dolares Americanos (USD)---- */}
						<input
							name="usd_amount"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							type="text"
							disabled
							placeholder={montoUSD}
							onChange={changeDataExpense}
						/>
					</div>
				</div>
				<div className="row d-flex flex-row">
					<div className="col-md-12 d-flex justify-content-center">
						{/* ----------------Select Entidad Bancaria----------------- */}
						<select
							name="bank"
							onChange={changeDataExpense}
							className="custom-select col-5 mt-3 mb-3 mx-1 bg-light border border-primary rounded-pill">
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
						{/* value=id_group de la BD----------------esto debe ser un select option, con map en option para traer con el método GET/
						del endpoint groups/id_user cuando id_user=id_user los negocios creados por el usuario-Input Tipo de Negocio----------------- */}
						<input
							name="group_id"
							type="text"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							placeholder="Elige un negocio"
							onChange={changeDataExpense}
						/>
					</div>
				</div>
				{/* ----------------Select Categoria del Egreso----------------- */}
				<div className="row d-flex flex-row">
					<div className="col-md-12 d-flex justify-content-center">
						<select
							name="category"
							onChange={changeDataExpense}
							className="custom-select col-5 mt-3 mb-3 mx-1 bg-light border border-primary rounded-pill">
							<option selected>Seleccione una Categoria del Egreso</option>
							<option value="1">Activos Fijos</option>
							<option value="2">Activos Intangibles</option>
							<option value="3">Alquiler</option>
							<option value="4">Beneficios a Empleados</option>
							<option value="5">Comisiones/Intereses</option>
							<option value="6">Formación/Educación</option>
							<option value="7">Gastos Administrativos</option>
							<option value="8">Imprevisto</option>
							<option value="9">Impuestos</option>
							<option value="10">Inversión Inicial</option>
							<option value="11">Publicidad</option>
							<option value="12">Salario/Mano de Obra</option>
							<option value="13">Salud</option>
							<option value="14">Servicios Públicos</option>
						</select>
						{/* ----------------Introduzca el Proveedor----------------- */}
						<input
							name="provider"
							type="text"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							placeholder="Proveedor"
							onChange={changeDataExpense}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="row justify-content-center">
						<button type="button" className="btn btn-primary mt-3 mb-3 mx-6" onClick="">
							Agregar
						</button>
					</div>
				</div>
				{/* ----------------Tabla de los Ultimos 5 Registros de Egresos----------------- */}
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
										<th scope="col">Descripción del Egreso</th>
										<th scope="col">Categoria</th>
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
										<td />
									</tr>
								</tbody>
							</table>
							<div className="form-group col-12">
								<div className="row justify-content-center">
									{/* Falta agregar la propiedad onClick para Cancelar el Registro del Valor a la Tabla. */}
									<button type="button" className="btn btn-xs btn-danger m-3" onClick="">
										Cancelar
									</button>
									{/* Falta agregar la propiedad onClick para Aceptar el Registro e Introducir el Valor a la Tabla. */}
									<button type="button" className="btn btn-xs btn-primary m-3" onClick="">
										Aceptar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Expenses;
