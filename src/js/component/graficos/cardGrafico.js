import React, { useState } from "react";
import PropTypes from "prop-types";
import { Bar, Pie } from "react-chartjs-2";

export const CardGrafico = ({ sales, expenses }) => {
	const [stateReport, setStateReport] = useState(true);
	const [stateGraphic, setStateGraphic] = useState(true);

	const info = {
		ventas: {
			movimientos: [],
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
			movimientos: [],
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

	const amount = () => {};

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
												<h3>Reporte de Ventas</h3>
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
											labels: ["enero", "febrero", "marzo", "abril", "mayo", "junio"],
											datasets: [
												{
													label: "Ventas",
													data: [1, 2, 3, 4, 56],
													backgroundColor: [
														"rgba(122,45,240,0.8)",
														"rgba(73,145,200,0.8)",
														"rgba(40,200,120,0.8)",
														"rgba(150,30,600,0.8)",
														"rgba(200,100,188,0.8)",
														"rgba(240,80,20,0.8)"
													]
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
												<h3>Reporte de Ventas</h3>
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
											labels: sales.mes,
											datasets: [
												{
													label: "Ventas",
													data: sales.precio,
													backgroundColor: sales.colorA
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
												<h3>Reporte de Gastos</h3>
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
											labels: expenses.mes,
											datasets: [
												{
													label: "Gastos",
													data: expenses.precio,
													backgroundColor: expenses.colorA
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
												<h3>Reporte de Gastos</h3>
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
											labels: expenses.mes,
											datasets: [
												{
													label: "Gastos",
													data: expenses.precio,
													backgroundColor: expenses.colorA
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
	sales: PropTypes.object,
	expenses: PropTypes.object
};
