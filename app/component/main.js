// la taille du SVG
/*var margin = {top: 10, right: 10, bottom: 10, left: 10},
var w = 1600;
var h = 540;*/

// génération des données.
//Dépendances
var dateUtil = require('./util/dateUtil');
var gen = require('./data/dataLoader');
var element = gen.generate(5);

//var config = require('./config');

//appeler la méthod pour calcule de la durée.
var serviceJob = require('./services/serviceJob');
var jobTime = serviceJob.getDurationByJob(element);
var monthScale = dateUtil.getMonthScale(jobTime.startDate, jobTime.endDate);

var taskItem = serviceJob.getServicesByJobId(element.id, element);

var dateAxisBuilder = require('./ui/dateAxis');
var dateScale = dateAxisBuilder.dateScale(monthScale);
var xAxis = dateAxisBuilder.buildDateAxis(dateScale);

var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

 var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var xAxisE1=svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate("+margin.left*5+"," + margin.top + ")")
    .call(xAxis);


// task axis

var taskAxisBuilder = require('./ui/taskAxis');
var taskScale = taskAxisBuilder.taskScale(taskItem);




// y Axis dans un groupe

var taskAxis = svg.append('g')
					.attr('class', 'task-axis')
					.attr('transform', 'translate('+margin.left+','+margin.top+')');

var taskTick = taskAxis.append('g')
		.selectAll('g')
		.data(taskItem)
		.enter()
		.append('g')
		.attr('transform', function(d) {
			return 'translate('+margin.left+','+taskScale(d.name)+')';
		})
		.append('line')
		.attr('class','task-tick')
		.attr('x1',margin.left)
		.attr('x2', width+margin.left+margin.right)
		.attr('fill','black')
		.call(dText());

function dText(){

var dd = function dd(selection){
	selection.each(function(taskItem){
		d3.select(this).append('text')
		.text(function(d) {
			return d.name;
		})
		.attr('text-anchor','end')
		.attr('transform','translate(0)')
		.style('fill', 'black');

		return dd;
	});
};

}

// add the lines:

