function generateTask(elementId) {
	return {
		parentId: elementId,
		id: faker.random.number(),
		name: faker.name.lastName(),
		label: faker.company.companyName()
	};
}

function getTasks(elementId, nb) {
	var tasks = [];
	for (var i = 0; i < nb; i++) {
		tasks.push(generateTask(elementId));
	}
	return tasks;
}


function generateElement(nbTasks) {
	nbTasks = nbTasks || 10;
	var elementId = faker.random.number();
	var name = faker.name.lastName();
	var label = faker.company.companyName();
	var startDate = faker.date.past();
	var endDate = faker.date.future();

	return {
		id: elementId,
		name: name,
		label: label,
		startDate: startDate,
		endDate: endDate,
		tasks: getTasks(elementId, nbTasks)
	};
}


module.exports = {
	generate: generateElement,
};