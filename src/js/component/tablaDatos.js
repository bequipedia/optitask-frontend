import React, { useState } from "react";
import PropTypes from "prop-types";

//import { Login } from "./views/login";
import "../../styles/groups.scss";
// import "../../img/full-logo.png";

export const TablaDatos = ({ sales, expenses }) => {
	const [statusTable, setStatusTable] = useState(true);

	const cambiarTablaDatos = () => {
		if (statusTable == true) {
			setStatusTable(false);
		} else {
			setStatusTable(true);
		}
	};
	return (
		<>
			{statusTable == true ? (
				<div className="card">
					<div className="d-flex justify-content-center align-items-center">
						<h3>Reporte de Ventas</h3>
					</div>
					<div className="card-body card-table card-he">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-sm-12">
									<table className="table table-striped ">
										<thead>
											<tr>
												<th scope="col">Date</th>
												<th scope="col">Description</th>
												<th scope="col">method payment</th>
												<th scope="col">amount</th>
												<th scope="col">usd amount</th>
												<th scope="col">Bank</th>
											</tr>
										</thead>
										<tbody>
											{sales.map((sale, index) => {
												if (index % 2 != 0) {
													var colorColumn = "table-success";
												}
												return (
													<tr key={sale.id} className={colorColumn}>
														<th scope="row">{sale.date}</th>
														<td>{sale.description}</td>
														<td>{sale.method_payment}</td>
														<td>{sale.amount}</td>
														<td>{sale.usd_amount}</td>
														<td>{sale.bank}</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer">
						<div className="container">
							<div className="row d-flex justify-content-center">
								<div className="col-md-1 col-xs-4">
									<button
										type="button w-100"
										className="btn btn-outline-success whiht"
										onClick={cambiarTablaDatos}>
										{"<"}
									</button>
								</div>
								<div className="col-md-1 col-xs-4">
									<button
										type="button w-100"
										className="btn btn-outline-success whiht"
										onClick={cambiarTablaDatos}>
										{">"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="card ">
					<div className="d-flex justify-content-center align-items-center">
						<h3>Reporte de Gastos</h3>
					</div>
					<div className="card-body card-table card-he">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-sm-12">
									<table className="table table-striped ">
										<thead className="position-fixed-nav">
											<tr>
												<th scope="col">Date</th>
												<th scope="col">Description</th>
												<th scope="col">method payment</th>
												<th scope="col">amount</th>
												<th scope="col">usd amount</th>
												<th scope="col">Category</th>
												<th scope="col">Provider</th>
											</tr>
										</thead>
										<tbody>
											{expenses.map((expense, index) => {
												if (index % 2 != 0) {
													var colorColumn = "table-warning";
												}
												return (
													<tr key={expense.id} className={colorColumn}>
														<th scope="row">{expense.date}</th>
														<td>{expense.description}</td>
														<td>{expense.method_payment}</td>
														<td>{expense.amount}</td>
														<td>{expense.usd_amount}</td>
														<td>{expense.category}</td>
														<td>{expense.provider}</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer">
						<div className="container">
							<div className="row d-flex justify-content-center">
								<div className="col-md-1 col-xs-4">
									<button
										type="button w-100"
										className="btn btn-outline-warning whiht"
										onClick={cambiarTablaDatos}>
										{"<"}
									</button>
								</div>
								<div className="col-md-1 col-xs-4">
									<button
										type="button w-100"
										className="btn btn-outline-warning whiht"
										onClick={cambiarTablaDatos}>
										{">"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

TablaDatos.propTypes = {
	sales: PropTypes.array,
	expenses: PropTypes.array
};
