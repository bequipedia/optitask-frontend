import React, { useEffect, useState, useContext } from "react";
import "../../styles/login.scss";
import { Navbar } from "../component/navbar";
import imagen2 from "../../img/imagen2.png";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA GUARDAR DATOS DEL LOGIN
	//--------------------------------------------------------/
	//Objeto form data almacenará información
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//Hook boolean para mostrar o no contraseña
	const [shown, setShown] = useState(false);

	// //función que guarda los datos en el estado de registro a medida que son completados,
	// //cambian el estado inicial vacío a los valores
	const changeEmail = e => {
		setEmail(e.target.value);
	};
	const changePassword = e => {
		setPassword(e.target.value);
	};
	const checkLogin = async e => {
		if (email != "" && password != "") {
			let data_login = {
				email: email,
				password: password
			};
			let success = await actions.loginUser(data_login);
			if (success) {
				if (store.token != "") {
					console.log("usuario autenticado");
					history.push("/profile");
				} else {
					alert("usuario no registrado");
				}
			} else {
				alert("no se pueden dejar campos vacíos");
			}
		}
	};
	//función para controlar showpassword
	const switchShown = () => setShown(!shown);

	return (
		<div>
			<div className="form-login d-flex align-items-center">
				<div className="container bg-light">
					<div className="row justify-content-center">
						<div className="col-md-6 col-sm-12 p-5 text-center">
							<h1 className="mb-5 text-muted">Iniciar sesión</h1>
							<form>
								<div className="form-group">
									<input
										className="col-11 form-control bg-light border border-primary rounded-pill"
										placeholder="correo electrónico"
										name="email"
										pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
										onChange={changeEmail}
									/>
								</div>
								<div className="d-flex flex-col form-group">
									<input
										className="col-11 form-control bg-light border border-primary rounded-pill"
										placeholder="contraseña"
										type={shown ? "text" : "password"}
										name="password"
										pattern="(?=.*\d)(?=.*[a-z]).{8,}" //revisar criterios
										//solicita al menos 1 mayúscula, 1 minúscula, 1 caractér especial, 1 número
										onChange={changePassword}
									/>
									<div className="col-1 btn-light align-self-center" onClick={switchShown}>
										{shown ? <i className="far fa-eye" /> : <i className="far fa-eye-slash" />}
									</div>
								</div>
								<div className="row">
									<div className="col-auto">
										<div className="form-group">
											<div className="checkbox">
												<input
													type="checkbox"
													name="remember"
													className="mr-1"
													id="remember_me"
												/>
												<label htmlFor="remember_me">{"Recordarme"}</label>
											</div>
										</div>
									</div>
									<div className="col-auto ml-auto">
										<Link className="text-link-primary" to="#">
											{"¿Has olvidado tu contraseña?"}
										</Link>
									</div>
								</div>
								<div className="form-group">
									<button
										type="button"
										className="btn btn-outline-primary mt-5 btn-lg"
										onClick={checkLogin}>
										{"Entrar"}
									</button>
									<div className="mt-2">
										<Link to="#" className="text-link-primary">
											{"¿Eres nuevo? ¡Regístrate!"}
										</Link>
									</div>
								</div>
							</form>
						</div>
						<div className="col-md-6 col-sm-12 d-none d-md-block">
							<img src={imagen2} className="img-fluid" style={{ opacity: 0.7 }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
