import React from "react";
import "./../../styles/cardoption.scss";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export const CardReport = ({ incomes, expenses }) => {
	var history = useHistory();

	const setIncomesTotal = () => {
		let suma = 0;
		for (let i = 0; i < incomes.length; i++) {
			suma = suma + incomes[i].usd_amount;
		}
		return suma;
	};
	const setExpensesTotal = () => {
		let suma = 0;
		for (let i = 0; i < expenses.length; i++) {
			suma = suma + expenses[i].usd_amount;
		}
		return suma;
	};

	var ingresoTotal = setIncomesTotal();
	var egresoTotal = setExpensesTotal();
	var ganancia = ingresoTotal > egresoTotal ? ingresoTotal - egresoTotal : 0;
	var perdida = ingresoTotal < egresoTotal ? egresoTotal - ingresoTotal : 0;

	return (
		<div className="container-fluid mt-4">
			<div className="row">
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="card-option color-1 ">
						<div className="container-fluid">
							<div className="row d-flex justify-content-center flex-column">
								<div className="col-md-12 col-sm-12">{"Ingreso Total"}</div>
								<div className="col-md-12 col-sm-12 d-flex justify-content-center">
									<h3>{`$ ${ingresoTotal.toFixed(2)}`}</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 ">
					<div className="card-option color-2 ">
						<div className="container-fluid">
							<div className="row d-flex justify-content-center flex-column">
								<div className="col-md-12 col-sm-12">{"Egreso Total"}</div>
								<div className="col-md-12 col-sm-12 d-flex justify-content-center">
									<h3>{`$ ${egresoTotal.toFixed(2)}`}</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 ">
					<div className="card-option color-3">
						<div className="container-fluid">
							<div className="row d-flex justify-content-center flex-column">
								<div className="col-md-12 col-sm-12">{"Ganancia"}</div>
								<div className="col-md-12 col-sm-12 d-flex justify-content-center">
									<h3>{`$ ${ganancia.toFixed(2)}`}</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 ">
					<div className="card-option color-4">
						<div className="container-fluid">
							<div className="row d-flex justify-content-center flex-column">
								<div className="col-md-12 col-sm-12">{"Perdida"}</div>
								<div className="col-md-12 col-sm-12 d-flex justify-content-center">
									<h3>{`$ ${perdida.toFixed(2)}`}</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
CardReport.propTypes = {
	incomes: PropTypes.array,
	expenses: PropTypes.array
};
