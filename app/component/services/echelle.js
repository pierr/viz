// la taille du SVG
/*var margin = {top: 10, right: 10, bottom: 10, left: 10},
var w = 1600;
var h = 540;*/

// génération des données.

var gen = require('../data/dataLoader');
var element = gen.generate(5);

//appeler la méthod pour calcule de la durée.
var serviceJob = require('./serviceJob');
var duration = serviceJob.getDurationByJob(element);

// obtenir le premier jour de ce mois
var monthFirstDay = new Date(duration[0].getFullYear(),duration[0].getMonth(),1);

// numMonth is an array whose value is the first day of each month
var numMonth;
if(monthFirstDay.getTime()!=duration[0].getTime())
{
	numMonth = d3.time.months(monthFirstDay,duration[1],1);
}
else
{
	numMonth= d3.time.months(duration[0],duration[1],1);
}
// calculer le trimestre
var quarter = function(date)
{
	var quaYear = new Array();
	for(var i =0; i<date.length; i++)
	{
		if(($.inArray(date[i].getMonth(), [0,1,2]))!= -1)
		{
			quaYear.push(date[i].getFullYear()+"-Q1");
		}
		if(($.inArray(date[i].getMonth(),[3,4,5]))!= -1)
		{
			quaYear.push(date[i].getFullYear()+"-Q2");
		}
		if(($.inArray(date[i].getMonth(),[6,7,8]))!= -1)
		{
			quaYear.push(date[i].getFullYear()+"-Q3");
		}
		if(($.inArray(date[i].getMonth(), [9,10,11]))!= -1)
		{
			quaYear.push(date[i].getFullYear()+"-Q4");
		}
	}
	return quaYear;
};

// obtenir le tableau de trimestre pour chaque mois
var quarter=quarter(numMonth);


/*var xScale = d3.scale.ordinal()
				.domain(d3.range(numMonth.length))
				.rangeRoundBands([0, w],0.05);
var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

var monthName = d3.time.format("%b");
svg.selectAll("rect")
	.data(numMonth)
	.enter()
	.append("rect")
	.attr("x", function(d,i){ return xScale(i);})
	.attr("y", h*0.05)
	.attr("width", xScale.rangeBand())
	.attr("height", h)
	.attr("fill", "rgb(245,245,245)");  // chercher les valeurs de CSS couleur

	svg.selectAll("text")
	.data(numMonth)
	.enter()
	.append("text")
	.text(function(d) { return monthName(d);})
	.attr("x", function(d,i){return i * w/numMonth.length+0.4*(w/numMonth.length);})
	.attr("y",h*0.03)
	.attr("fill", "black");



svg.selectAll("text")
	.data(quarter)
	.enter()
	.append("text")
	.text(function(d){ return d;})
	.attr("x", function(d,i){return i * w/quarter.length+0.4*(w/quarter.length);})
	.attr("y",h*0.5)
	.attr("fill", "black");*/





///////////////////////////////////////////////////////////
/*var xScale = d3.time.scale();
var yScale =d3.scale.ordinal();

xScale.range([0, w])
		.domain([numMonth[0], numMonth[numMonth.length-1]]);

var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient(bottom)
				.tickFormat()*/

var customTimeFormat = d3.time.format.multi([
  ["%B", function(d) { return d.getMonth(); }],
  ["%Y", function() { return true; }]
]);

var margin = {top: 250, right: 40, bottom: 250, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.time.scale()
    .domain([duration[0], duration[duration.length-1]])
    .range([0, width]);

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(customTimeFormat);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

