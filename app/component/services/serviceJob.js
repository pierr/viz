/*global _*/



function getJobsByProjectId(projectId) {

}

/**
 * Charge un job par son identifiant.
 * @param  {string} jobId - L'identifiant d'un job.
 * @param {object} jobsData - Une liste de jobs.
 * @return {object}       - Le JSON correspondant à un service.
 */
function getJobById(jobId, jobsData) {
	//
	//if job Id is a number
	if (!_.isNumber(jobId)) {
		throw new Error("L'identifiant du job doit être un nombre", jobId);
	}
	// if jobsData is null or is not array
	if (!jobsData || !_.isArray(jobsData)) {
		return undefined;
	}
	// underscore method   http://underscorejs.org/ 
	return _.findWhere(jobsData, {
		jobId: jobId
	});


}


function getServicesByJobId(jobId, jobsData){
	if(!_.isNumber(jobId)){
		throw new Error("L'identifiant du job doit être un nombre", jobId);
	}
	if (!jobsData) {
		return undefined;
	}
	var jobData = getJobById(jobId,jobsData);
	if(jobData === undefined) {
		return null;
	}
	else{
	return jobData.services;
	}

}

function getServiceById(serviceId, jobData) {
	if (!_.isNumber(serviceId)) {   // serviceId is not a number
		throw new Error("L'identifiant du job doit être un nombre", serviceId);
	}
	if (!jobData || !_.isArray(jobData.services)) {
		return undefined;
	}
	return _.findWhere(jobData.services, {
		jdtId: serviceId
	});

}


function getDurationByJob(jobData) {
	if(!jobData)
	{
		return undefined;
	}
	var duration = [jobData.startDate, jobData.endDate];
	return duration;
}


function getNombreServiceByJob(jobData) {
	if(!jobData)
	{
		return undefined;
	}
	var serviceNum = jobData.services.length;
	console.log(serviceNum);
	return serviceNum;
}



module.exports = {
	getJobById: getJobById,
	getServiceById: getServiceById,
	getServicesByJobId: getServicesByJobId,
	getDurationByJob: getDurationByJob,
	getNombreServiceByJob: getNombreServiceByJob
};