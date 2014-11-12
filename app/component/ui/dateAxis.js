// la taille du SVG
/*var margin = {top: 10, right: 10, bottom: 10, left: 10},
var w = 1600;
var h = 540;*/

// génération des données.
//Dépendances

/*function dateScale(numMonth) {
	var xDateScale = d3.time.scale()
		.domain([numMonth[0], numMonth[numMonth.length - 1]])
		.range([0, config.svg.width]);
	return xDateScale;
}

function buildDateAxis(numMonth)
{
	var xScale = dateScale(numMonth);   // attention. le nom de variable doit être différent avec celle de function.
	var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient('top')
					.ticks(d3.time.months,1)
					.tickFormat(d3.time.format('%y-%b'))
					.tickSize(2)
					.tickPadding(10);
	return xAxis;

}*/


////////////////////////////////////////////nouveau scale

//Deopendencies
/**
 * Component configuration.
 * @type {object}
 */
var config = require('../config');

/**
 * Process the date
 * @param  {object} dateUtil - This object contains two properties firstMonthDay and nextMonthDay.
 * @return {object} Return a d3.js scale from the fristMonth and the newxMonth dates.
 */
function dateScale(dateUtil) {
	var xDateScale = d3.time.scale()
		.domain([dateUtil.firstMonthDay, dateUtil.nextMonthDay])
		.range([0, config.svg.width - config.margin.left - config.margin.right]);
	return xDateScale;
}

function getFormat() {
	return '%y-%b';
}

/**
 * [buildDateAxis description]
 * @param  {[type]} dateScale [description]
 * @return {[type]}           [description]
 */
function buildDateAxis(dateScale, options) {
	options = options || {
		orientation: 'top'
	};
	var tickSizeValue = config.svg.height - config.margin.top - config.margin.bottom;
	var xAxis = d3.svg.axis()
		.scale(dateScale)
		.orient(options.orientation)
		.ticks(d3.time.months, 1)
		.tickFormat(d3.time.format(getFormat()))
		.tickSize(-tickSizeValue) //Minus in order to draw from top to bottom.
		.tickPadding(10);
	return xAxis;

}

/**
 * Fonctions exposées par le module.
 * @type {Object}
 */
module.exports = {
	dateScale: dateScale,
	dateAxis: buildDateAxis
};