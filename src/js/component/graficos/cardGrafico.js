import React, { useState } from "react";
import PropTypes from "prop-types";
import { Bar, Pie } from "react-chartjs-2";

export const CardGrafico = ({ incomes, expenses }) => {
	const [stateReport, setStateReport] = useState(true);
	const [stateGraphic, setStateGraphic] = useState(true);
	console.log(incomes);

	//en esta variable se guardan todoa los ingresos en cada mes

	var incomes_mes = [
		{ incomesMes: [], mes: 0 },
		{ incomesMes: [], mes: 1 },
		{ incomesMes: [], mes: 2 },
		{ incomesMes: [], mes: 3 },
		{ incomesMes: [], mes: 4 },
		{ incomesMes: [], mes: 5 },
		{ incomesMes: [], mes: 6 },
		{ incomesMes: [], mes: 7 },
		{ incomesMes: [], mes: 8 },
		{ incomesMes: [], mes: 9 },
		{ incomesMes: [], mes: 10 },
		{ incomesMes: [], mes: 11 }
	];
	var expenses_mes = [
		{ expensesMes: [], mes: 0 },
		{ expensesMes: [], mes: 1 },
		{ expensesMes: [], mes: 2 },
		{ expensesMes: [], mes: 3 },
		{ expensesMes: [], mes: 4 },
		{ expensesMes: [], mes: 5 },
		{ expensesMes: [], mes: 6 },
		{ expensesMes: [], mes: 7 },
		{ expensesMes: [], mes: 8 },
		{ expensesMes: [], mes: 9 },
		{ expensesMes: [], mes: 10 },
		{ expensesMes: [], mes: 11 }
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

	const addIncomesMes = () => {
		for (let i = 0; i <= incomes.length - 1; i++) {
			let new_date = new Date(incomes[i].date);
			let new_mes = new_date.getMonth;
			for (let a = 0; a < 12; a++) {
				if (incomes_mes[a].mes == new_mes) {
					incomes_mes[a].incomesMes = [...incomes_mes[a].incomesMes, incomes[i].usd_amount];
				}
			}
		}
	};
	const addExpensesMes = () => {
		for (let i = 0; i <= expenses.length - 1; i++) {
			let new_date = new Date(expenses[i].date);
			let new_mes = new_date.getMonth;
			for (let a = 0; a < 12; a++) {
				if (expenses_mes[a].mes == new_mes) {
					expenses_mes[a].expensesMes = [...expenses_mes[a].expensesMes, expenses[i].usd_amount];
				}
			}
		}
	};
	addIncomesMes();
	addExpensesMes();

	const dataGraficoIncomes = () => {
		var dataGra = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (let i = 0; i < 12; i++) {
			dataGra[i] = SumaTotal(incomes_mes[i].incomesMes);
		}
		return dataGra;
	};
	const dataGraficoExpenses = () => {
		var dataGra = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (let i = 0; i < 12; i++) {
			dataGra[i] = SumaTotal(expenses_mes[i].expensesMes);
		}
		return dataGra;
	};

	const info = {
		ventas: {
			movimientos: [1, 2, 3],
			mes: [
				"Enero",
				"Febrero",
				"Marzo",
				"Abril",
				"Mayo",
				"Junio",
				"Julio",
				"Agosto",
				"Septiembre",
				"Octubre",
				"Noviembre",
				"Diciembre"
			],
			colorA: [
				"rgba(122,45,240,0.8)",
				"rgba(73,145,200,0.8)",
				"rgba(40,200,120,0.8)",
				"rgba(150,30,600,0.8)",
				"rgba(200,100,188,0.8)",
				"rgba(240,80,20,0.8)",
				"rgba(122,45,240,0.8)",
				"rgba(73,145,200,0.8)",
				"rgba(40,200,120,0.8)",
				"rgba(150,30,600,0.8)",
				"rgba(200,100,188,0.8)",
				"rgba(240,80,20,0.8)"
			]
		},
		gastos: {
			movimientos: [1, 2, 3],
			mes: [
				"Enero",
				"Febrero",
				"Marzo",
				"Abril",
				"Mayo",
				"Junio",
				"Julio",
				"Agosto",
				"Septiembre",
				"Octubre",
				"Noviembre",
				"Diciembre"
			],
			colorA: [
				"rgba(122,45,240,0.8)",
				"rgba(73,145,200,0.8)",
				"rgba(40,200,120,0.8)",
				"rgba(150,30,600,0.8)",
				"rgba(200,100,188,0.8)",
				"rgba(240,80,20,0.8)",
				"rgba(122,45,240,0.8)",
				"rgba(73,145,200,0.8)",
				"rgba(40,200,120,0.8)",
				"rgba(150,30,600,0.8)",
				"rgba(200,100,188,0.8)",
				"rgba(240,80,20,0.8)"
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
												<h3>Reporte de Ingresos por mes</h3>
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
											labels: info.ventas.mes,
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
												<h3>Reporte de Ingresos por mes</h3>
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
											labels: info.ventas.mes,
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
												<h3>Reporte de Egresos por mes</h3>
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
											labels: info.gastos.mes,
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
												<h3>Reporte de Egresos por mes</h3>
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
											labels: info.gastos.mes,
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

CardGrafico.propTypes = {
	incomes: PropTypes.array,
	expenses: PropTypes.array
};
