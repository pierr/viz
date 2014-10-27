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
	jobId_ko: 7878787
};


//console.log(_.findWhere(config.jobsData, {jobId: 1417}));
describe('# Service Job ', function() {
	//Test 1
	describe('## getJobById', function() {
		it('### Should return job wit th id ok', function() {
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