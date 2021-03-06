import React from "react";
import "./listaTasks.css";
import Task from "../Task/task";

function ListaTasks({ tasks, removeTask, updateTask }) {

	if (tasks.length > 0) {
		return (
			<div className="lista">
				<h2>Tarefas Cadastradas</h2>
				{tasks.map((task) => {
					return <Task key={task._id} task={task} removeTask={removeTask} updateTask={updateTask} />;
				})}
			</div>
		);
	} else {
		return (
			<div className="lista">
				<h2>Tarefas Cadastradas</h2>
				<p>Nenhuma tarefa foi cadastrada ainda!</p>
			</div>
		);
	}
}

export default ListaTasks;
