//Requiert des dépendances.
var chai = require('chai');
global.chai = chai;
global.expect = chai.expect;
global._ = require('underscore');
global.faker = require('faker');
//Exécution des tests.

//Dépendances du tets.
var shiftDate = require('../../app/component/services/shiftDate');
var element = require('../../app/component/data/dataLoaderStatic');

describe('# shift date', function(){
	describe('## shift element date and task date', function(){
		it('### Should return an object with element start date , element end date , task Start Date array and task End Date', function() {
			var newElement = shiftDate(element,5);
			expect(newElement).to.be.an('array');
			expect(newElemen).to.have.length(4);
			expect(newElement).to.have.property('elementStartDate');
			expect(newElement).to.have.proterty('taskStartDate');
		});
	});
});