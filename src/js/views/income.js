import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

function Income() {
	const { store, actions } = useContext(Context);

	//construye las listas desplegables condicionales
	const [paymentOption, setPaymentOption] = useState("");

	function selectedOption(e) {
		setPaymentOption(e.target.value);
	}

	function selectedCoinOption(e) {
		setCoinSelected(e.target.value);
	}

	// Estado inicial incomes
	const formDataIncome = {
		group_id: "", //REQUIERE LECTURA O SELECT PARA GRUPO
		user_id: store.user.id, // LECTURA DESDE EL PROPIO FRONT
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
	//estado con la información dentro del objeto form data
	const [dataIncome, setDataIncome] = useState(formDataIncome);

	//función para poner en estado inicial a data
	// const newRegister = e => {
	// 	setDataIncome(
	// 		...dataIncome,
	// 		[e.target.name]: ""e.target.value""
	// 	);
	// };

	//funcion para guardar data del formulario Income en el estado.
	const changeDataIncome = e => {
		setDataIncome({
			...dataIncome,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	};

	//Funcion para guardar en income
	const saveIncome = async e => {
		// store.userGroups
		// store.userGroups.map(item => {
		// 	if (dataIncome.group_id == item.group_id) {
		// 		setDataIncome(...dataIncome, (group_id = parseInt(dataIncome.group_id, 10)));
		// 	}
		// });
		let data = { ...dataIncome };
		console.log(data);
		let success = await actions.addIncome(data);
		if (success) {
			console.log("Su registro ha sido creado");
			alert("Optitask: Su registro ha sido creado");
			//let success= await actions.getExpensesUser(data.user_id)
		} else {
			console.log("Su registro no pudo ser creado");
		}
	};
	//función para mostrar el tipo de cambio acorde a la selección de una moneda específica
	const [coinSelected, setCoinSelected] = useState("");
	const [resultRate, setResultRate] = useState([]);
	const [useRateRef, setUseRateRef] = useState("");

	useEffect(
		() => {
			if (coinSelected != "") {
				const results_rate = store.rates.filter(rate => rate.symbol.includes(coinSelected));
				setResultRate(results_rate);
			}
		},
		[coinSelected]
	);

	//función para buscar los grupos de un usuario

	useEffect(
		() => {
			actions.getUserGroups(store.user.id);
			console.log("Estoy imprimiendo user group" + store.userGroups);
		},
		[store.user]
	);

	//función para enviar valor de rate a input de TDC desde campo de referencia
	const sendRatetoTDC = e => {
		setUseRateRef(resultRate[0].rate_to_dolar);
		setDataIncome({
			...dataIncome,
			rate_to_dolar: resultRate[0].rate_to_dolar
		});
	};

	//calcular el monto al tipo de cambio seleccionado ó escrito
	const [montoUSD, setMontoUSD] = useState("");

	const calculatorToUSD = e => {
		setMontoUSD((dataIncome.amount / dataIncome.rate_to_dolar).toFixed(2));
		setDataIncome({
			...dataIncome,
			usd_amount: montoUSD
		});
	};

	return (
		<React.Fragment>
			{/*------------------- Start of the Income Form--------------------- */}
			{/* ------------------Inicio del Formulario de Ingresos------------- */}
			{/*-----------------------------Titulo Registro de Usuarios-------------------------------------*/}
			<div className="container-fluid">
				<div className="row col-md-12 mt-3 justify-content-center text-secondary">
					<h1>Registro de Ingresos</h1>
				</div>
				<br />
				{/*-----------------------------Boton de Nuevo Registro-------------------------------------*/}
				<div className="row d-flex flex-row">
					{/* <div className="col-md-4 d-flex justify-content-center">
						<button type="button" className="btn btn-primary mt-3 mb-3 mx-6" onClick={newRegister}>
							Nuevo registro
						</button>
					</div> */}
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
							onChange={changeDataIncome}
						/>
						<select
							name="coin"
							className="custom-select form-select col-5 mx-1 mt-3 mb-3 justify-content-center bg-light border border-primary rounded-pill"
							aria-label=".form-select-lg example"
							onClick={e => {
								selectedCoinOption(e), changeDataIncome(e);
							}}>
							{/* ---------------Select Seleccione Moneda--------------------- */}
							<option selected>Seleccione moneda</option>
							<option value="BTC">Bitcoin</option>
							<option value="Bs">Bolívares (Cambio Oficial)</option>
							<option value="Sb TA">Bolívares (Cambio Alternativo)</option>
							<option value="$">Dólar Americano</option>
							<option value="EUR">Euro</option>
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
								selectedOption(e), changeDataIncome(e);
							}}
							className="custom-select form-select col-5 mx-1 mt-3 mb-3 justify-content-center bg-light border border-primary rounded-pill"
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
							name="method_payment"
							className="custom-select form-select-lg bg-light mx-1 mt-3 mb-3 col-5  border border-primary rounded-pill"
							aria-label=".form-select-lg example"
							onChange={changeDataIncome}>
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
							name="rate_to_dolar"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							type="text"
							placeholder={useRateRef == "" ? "Tipo de cambio a dólar (USD)" : useRateRef}
							onChange={changeDataIncome}
						/>
						{/*-----------------------Boton para usar Tipo de Cambio----------------------*/}
						<button
							type="button"
							className=" col-2 btn btn-primary mt-3 mb-3 mx-6 "
							onClick={sendRatetoTDC}>
							Usar
						</button>
						<div className="form-control d-flex col-3 mx-1 mt-3 mb-3 justify-content-center border border-primary  bg-light rounded-pill">
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
							name="amount"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							type="text"
							placeholder="Monto a registar"
							onChange={changeDataIncome}
							onBlur={calculatorToUSD}
						/>
						{/* -----Input Monto a Registar en Dolares Americanos (USD)---- */}
						<input
							name="usd_amount"
							className="form-control col-5 mx-1 mt-3 mb-3 border border-primary  bg-light rounded-pill"
							type="text"
							placeholder={montoUSD}
							//onChange={changeDataIncome}
						/>
					</div>
				</div>
				<div className="row d-flex flex-row">
					<div className="col-md-12 d-flex justify-content-center">
						{/* ----------------Select Entidad Bancaria----------------- */}
						<select
							name="bank"
							onChange={changeDataIncome}
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
						<select
							name="group_id"
							className="custom-select form-select-lg bg-light mx-1 mt-3 mb-3 col-5  border border-primary rounded-pill"
							aria-label=".form-select-lg example"
							onChange={changeDataIncome}>
							<option selected>Seleccione un negocio</option>
							{store.userGroups.map((item, index) => {
								return (
									<option key={index} value={item.id}>
										{item.group_name}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<div className="form-group">
					<div className="row justify-content-center">
						<button type="button" className="btn btn-primary mt-3 mb-3 mx-6" onClick={saveIncome}>
							Agregar
						</button>
					</div>
				</div>
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
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="container-fluid">
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
		</React.Fragment>
	);
}
export default Income;
