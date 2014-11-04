// configuration du svg et margin
var config = require('./config');
// calcule du premier jour de la date début et le prochain mois de la date de fin
var dateUtil = require('./util/dateUtil');
// générer les données
var gen = require('./data/dataLoader');
var element = gen.generate(5);

//appeler la méthod pour calcule de la durée.
var serviceJob = require('./services/serviceJob');
var jobTime = serviceJob.getDurationByJob(element);

// on va obtenir deux dates
var dateUtil = dateUtil.getMonthScale(jobTime.startDate, jobTime.endDate);

// on va obtenir un tableau de toutes les tâches d'un élément.
var taskItem = serviceJob.getServicesByJobId(element.id, element);

// date Scale
var dateAxisBuilder = require('./ui/dateAxis');
var dateScale = dateAxisBuilder.dateScale(dateUtil);
var dateAxis = dateAxisBuilder.dateAxis(dateScale);

//Boutons.
var button = d3.select("body").append("button").attr('class', 'btn btn-default').attr('data-action', 'reload').text("Reload");
var buttonShift = d3.select("body").append("button").attr('class', 'btn btn-success').attr('data-action', 'shift').text("Shift");

// création d'un gantt en svg
var gantt = d3.select("body").append("svg")
    .attr("width", config.svg.width)
    .attr("height", config.svg.height)
    .append("g")
    .attr("transform", "translate(" + config.margin.left + "," + config.margin.top + ")");

// task axis
var taskAxisBuilder = require('./ui/taskAxis');
var taskScale = taskAxisBuilder.taskScale(taskItem);
var taskAxis = taskAxisBuilder.taskAxis(taskScale);

//création d'un task Axis
/*var yAxisE1 = gantt.append('g')
    .attr("class", "y axis")
    .call(taskAxis);*/

// création d'un date Axis
var xAxisE1 = gantt.append("g")
    .attr("class", "x axis")
    .call(dateAxis);



//var bars = require('./ui/bar');
var bars = gantt.append("g")
    .attr("class", "bar")
    .selectAll("rect")
    .data(taskItem)
    .enter()
    .append("rect")
    .attr("x", function(d) {
        return dateScale(d.tStartDate);
    })
    .attr("y", function(d) {
        return taskScale(d.name);
    })
    .attr("width", function(d) {
        return (dateScale(d.tEndDate) - dateScale(d.tStartDate));
    })
    .attr("height", 118)
    .attr("fill", "orange");

var taskName = [taskItem[0].name, taskItem[1].name,taskItem[2].name,taskItem[3].name,taskItem[4].name];
var lines = gantt.append('g')
                .attr("class", "y grid lines")
                .selectAll('g.lines')
                .data(taskName)
                .enter()
                .append('line')
                .attr('x1', 0)
                .attr('x2', config.svg.width-config.margin.right)
                .attr("y1", function(d){return taskScale(d);})
                .attr("y2", function(d){return taskScale(d);})
                .attr("stroke-width",2)
                .attr("stroke","black");
var texts = gantt.append("g")
                .attr("class", "label")
                .selectAll("text")
                .data(taskItem)
                .enter()
                .append("text")
                .text(function(d){return d.name ;})
                .attr("x", -35)
                .attr("y", function(d,i){return i*172;})
                .attr("fill","black");

d3.select('button[data-action="reload"]').on('click', function(event) {
    gantt.selectAll("rect").data(gen.generate(5).tasks)
        .attr("x", function(d) {
            return dateScale(d.tStartDate);
        })
        .attr("y", function(d) {
            return taskScale(d.name);
        })
        .attr("width", function(d) {
            return (dateScale(d.tEndDate) - dateScale(d.tStartDate));
        })
        .attr("height", 118)
        .attr("fill", "orange");
});

d3.select('button[data-action="shift"]').on('click', function(event) {
    var data = service.shiftOneWeek(taskItem);
    gantt.selectAll("rect").data(data)
        .attr("x", function(d) {
            return dateScale(d.tStartDate);
        })
        .attr("y", function(d) {
            return taskScale(d.name);
        })
        .attr("width", function(d) {
            return (dateScale(d.tEndDate) - dateScale(d.tStartDate));
        })
        .attr("height", 118)
        .attr("fill", "orange");
});
