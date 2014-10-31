
var config = require('../config');

function taskScale(taskItem) {
	var yDomain =[];
	var yRange = [];
	taskItem.forEach(function (event, index) {
		yDomain.push(event.name);
		yRange.push(index * (config.svg.height/5));
	});
	var yTaskScale = d3.scale.ordinal()
		.domain(yDomain)
		.range(yRange);
	return yTaskScale;
}

module.exports={
	taskScale: taskScale
};

