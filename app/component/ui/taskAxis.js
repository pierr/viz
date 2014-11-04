
var config = require('../config');

function taskScale(taskItem) {
	var yDomain =[];
	taskItem.forEach(function (event) {
		yDomain.push(event.name);
		//yRange.push( config.svg.height - 20 - (index) * 80);
	});
	var yTaskScale = d3.scale.ordinal()
		.domain(yDomain)
		.rangeRoundBands([0,config.svg.height - config.margin.top - config.margin.bottom],0.1);
	return yTaskScale;
}

function buildTaskAxis(taskScale)
{
	var taskAxis = d3.svg.axis()
					.scale(taskScale)
					.tickSize(-(config.svg.width - config.margin.left - config.margin.right))
					.orient('left');
	return taskAxis;

}

module.exports={
	taskScale: taskScale,
	taskAxis: buildTaskAxis
};

