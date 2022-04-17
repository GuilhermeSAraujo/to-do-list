const returnAllTasks = async () => {
	let allTasksList = await fetch("http://localhost:3333/task");
	allTasksList = await allTasksList.json();
	return allTasksList;
}

const removeTask = async (taskId) => {
	let url = `http://localhost:3333/task?id=${taskId}`;
	return await fetch(url, { method: "DELETE" });
}

const createTask = async (taskData) => {
	let url = `http://localhost:3333/task`;
	let createReturn = await fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(taskData)
	});
	createReturn = await createReturn.json();
	return createReturn.id;
}

const updateTask = async (newTaskData) => {
	console.log(newTaskData);
	let url = `http://localhost:3333/task`;
	let updateReturn = await fetch(url, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newTaskData)
	});
	updateReturn = await updateReturn.json();
	return updateReturn.id;
}

module.exports = {
	returnAllTasks: returnAllTasks,
	removeTask: removeTask,
	createTask: createTask,
	updateTask: updateTask
}