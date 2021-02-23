import React from "react";
import "./../../styles/cardoption.scss";

export const CardOptions = () => {
	return (
		<div className="container-fluid my-5">
			<div className="row">
				<div className="col-lg-3 col-md-3 col-sm-6">
					<div className="card-option color-1">
						<div className="container-fluid">
							<div className="row d-flex justify-content-around">
								<div className="col-xs-4 mr-2">
									<i className="fas fa-user-plus icon-height" />
								</div>
								<div className="col-xs-4  options-font">
									<h6>Anadir</h6>
									<h6>Colaborador</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 ">
					<div className="card-option color-2">
						<div className="container-fluid">
							<div className="row d-flex justify-content-around">
								<div className="col-xs-4 mr-2">
									<i className="fas fa-hand-holding-usd icon-height" />
								</div>
								<div className="col-xs-4  options-font">
									<h6>Anadir</h6>
									<h6>Venta</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 ">
					<div className="card-option color-3">
						<div className="container-fluid">
							<div className="row d-flex justify-content-around">
								<div className="col-xs-4 mr-2">
									<i className="fas fa-money-bill-wave icon-height" />
								</div>
								<div className="col-xs-4 options-font">
									<h6>Anadir</h6>
									<h6>Gasto</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 ">
					<div className="card-option color-4">
						<div className="container-fluid">
							<div className="row d-flex justify-content-around">
								<div className="col-xs-4 mr-2">
									<i className="fas fa-calculator icon-height" />
								</div>
								<div className="col-xs-4 options-font">
									<h6>Calc</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
