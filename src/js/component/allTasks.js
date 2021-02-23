import React from "react";
import "../../styles/tasks.scss";
import PropTypes from "prop-types";
//import "./../../styles/groups.scss";

export const AllTasks = ({ tasks }) => {
	return (
		<div className="card ">
			<div className="card-header">
				<div className="container ">
					<div className="row ">
						<div className="col-md-12 col-sm-12 col-sx-12 d-flex justify-content-center">
							<h4>Tasks</h4>
						</div>
					</div>
				</div>
				<div className="card-body list-he card-task">
					<div className="row ">
						<div className="col-md-12 col-sm-12 col-sx-12  d-flex justify-content-center">
							<ul className="list-group list-group-flush list-wid overflow-scroll">
								{tasks.map((task, index) => {
									return (
										<li key={task.id} className="list-group my-2 ">
											<div className="card">
												<div className="card-header ">
													<p>{task.init_date}</p>
												</div>
												<div className="card-body">
													<div className="container">
														<div className="row d-flex align-items-center flex-column">
															<div className="col-lg-4 box col-md-4 col-sm-4 d-flex justify-content-start">
																<img
																	src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
																	style={{ width: 50 }}
																	className="rounded-circle"
																	alt="..."
																/>
															</div>
															<div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-start">
																<p>{task.label_task}</p>
															</div>
														</div>
													</div>
												</div>
												<div className="card-footer">
													<div className="col-sm-2">
														<button type="button" className="btn btn-danger">
															{"eliminar"}
														</button>
													</div>
												</div>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-sx-12 w-75 d-flex justify-content-center">
								<button type="button w-100" className="btn btn-outline-danger whiht">
									<i className="far fa-plus-square" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

AllTasks.propTypes = {
	tasks: PropTypes.array
};
