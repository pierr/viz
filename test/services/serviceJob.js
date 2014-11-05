//Requiert des dépendances.
var chai = require('chai');
global.chai = chai;
global.expect = chai.expect;
global._ = require('underscore');
global.faker = require('faker');
//Exécution des tests.

//Dépendances du tets.
var serviceJob = require('../../app/component/services/serviceJob');

var generator = require('../../app/component/data/dataLoader');
var element = generator.generate(5);

//Configuration
var config = {
	jobData: element,
	jobId_ok: element.id,
	jobId_ko: 7878787,
	serviceId_ok: 9536,
	serviceId_ko: 11111
};



/*describe('# Service Job ', function() {
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

	//test 3
	describe('## getJobById', function() {
		it('### Should return nothing with id ko', function() {
			var job = serviceJob.getJobById(config.jobId_ko, config.jobsData);
			expect(job).to.be.an('undefined');
		});
	});
});

/////////////////////////////////////////////////////////
describe('# Service getServices', function(){
	describe('## getServicesByJobId', function(){
		it('### Should return all the servives with the same jobId', function(){
			var services = serviceJob.getServicesByJobId(config.jobId_ok, config.jobsData);
			expect(services).to.be.an('array');
		});
	});
	describe('## getServicesByJobId',function(){
		it('### Should return nothing with no data', function(){
			var services = serviceJob.getServicesByJobId(config.jobId_ok, null);
			expect(services).to.be.an('undefined');
		});
	});
	describe('## getServicesByJobId',function(){
		it('### Should return nothing with ko id',function(){
			var services = serviceJob.getServicesByJobId(config.jobId_ko, config.jobsData);
			expect(services).to.be.an('null');
		});
	});
});
//////////////////////////////////////////////////////////
describe('# Service services ', function() {
	// Test 1
	describe('## getServiceById', function(){
		it('### Should return service with id ok ', function(){
		var job = serviceJob.getJobById(config.jobId_ok, config.jobsData);
		var service = serviceJob.getServiceById(config.serviceId_ok, job);
		// Chai library
		expect(service).to.be.an('object');
		expect(service).to.have.property('jdtId');
		});
	});

	// Test 2

	describe('## getServiceById' , function(){
		it('### Should return nothing with no data', function(){
			var service = serviceJob.getServiceById(config.serviceId_ok, null);
			expect(service).to.be.an('undefined');
		});
	});

	//Test 3
	describe('## getServiceById', function() {
		it('### Should return nothing with id ko', function() {
			var job = serviceJob.getJobById(config.jobId_ok, config.jobsData);
			var service = serviceJob.getServiceById(config.serviceId_ko,job);
			expect(service).to.be.an('undefined');
		});
	});
});*/

/////////////////////////////////////////
describe('# Job duration', function(){
	describe('## getDurationByJob', function(){
		it('### Should return an array with start date and end date', function() {
			var duration = serviceJob.getDurationByJob(config.jobData);
			expect(duration).to.be.an('array');
			expect(duration).to.have.length(2);
		});
	});
	describe('## getDurationByJob', function(){
		it('### should return undefined without jobData', function(){
			var duration = serviceJob.getDurationByJob(null);
			expect(duration).to.be.an('undefined');
		});
	});
});

//////////////////////////////////////////
/*describe('# Service Number', function(){
	describe('## getNombreServiceByJob', function(){
		it('### Should return an integer representing the number of services', function(){
		var job = serviceJob.getJobById(config.jobId_ok, config.jobsData);
		var serviceNombre = serviceJob.getNombreServiceByJob(job);
		expect(serviceNombre).to.be.at.least(1);
		});
	});
	describe('## getNombreServiceByJob', function(){
		it('### Should return undefined wihout jobData', function(){
			var serviceNumbre = serviceJob.getNombreServiceByJob(null);
			expect(serviceNumbre).to.be.an('undefined');
		});
	});
});*/



