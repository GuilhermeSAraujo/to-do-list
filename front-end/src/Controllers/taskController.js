const returnAllTasks = async () => {
	let allTasksList = await fetch("http://localhost:3333/task");
	allTasksList = await allTasksList.json();
	return allTasksList
}

module.exports = {
	returnAllTasks: returnAllTasks
}