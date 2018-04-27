var request = require('supertest');

describe('Loading Unit Tests', function () {
    var app;
    beforeEach(function () {
        app = require('../app');
    });
    afterEach(function (done) {
        app.close(done);
    });
    it('Test Passes for Home Page', function testHome(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });

});