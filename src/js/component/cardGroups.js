import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "./../../styles/groups.scss";
import "./../../styles/cardoption.scss";
import "../../styles/tasks.scss";
import { useHistory } from "react-router-dom";

export const CardGroups = ({ groups }) => {
	const { store, actions } = useContext(Context);
	var history = useHistory();

	return (
		<div className="container-fluid ">
			<h3>Tus Negocios</h3>
			<div className="row my-3 ">
				<div className="col-lg-3 col-md-6 col-sm-6 ">
					<div className="card-option color-1 " onClick={() => history.push("")}>
						<div className="container-fluid">
							<div className="row d-flex justify-content-around">
								<div className="col-xs-4 mr-2">
									<i className="fas fa-briefcase icon-height" />
								</div>
								<div className="col-xs-4  options-font">
									<h6>{"Añadir"}</h6>
									<h6>{"Negocio"}</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				{groups.map(group => {
					return (
						<div key={group.id} className="col-lg-3 col-md-6 col-sm-6 ">
							<div
								className="card-option color-4"
								onClick={() => {
									actions.getOneGroup(group.id);
									history.push("/group");
								}}>
								<div className="container-fluid">
									<div className="row d-flex justify-content-around">
										<div className="col-lg-2 box col-md-4 col-sm-4 ">
											<img
												src={group.url_image}
												style={{ width: 40 }}
												className="rounded-circle"
												alt="..."
											/>
										</div>
										<div className="col-xs-10 options-font">
											<h6>{group.group_name}</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

CardGroups.propTypes = {
	groups: PropTypes.object
};
