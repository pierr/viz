// la taille du SVG
/*var margin = {top: 10, right: 10, bottom: 10, left: 10},
var w = 1600;
var h = 540;*/

// génération des données.
//Dépendances
var config = require('../config');
function dateScale(numMonth) {
	var xDateScale = d3.time.scale()
		.domain([numMonth[0], numMonth[numMonth.length - 1]])
		.range([0, config.svg.width]);
	return xDateScale;
}

function buildDateAxis(dateScale)
{
	var xAxis = d3.svg.axis()
					.scale(dateScale)
					.orient('top')
					.ticks(d3.time.months,1)
					.tickFormat(d3.time.format('%y %b'))
					.tickSize(0);
	return xAxis;

}

module.exports = {
	dateScale: dateScale,
	buildDateAxis: buildDateAxis
};