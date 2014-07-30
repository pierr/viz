 var projectData = require('../data/project');
 var tasks = [];
 var taskNames = [];
 //Data of a project.
 var project = {
		 "startDate": new Date(projectData.startDate),
		  "endDate": new Date(projectData.endDate),
		  "taskName": projectData.name,
		  "status": "project",
		  "id":  projectData.prjId
 };
 tasks.push(project);
 taskNames.push(projectData.name);
 
 for(var jobId in projectData.jobs){
	 var job = projectData.jobs[jobId];
	 tasks.push({
		 	"startDate": new Date(job.startDate),
		 	"endDate": new Date(job.endDate),
		 	"taskName": job.label,
		 	"status": "job",
		 	"id":  job.jobId
	 });
	 taskNames.push(job.label);
	 for(var svcId in job.services){
		 var svc = job.services[svcId];
		 tasks.push({
			 	"startDate": new Date(svc.startDate),
			 	"endDate": new Date(svc.endDate),
			 	"taskName": svc.label,
			 	"status": "service",
			 	"id":  svc.jdtId
		 });
		 taskNames.push(svc.label);
		 
	 } 
 }
 
 

//Association status / css class.
var taskStatus  ={
	    "project": "bar-project",
	    "job": "bar-job",
	    "service": "bar-service",
	    "none": "bar-none"
};



var gantt = d3.gantt()
			  .tickFormat('%Y')
			  .taskTypes(taskNames)
			  .taskStatus(taskStatus);
//Render the gant into its container.
gantt(tasks, "#gantt_project");
