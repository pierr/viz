var w = 960;
var h = 540;

var projectData = require('./data');

var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height",h);
var numJob = projectData.jobs.length;
var numService = projectData.jobs[0].services.length;

alert("job number:"+numJob);
alert("service number: "+numService);

