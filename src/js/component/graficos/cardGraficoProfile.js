import React, { useState } from "react";
import PropTypes from "prop-types";
import { Bar, Pie } from "react-chartjs-2";

export const CardGraficoProfile = ({ incomes, expenses }) => {
	const [stateReport, setStateReport] = useState(true);
	const [stateGraphic, setStateGraphic] = useState(true);
	console.log(incomes);

	//en esta variable se guardan todoa los ingresos en cada mes

	var incomes_day = [
		{ incomesday: [], day: 0 }, //domingo
		{ incomesday: [], day: 1 },
		{ incomesday: [], day: 2 },
		{ incomesday: [], day: 3 },
		{ incomesday: [], day: 4 },
		{ incomesday: [], day: 5 },
		{ incomesday: [], day: 6 }
	];
	var expenses_day = [
		{ expensesday: [], day: 0 }, //domingo
		{ expensesday: [], day: 1 },
		{ expensesday: [], day: 2 },
		{ expensesday: [], day: 3 },
		{ expensesday: [], day: 4 },
		{ expensesday: [], day: 5 },
		{ expensesday: [], day: 6 }
	];
	//esta funcion suma todos los incomes de cada mes
	const SumaTotal = mes => {
		let suma = 0;

		mes.map(numero => {
			suma += numero;
		});
		console.log(suma);
		return suma;
	};

	const addIncomesDay = () => {
		for (let i = 0; i <= incomes.length - 1; i++) {
			let new_date = new Date(incomes[i].date);
			let new_day = new_date.getUTCDay();
			for (let a = 0; a < 7; a++) {
				if (incomes_day[a].day == new_day) {
					incomes_day[a].incomesday = [...incomes_day[a].incomesday, incomes[i].usd_amount];
				} else {
				}
			}
		}
	};

	const addExpensesDay = () => {
		for (let i = 0; i <= expenses.length - 1; i++) {
			let new_date = new Date(expenses[i].date);
			let new_day = new_date.getUTCDay();
			for (let a = 0; a < 7; a++) {
				if (expenses_day[a].day == new_day) {
					expenses_day[a].expensesday = [...expenses_day[a].expensesday, expenses[i].usd_amount];
				}
			}
		}
	};
	addIncomesDay();
	addExpensesDay();
	console.log(incomes_day);

	const dataGraficoIncomes = () => {
		var dataGra = [0, 0, 0, 0, 0, 0, 0];
		for (let i = 0; i < 7; i++) {
			dataGra[i] = SumaTotal(incomes_day[i].incomesday);
		}
		return dataGra;
	};
	const dataGraficoExpenses = () => {
		var dataGra = [0, 0, 0, 0, 0, 0, 0];
		for (let i = 0; i < 7; i++) {
			dataGra[i] = SumaTotal(expenses_day[i].expensesday);
		}
		return dataGra;
	};

	const info = {
		ventas: {
			movimientos: dataGraficoIncomes(), //
			day: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
			colorA: [
				"rgba(122,45,240,0.8)",
				"rgba(73,145,200,0.8)",
				"rgba(40,200,120,0.8)",
				"rgba(350,40,200,0.8)",
				"rgba(200,100,188,0.8)",
				"rgba(240,80,20,0.8)",
				"rgba(500,45,100,0.8)"
			]
		},
		gastos: {
			movimientos: dataGraficoExpenses(), //
			day: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
			colorA: [
				"rgba(122,45,240,0.8)",
				"rgba(73,145,200,0.8)",
				"rgba(40,200,120,0.8)",
				"rgba(350,40,200,0.8)",
				"rgba(200,100,188,0.8)",
				"rgba(240,80,20,0.8)",
				"rgba(500,45,100,0.8)"
			]
		}
	};

	return (
		<>
			{stateReport == true && stateGraphic == true ? (
				<div className="container">
					<div className="row ">
						<div className="col-md-12 col-sm-12 ">
							<div className="card">
								<div className="container">
									<div className="row d-flex justify-content-center pt-2">
										<div className="col-md-2">
											<button type="button " className="btn btn-outline-warning whiht">
												{"<"}
											</button>
										</div>
										<div className="col-md-6">
											<div className="d-flex justify-content-center align-items-center">
												<h3>Reporte de Ingresos por dia</h3>
											</div>
										</div>
										<div className="col-md-2">
											<button
												type="button "
												className="btn btn-outline-warning whiht"
												onClick={() => setStateReport(false)}>
												{">"}
											</button>
										</div>
									</div>
								</div>

								<div className="card-body">
									<Pie
										data={{
											labels: info.ventas.day,
											datasets: [
												{
													label: "Ingresos",
													data: info.ventas.movimientos,
													backgroundColor: info.ventas.colorA
												}
											]
										}}
									/>
								</div>
								<div className="card-footer">
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-md-1 col-xs-4">
												<button type="button w-100" className="btn btn-outline-warning whiht">
													{"<"}
												</button>
											</div>
											<div className="col-md-1 col-xs-4">
												<button
													type="button w-100"
													className="btn btn-outline-warning whiht"
													onClick={() => setStateGraphic(false)}>
													{">"}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : stateReport == true && stateGraphic == false ? (
				<div className="container">
					<div className="row ">
						<div className="col-md-12 col-sm-12 ">
							<div className="card">
								<div className="container">
									<div className="row d-flex justify-content-center pt-2">
										<div className="col-md-2">
											<button type="button " className="btn btn-outline-warning whiht">
												{"<"}
											</button>
										</div>
										<div className="col-md-6">
											<div className="d-flex justify-content-center align-items-center">
												<h3>Reporte de Ingresos por dia</h3>
											</div>
										</div>
										<div className="col-md-2">
											<button
												type="button "
												className="btn btn-outline-warning whiht"
												onClick={() => setStateReport(false)}>
												{">"}
											</button>
										</div>
									</div>
								</div>

								<div className="card-body">
									<Bar
										data={{
											labels: info.ventas.day,
											datasets: [
												{
													label: "Ingresos",
													data: info.ventas.movimientos,
													backgroundColor: info.ventas.colorA
												}
											]
										}}
									/>
								</div>
								<div className="card-footer">
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-md-1 col-xs-4">
												<button
													type="button w-100"
													className="btn btn-outline-warning whiht"
													onClick={() => setStateGraphic(true)}>
													{"<"}
												</button>
											</div>
											<div className="col-md-1 col-xs-4">
												<button type="button w-100" className="btn btn-outline-warning whiht">
													{">"}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : stateReport == false && stateGraphic == true ? (
				<div className="container">
					<div className="row ">
						<div className="col-md-12 col-sm-12 ">
							<div className="card">
								<div className="container">
									<div className="row d-flex justify-content-center pt-2">
										<div className="col-md-2">
											<button
												type="button "
												className="btn btn-outline-warning whiht"
												onClick={() => setStateReport(true)}>
												{"<"}
											</button>
										</div>
										<div className="col-md-6">
											<div className="d-flex justify-content-center align-items-center">
												<h3>Reporte de Egresos por dia</h3>
											</div>
										</div>
										<div className="col-md-2">
											<button type="button " className="btn btn-outline-warning whiht">
												{">"}
											</button>
										</div>
									</div>
								</div>

								<div className="card-body">
									<Pie
										data={{
											labels: info.gastos.day,
											datasets: [
												{
													label: "Egresos",
													data: info.gastos.movimientos,
													backgroundColor: info.gastos.colorA
												}
											]
										}}
									/>
								</div>
								<div className="card-footer">
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-md-1 col-xs-4">
												<button type="button w-100" className="btn btn-outline-warning whiht">
													{"<"}
												</button>
											</div>
											<div className="col-md-1 col-xs-4">
												<button
													type="button w-100"
													className="btn btn-outline-warning whiht"
													onClick={() => setStateGraphic(false)}>
													{">"}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="container">
					<div className="row ">
						<div className="col-md-12 col-sm-12 ">
							<div className="card">
								<div className="container">
									<div className="row d-flex justify-content-center pt-2">
										<div className="col-md-2">
											<button
												type="button "
												className="btn btn-outline-warning whiht"
												onClick={() => setStateReport(true)}>
												{"<"}
											</button>
										</div>
										<div className="col-md-6">
											<div className="d-flex justify-content-center align-items-center">
												<h3>Reporte de Egresos por dia</h3>
											</div>
										</div>
										<div className="col-md-2">
											<button type="button " className="btn btn-outline-warning whiht">
												{">"}
											</button>
										</div>
									</div>
								</div>

								<div className="card-body">
									<Bar
										data={{
											labels: info.gastos.day,
											datasets: [
												{
													label: "Egresos",
													data: info.gastos.movimientos,
													backgroundColor: info.gastos.colorA
												}
											]
										}}
									/>
								</div>
								<div className="card-footer">
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-md-1 col-xs-4">
												<button
													type="button w-100"
													className="btn btn-outline-warning whiht"
													onClick={() => setStateGraphic(true)}>
													{"<"}
												</button>
											</div>
											<div className="col-md-1 col-xs-4">
												<button type="button w-100" className="btn btn-outline-warning whiht">
													{">"}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

CardGraficoProfile.propTypes = {
	incomes: PropTypes.array,
	expenses: PropTypes.array
};
