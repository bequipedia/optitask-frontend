import React from "react";
import "../../styles/tasks.scss";

export const AllTasks = () => {
	return (
		<div>
			<div className="container ">
				<div className="row ">
					<div className="col-md-12 col-sm-12 col-sx-12 d-flex justify-content-center">
						<h4>Tasks</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-sm-12 col-sx-12 w-75 d-flex justify-content-center">
						<button type="button w-100" className="btn btn-outline-danger whiht">
							<i className="far fa-plus-square" />
						</button>
					</div>
				</div>
				<div className="row h-5">
					<div className="col-md-12 col-sm-12 col-sx-12  d-flex justify-content-center">
						<ul className="list-group list-group-flush list-wid overflow-scroll">
							<div className="list">
								<li className="list-group ">tarea</li>
							</div>
							<div className="list">
								<li className="list-group ">tarea</li>
							</div>
							<div className="list">
								<li className="list-group ">tarea</li>
							</div>
							<div className="list">
								<li className="list-group ">tarea</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
