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
	//if job Id is a number
	if (!_.isNumber(jobId)) {
		throw new Error("L'identifiant du job doit être un string", jobId);
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


/*function getServicesByJobId(jobId){
	if(!_isNumber(jobId)){
		throw new Error("L'identifiant du job doit être un string", jobId);
	}


}*/

function getServiceById(serviceId, jobData) {
	if (!_.isNumber(serviceId)) {
		throw new Error("L'identifiant du job doit être un nombre", serviceId);
	}
	if (!jobData || !_.isArray(jobData.services)) {
		return undefined;
	}
	return _.findWhere(jobData.services, {
		jdtId: serviceId
	});

}



function getEquipementById(serviceId, jobData) {

}


function getPersonnesId(serviceId, jobData) {

}


function getDurationByJob(jobData) {

}

function getNombreEquipementByJob(jobData) {

}

function getNombreServiceByJob(jobData) {

}

function getNombrePersonnesByJob(jobData) {

}



module.exports = {
	getJobById: getJobById,
	getServiceById: getServiceById
};