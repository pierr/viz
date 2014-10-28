function getTask(elementId){
	return {
		parentId: elementId,
		id: faker.random.number(),
		label: ""


	}
}

function getTasks(elementId, nb){
	var tasks = [];
	for(var i = 0; i< nb; i++){
		tasks.push(getTask(elementId));
	}
	return tasks;
}


function getElement(nbTasks){
	nbTasks = nbTasks ||10;
	var elementId = faker.random.number();
	return {
		id: elementId
		tasks: getTasks(elementId,nbTasks)
	};
}