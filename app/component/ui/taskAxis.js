var config = require('../config');
var margin = config.margin;


function taskScale(taskItem) {
	var yDomain = [];
	taskItem.forEach(function(event) {
		yDomain.push(event.name);
	});
	var yTaskScale = d3.scale.ordinal()
		.domain(yDomain)
		.rangeBands([0, config.svg.height - margin.top - margin.bottom]); //La hauteur en pixel est
	return yTaskScale;

}

function buildTaskAxis(taskScale) {
	var taskAxis = d3.svg.axis()
		.scale(taskScale) //echelle.
		//.tickSize(-(config.svg.width - config.margin.left - margin.right)) //Largeur de la ligne des abscisses.
		.orient('left');
	return taskAxis;

}

module.exports = {
	taskScale: taskScale,
	taskAxis: buildTaskAxis
};


