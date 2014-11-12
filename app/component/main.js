// configuration du svg et margin
var config = require('./config');
// calcule du premier jour de la date début et le prochain mois de la date de fin
var dateUtil = require('./util/dateUtil');
// générer les données
//var gen = require('./data/dataLoader');
//var element = gen.generate(5);


/*//load the static data
var element = require('./data/dataLoaderStatic');
*/


// load the server data; Here there is a little problem: the start and end date is type of "string", not "date".
var dataLoaderServer = require('./data/dataLoaderServer');
var element = dataLoaderServer.dataRequest();
var change = require('./util/changeSToD');

//call the function "getDurationByJob" to get the date value of the job
var serviceJob = require('./services/serviceJob');
var jobTime = serviceJob.getDurationByJob(element);

// after calling the dateUtil method, we will get two dates: the first day of the auctual start month, and the next month day of the end date.
var dateUtil = dateUtil.getMonthScale(jobTime.startDate, jobTime.endDate);

// on va obtenir un tableau de toutes les tâches d'un élément.
var taskItem = serviceJob.getServicesByJobId(element.id, element);

// date Scale
var dateAxisBuilder = require('./ui/dateAxis');
var dateScale = dateAxisBuilder.dateScale(dateUtil);
var dateAxis = dateAxisBuilder.dateAxis(dateScale);

//Boutons.
var buttonShift = d3.select("body").append("button").attr('class', 'btn btn-success').attr('data-action', 'shift').text("Shift");

// create an SVG gantt
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

// create a date axis
var xAxisE1 = gantt.append("g")
    .attr("class", "x axis")
    .call(dateAxis);

// get the name of every task item.
var taskName = [];
for(var i =0 ; i<taskItem.length;i++)
{
    taskName.push(taskItem[i].name);
}
var lines = gantt.append('g')
                .attr("class", "y grid lines")
                .selectAll('g.lines')
                .data(taskName)
                .enter()
                .append('line')
                .attr('x1', 0)
                .attr('x2', config.svg.width-config.margin.right - config.margin.left)
                .attr("y1", function(d){return taskScale(d)+taskScale.rangeBand();})
                .attr("y2", function(d){return taskScale(d)+taskScale.rangeBand();})
                .attr("stroke-width",1)
                .attr("stroke","#A8A8A8");

var texts = gantt.append("g")
                .attr("class", "label")
                .selectAll("text")
                .data(taskItem)
                .enter()
                .append("text")
                .text(function(d){return d.name ;})
                .attr("x", -0.05*config.margin.left)
                .attr("y", function(d,i){return (i * taskScale.rangeBand() + 0.9 * taskScale.rangeBand());})   // the y location for the label is the width of the bands + offset
                .attr("font-size", "15px")
                .attr("text-anchor", "end")
                .attr("fill","black");




    // drag operation
    var drag = d3.behavior.drag()
            /*.origin(function(d) {
                return {
                    x:dateScale(change.changeStringToDate(d.tStartDate)),
                    y:taskScale(d.name) + 0.05 * taskScale.rangeBand()
                };
            })*/
            .origin(function()
            {
                var t = d3.select(this);
                return { x: t.attr('x'),
                         y: t.attr('y')
                       };
            })
            .on("dragstart", dragStart)
            .on("drag", dragMove)
            .on("dragend", dragEnd);
    function dragStart(d)
    {
        console.log("step 1");
        d3.event.sourceEvent.stopPropagation();
        d3.select(this)
            .attr("fill", "#F7DFC7");
    }
    function dragMove(d) {
        console.log("step 2");
        console.log("test :" + d3.event.dx);
        d3.select(this)
        .attr("x", function(d) { return d3.mouse(this);});}
    function dragEnd(d)
    {
        console.log("step 3");
        d3.select(this)
            .attr("fill", "orange");
    }
//var bars = require('./ui/bar');
var bars = gantt.append("g")
    .attr("class", "bar")
    .selectAll("rect")
    .data(taskItem)
    .enter()
    .append("rect")
    .attr("x", function(d) {
        return dateScale(change.changeStringToDate(d.tStartDate));
    })
    .attr("y", function(d) {
        return taskScale(d.name) + 0.05 * taskScale.rangeBand();
    })
    .attr("width", function(d) {
        return (dateScale(change.changeStringToDate(d.tEndDate)) - dateScale(change.changeStringToDate(d.tStartDate)));
    })
    .attr("height", taskScale.rangeBand()*0.9)
    .attr("fill", "orange")
    .on("mouseover", function(d){
        var xPosition = dateScale(change.changeStringToDate(d.tEndDate));
        var yPosition = parseFloat(d3.select(this).attr("y")) + taskScale.rangeBand();
        d3.select('#tooltip')
        .style("left",xPosition +"px")
        .style("top",yPosition+"px")
        .select('#value')
        .html(
                    "id: "+d.id+"<br/>"+
                    "name:" +d.name+"<br/>"+
                    "start date: " +d.tStartDate+"</br>"+
                    "end date: "+d.tEndDate
                    );

        //show the tool tip
        d3.select('#tooltip').classed("hidden",false);
            })
    .on("mouseout",function(){
        //hide the tooltip
        d3.select('#tooltip').classed("hidden",true);
    })
    .call(drag);


// update the JSON element
// shift
// delete
// add
var services = require('./services/shiftDate');
d3.select('button[data-action="shift"]').on('click', function(event) {
    /*// advance or pushed back 5 days
    var newElement = services.shiftDate(element, 5);*/
    // send an Ajax request to change the data
    /*$.ajax(){
        url: 'http://localhost:7777/job',
        type:'  POST',
        dataType: 'JSON',
        cache: false,
        timeOut: 1000,
        async:false,                     // here is a synchronous request.
        success: function(data)
        {
            element = data;
        },
        error: function(){
            alert("error!");
        }
    };*/
    gantt.selectAll("rect").data(newElement.tasks)
        .attr("x", function(d) {
            return dateScale(d.tStartDate);
        })
        .attr("y", function(d) {
            return taskScale(d.name) + 0.05* taskScale.rangeBand();
        })
        .attr("width", function(d) {
            return (dateScale(d.tEndDate) - dateScale(d.tStartDate));
        })
        .attr("height", taskScale.rangeBand()*0.9)
        .attr("fill", "orange");
});
