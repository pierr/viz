var svc = require('./services/serviceJob');
var data = require('./data');

svc.getJobById(1417, data.jobs);


var w = 960;
var h = 540;

var projectData = require('./data');


var numJob = projectData.jobs.length;          // number of the job
var numService = projectData.jobs[0].services.length;              //number of services in the first job
var numLine= 1+numJob+1+numService;

var item = [];

// define time url.format
var day = d3.time.format("%w");
var week = d3.time.format("%W");
var month = d3.time.format("%b");
var year = d3.format("%Y");


var jobDate = [projectData.jobs[0].startDate, projectData.jobs[0].endDate];

var chart = d3.select("body")
			.selectAll("svg")
			.data()
			.attr("width", w)
			.attr("height",h);
var rect = chart.selectAll("rect")
				.data(function(d) { return d3.time.months(new Date)})

