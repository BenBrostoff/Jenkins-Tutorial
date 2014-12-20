var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with jenkins everyone!', function(done) {
    request(app).get('/').expect('jenkins everyone!', done);
  });
});