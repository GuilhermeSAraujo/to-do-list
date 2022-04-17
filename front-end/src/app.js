import React, { useState, useEffect } from "react";
import "./app.css";
import Navbar from "./Components/Navbar/navbar";
import CriaTask from "./Components/CriaTask/criaTask";
import ListaTasks from "./Components/ListaTasks/listaTasks";
import taskController from "./Controllers/taskController";


function App() {
	let [tasks, setListaTasks] = useState([]);

	const removeTask = async (taskId) => {
		await taskController.removeTask(taskId);
		let novaListaTask = [];
		tasks.forEach((task) => {
			if (task._id !== taskId) {
				novaListaTask.push(task);
			}
		});
		setListaTasks(novaListaTask);
	}

	const createTask = async (task) => {
		const idNewTask = await taskController.createTask(task);
		task._id = idNewTask;
		setListaTasks((oldTaskList) => [...oldTaskList, task]);
	}

	const updateTask = async (task) => {
		let newTaskContent = {};
		let updatedTasks = tasks.map((taskItem) => {
			if (taskItem._id === task._id) {
				newTaskContent = {
					content: task.content,
					_id: task._id,
					date: taskItem.date
				};
				return newTaskContent;
			} else {
				return taskItem;
			}
		})
		setListaTasks(updatedTasks);
		await taskController.updateTask(newTaskContent);
	}

	useEffect(() => {
		const fetchTasks = async () => {
			const data = await taskController.returnAllTasks();
			setListaTasks(data);
		}
		fetchTasks();
	}, []);

	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<CriaTask createTask={createTask} />
				<ListaTasks tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
			</div>
		</div>
	);
}

export default App;
