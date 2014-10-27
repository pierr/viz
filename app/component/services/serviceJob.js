/*global _*/



function getJobsByProjectId(projectId){

}

/**
 * Charge un job par son identifiant.
 * @param  {string} jobId - L'identifiant d'un job.
 * @param {object} jobsData - Une liste de jobs.
 * @return {object}       - Le JSON correspondant à un service.
 */
function getJobById(jobId, jobsData) {
	if (!_.isNumber(jobId)) {
		throw new Error("L'identifiant du job doit être un string", jobId);
	}
	if (!jobsData || !_.isArray(jobsData)) {
		return undefined;
	}
	return _.findWhere(jobsData, {
		jobId: jobId
	});
}


function getServicesByJobId(jobId){

}

function getServiceById(serviceId, jobData){

}




function getEquipementById(serviceId, jobData){

}


function getPersonnesId(serviceId, jobData){

}


function getDurationByJob(jobData){

}

function getNombreEquipementByJob(jobData){

}

function getNombreServiceByJob(jobData){

}
function getNombrePersonnesByJob(jobData){

}



module.exports = {
	getJobById: getJobById
};