var controller = require('../app/controllers/preferences.js');

describe('preferences controller', function () {
	
	it('should be have #list', function () {
		controller.should.be.have.property('list');
	});
	it('should be have #get', function () {
		controller.should.be.have.property('get');
	});
	it('should be have #create', function () {
		controller.should.be.have.property('create');
	});
	it('should be have #update', function () {
		controller.should.be.have.property('update');
	});
	
	
});

