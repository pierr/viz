function generateTask(elementId,startDate,endDate) {

	var tStartDate = faker.date.between(startDate,endDate);
	var tEndDate = faker.date.between(tStartDate, endDate);

	return {
		parentId: elementId,
		id: faker.random.number(),
		name: faker.name.lastName(),
		label: faker.company.companyName(),
		tStartDate: tStartDate,
		tEndDate: tEndDate
	};
}

function getTasks(elementId, nb, startDate, endDate) {
	var tasks = [];
	for (var i = 0; i < nb; i++) {
		tasks.push(generateTask(elementId,startDate,endDate));
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
		tasks: getTasks(elementId, nbTasks, startDate,endDate)
	};
}


module.exports = {
	generate: generateElement,
};