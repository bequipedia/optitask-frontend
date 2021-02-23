import { TRUE } from "node-sass";
import React, { useState } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Button, Modal } from "react-bootstrap";
//import { Login } from "./views/login";
// import "../../styles/navbarLogged.scss";
// import "../../img/full-logo.png";

export const TablaDatos = () => {
	return (
		<>
			{}
			<div className="card">
				<div className="d-flex justify-content-center align-items-center">
					<h3>Reporte de ventas</h3>
				</div>
				<div className="card-body">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<table className="table table-striped ">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">First</th>
											<th scope="col">Last</th>
											<th scope="col">Handle</th>
										</tr>
									</thead>
									<tbody>
										<tr className="table-success">
											<th scope="row">1</th>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
										</tr>
										<tr className="table-success">
											<th scope="row">3</th>
											<td>Larry</td>
											<td>the Bird</td>
											<td>@twitter</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="row d-flex justify-content-center">
							<div className="col-md-1 col-xs-4">
								<button type="button w-100" className="btn btn-outline-success whiht">
									{"<"}
								</button>
							</div>
							<div className="col-md-1 col-xs-4">
								<button type="button w-100" className="btn btn-outline-success whiht">
									{">"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
