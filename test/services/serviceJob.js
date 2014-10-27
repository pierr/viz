//Requiert des dépendances.
var chai = require('chai');
global.chai = chai;
global.expect = chai.expect;
global._ = require('underscore');

//Exécution des tests.

//Dépendances du tets.
var serviceJob = require('../../app/component/services/serviceJob');
var data = require('../../app/component/data');

//Configuration
var config = {
	jobsData: data.jobs,
	jobId_ok: 1417,
	jobId_ko: 7878787,
	serviceId_ok: 9536,
	serviceId_ko: 11111
};


//console.log(_.findWhere(config.jobsData, {jobId: 1417}));
describe('# Service Job ', function() {
	//Test 1
	describe('## getJobById', function() {
		it('### Should return job with id ok', function() {
			var job = serviceJob.getJobById(config.jobId_ok, config.jobsData);
			expect(job).to.be.an('object');
			expect(job).to.have.property('jobId');
		});
	});
	//test 2
	describe('## getJobById', function() {
		it('### Should return nothing with no data', function() {
			var job = serviceJob.getJobById(config.jobId_ok, null);
			expect(job).to.be.an('undefined');
		});
	});

	//test 2
	describe('## getJobById', function() {
		it('### Should return nothing with id ko', function() {
			var job = serviceJob.getJobById(config.jobId_ko, config.jobsData);
			expect(job).to.be.an('undefined');
		});
	});
});


describe('# Service services ', function() {
	// Test 1
	describe('## getServiceById', function(){
		it('### Should return service with id ok ', function(){
		var service = serviceJob.getServiceById(config.serviceId_ok, config.jobsData);
		// Chai library
		expect(service).to.be.an('object');
		expect(service).to.have.property('jdtId');
		});
	});

	//Test 2
	/*describe('## getServiceById', function() {
		it('### Should return nothing with no data', function() {
			var service = serviceJob.getServiceById(config.serviceId_ok, null);
			expect(service).to.be.an('undefined');
		});
	});*/

});

