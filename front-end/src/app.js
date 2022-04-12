import React, { useEffect, useState } from "react";
import "./app.css";
import taskController from "./Controllers/taskController";
import Navbar from "./Components/Navbar/navbar";
import CriaTask from "./Components/CriaTask/criaTask";
import ListaTasks from "./Components/ListaTasks/listaTasks";

function App() {
	let [listaTasks, setListaTasks] = useState([]);

	useEffect(() => {
		const getAllTasks = async () => {
			let response = await taskController.returnAllTasks();
			await setListaTasks(response);
		}
		getAllTasks();
	}, []);

	const criaTask = (conteudo) => {
		const novaTask = {
			id: conteudo._id,
			conteudo: conteudo.content
		};
		setListaTasks((taskssExistentes) => {
			return [...taskssExistentes, novaTask];
		});
	};

	const removeTask = (taskId) => {
		let arrayTasks = [...listaTasks];
		let arrayTasksFiltrado = arrayTasks.filter((task) => task.id !== taskId);
		setListaTasks(arrayTasksFiltrado);
	};
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<CriaTask novaTask={criaTask} />
				<ListaTasks tasks={listaTasks} removeTask={removeTask} />
			</div>
		</div>
	);
}

export default App;
