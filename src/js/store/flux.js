const BASE_URL = "http://localhost:8080";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			countries: [],
			token: "",
			datefull_now: "",
			hour_now: "",
			rates_to_dolar: [],
			sidebar: false,
			userGroups: [], //lista de todos los grupos de un usuario
			rates: [],
			incomesUser: [], //Lista de todos los incomes de un usuario
			expensesUser: [], //Lista de todos los expenses de un usuario
			incomesGroup: [], //Lista de todos los incomes de un grupo
			expensesGroup: [], //Lista de todos los expenses de un grupo
			logOutConfirmation: false,
			oneGroup: {}, //objeto de los datos de un grupo en especifico
			GroupUsers: [], //lista de todos los usuarios de un grupo
			tasksGroup: [], //lista de tareas de un grupo
			tasksUser: [], //lista de tareas de un usuario
			//  desde aqui se debera realizar los estado y crear un useEffect para colocar
			//  a funcionar los drop down list del fromulario de registro de Ingreso y egresos

			paymentForms: [
				{
					payment: "Efectivo",
					paymentMethod: ["Moneda Fiduciaria"]
				},
				{
					payment: "Cryptomonedas",
					paymentMethod: ["Bitcoin"]
				},
				{
					payment: "Punto de venta",
					paymentMethod: ["Nacional", "Internacional"]
				},
				{
					payment: "P2P",
					paymentMethod: ["Nacional", "Internacional"]
				},
				{
					payment: "Plataformas digitales",
					paymentMethod: ["PayPal", "AirTM", "Giftcard"]
				},
				{
					payment: "Otras formas de pago",
					paymentMethod: ["Intercambio comercial"]
				}
			]
		},
		actions: {
			//Función para cambiar sidebar
			showSidebar: () => {
				const store = getStore();
				//setStore({ sidebar: !store.sidebar });
				store.sidebar = !store.sidebar;
			},

			//Función para consultar en el endpoint los tipos de cambio actualizados rate_to_dolar
			getRates: async () => {
				try {
					let urlRates = BASE_URL + "/rates";
					let response = await fetch(urlRates);
					let responseObject = await response.json();
					setStore({ rates: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},

			loginUser: async (email, password) => {
				let url = BASE_URL + "/login";
				let actions = getActions();
				let store = getStore();
				let login_data = {
					email: email,
					password: password
				};
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(login_data)
				});
				let information = await response.json();
				console.log(information);
				if (response.ok) {
					setStore({ user: information, token: information.jwt, sidebar: true });
					sessionStorage.setItem("token", information.jwt);
					sessionStorage.setItem("id", information.id.toString());
					sessionStorage.setItem("logOutConfirmation", JSON.stringify(true));
					sessionStorage.setItem("user", JSON.stringify(information));
					console.log(store.user.id);
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			check: async () => {
				let url = BASE_URL + "/seguro";
				let store = getStore();
				let customHeader = new Headers({
					Authorization: "Bearer " + store.user.jwt
				});
				let response = await fetch(url, {
					method: "GET",
					headers: customHeader
				});
				if (response.ok) {
					return true;
				} else {
					setStore({ user: "" });
					return false;
				}
			},
			//Permite guardar en el navegador el token cuando se refresca la pagina
			checking: () => {
				if (sessionStorage.getItem("logOutConfirmation")) {
					setStore({
						user: JSON.parse(sessionStorage.getItem("user")),
						logOutConfirmation: true,
						token: sessionStorage.getItem("token"),
						sidebar: true
					});
				}
			},
			checkingGroup: () => {
				if (sessionStorage.getItem("logOutConfirmation")) {
					setStore({
						oneGroup: JSON.parse(sessionStorage.getItem("group"))
					});
				}
			},
			//permite cerrar sesion
			logOut: () => {
				sessionStorage.setItem("token", "");
				sessionStorage.setItem("name", "");
				sessionStorage.setItem("id", "");
				sessionStorage.setItem("logOutConfirmation", "");
				sessionStorage.setItem("user", "");
				setStore({ logOutConfirmation: false, user: {}, token: "", sidebar: false });
			},

			// Registrar un usuario
			addUser: async data_signup => {
				console.log(data_signup);
				let url = BASE_URL + "/users";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_signup) //revisar cómo se llama a estado singup de componente signup.js
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},

			//Consultar identidad de un usuario
			// getUserID: async store.token => {
			// 	try{
			// 		let url = BASE_URL + "/seguro";
			// 		let response = await fetch(url, {
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				"Authorization": Bearer store.token
			// 			}
			// 		})
			// 		let responseObject = await response.json();
			// 			setStore({ countries: responseObject });
			// 		} catch (error) {
			// 			console.log(error);
			// 		}
			// 	},

			//Registrar Incomes
			addIncome: async data_income => {
				console.log(data_income);
				let url = BASE_URL + "/incomes";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_income) //revisar cómo se llama a estado singup de componente signup.js
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},

			//Registrar Expenses
			addExpense: async data_expense => {
				console.log(data_expense);
				let url = BASE_URL + "/expenses";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_expense) //revisar cómo se llama a estado singup de componente signup.js
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			//Consulta todos los grupos de un usuario especifico
			getUserGroups: async id_user => {
				try {
					let url = BASE_URL + "/users/" + id_user + "/groups";
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({ userGroups: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},
			//Crea un grupo
			addGroup: async data_group => {
				console.log(data_group);
				let url = BASE_URL + "/groups";
				let actions = getActions();
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_group)
				});
				if (response.ok) {
					let group_create = await response.json();
					console.log(group_create);
					actions.addPersonGroup({
						user_id: group_create.user_admin_id,
						group_id: group_create.id
					});
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			//Creamos la relacion grupo, usuario,. Esto se debe hacer cada vez que se crea un grupo
			//Debemos aplicar esta funcion cuando se quiere agregar un usuario a un grupo
			addPersonGroup: async id_user_group => {
				console.log(id_user_group);
				let url = BASE_URL + "/persongroup";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(id_user_group)
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			//Consultar los datos de un grupo
			getOneGroup: async id_group => {
				try {
					let url = BASE_URL + "/groups/" + id_group;
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({ oneGroup: responseObject });
					console.log(responseObject);
					sessionStorage.setItem("group", JSON.stringify(responseObject));
				} catch (error) {
					console.log(error);
				}
			},
			//Esta funcion permite editar un grupo
			editGroup: async (data_group, id_group) => {
				console.log(data_group);
				let url = BASE_URL + "/groups" + id_group;
				let actions = getActions();
				let response = await fetch(url, {
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_group)
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			//funcion para editar la propiedades de user_name,country y url_image de un usuario
			editUser: async (data_user, id_user) => {
				console.log(data_user);
				let url = BASE_URL + "/users" + id_user;
				let actions = getActions();
				let response = await fetch(url, {
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_group)
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			//Consultar todos los usuarios de un grupo
			getGroupUsers: async id_group => {
				try {
					let url = BASE_URL + "/users/" + "/groups" + id_group;
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({ GroupUsers: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},
			//Consultar todos las tareas de un grupo
			getTasksGroup: async id_group => {
				try {
					let url = BASE_URL + "/groups/" + id_group + "/tasks";
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({ tasksGroup: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},
			//Consultar todas las tareas de un usuario
			getTasksUser: async id_user => {
				try {
					let url = BASE_URL + "/users/" + id_user + "/tasks";
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({ tasksUser: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},
			//crear una tarea
			addTask: async data_task => {
				console.log(data_task);
				let url = BASE_URL + "/tasks";

				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_task)
				});
				if (response.ok) {
					let task_create = await response.json();
					console.log(task_create);

					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			//Borrar una tarea
			deleteTask: async id => {
				let url = BASE_URL + "/tasks/" + id;
				let actions = getActions();
				let response = await fetch(url, {
					method: "DELETE"
				});
				if (response.ok) {
					await actions.getTasksUser();
					await actions.getTasksGroup();
					return true;
				} else {
					console.log(response.status);
					return false;
				}
			},
			//Consultar todos los incomes de un grupo
			getIncomesGroup: async id_group => {
				try {
					let url = BASE_URL + "/groups/" + id_group + "/incomes";
					let response = await fetch(url);
					let body = await response.json();

					setStore({ incomesGroup: body });
					console.log(body);
				} catch (error) {
					console.log(error);
				}
			},
			//Consultar todos los incomes de un usuario
			getIncomesUser: async id_user => {
				try {
					let url = BASE_URL + "/users/" + id_user + "/incomes";
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({ incomesUser: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},
			//Consultar los gastos de un usuario
			getExpensesUser: async id_user => {
				try {
					let url = BASE_URL + "/users/" + id_user + "/expenses";
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({ expensesUser: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},
			//Consultar todos los incomes de un grupo
			getExpensesGroup: async id_group => {
				try {
					let url = BASE_URL + "/groups/" + id_group + "/expenses";
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({ expensesGroup: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},

			//Consulta API Countries REST
			getCountries: async () => {
				try {
					let urlAPICountry = "https://restcountries.eu/rest/v2/all";
					let response = await fetch(urlAPICountry);
					let responseObject = await response.json();
					setStore({ countries: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			},

			//Consulta fecha y hora actual
			getTimeNow: () => {
				let now = new Date();
				let dateNow = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
				let hourNow = now.getHours() + ":" + now.getMinutes();
				let currentTime = dateNow + " " + hourNow;
				setStore({ datefull_now: currentTime, hour_now: hourNow });
			}
		}
	};
};
export default getState;

//	if (hour_now_str == "09:30" || hour_now_str == "16:57")
