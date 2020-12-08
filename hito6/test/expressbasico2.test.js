const request = require('supertest')
const app = require('../expressbasico2.js');

describe( "PUT /tipoProducto/:pintalabios", function() {
    it('should show a new type of product', function (done) {
      request(app)
       .put('/tipoProducto/pintalabios')
       .expect('Content-Type', /text/)
       .expect(200,done);
    });
});

describe( "GET /", function() {
    it('should show a welcome message', function (done) {
      request(app)
       .get('/')
       .expect('Content-Type', /text/)
       .expect(200,done);
    });
});

describe( "GET /tiposproductos", function() {
    it('should show all the types of products', function (done) {
      request(app)
       .get('/tiposproductos')
       .expect('Content-Type', /json/)
       .expect(200,done);
    });
});

describe( "GET /about", function() {
    it('should show more about the exercise', function (done) {
      request(app)
       .get('/about')
       .expect('Content-Type', /text/)
       .expect(200, done);
    });
});

describe( "GET /ab*cd", function() {
    it('should show a regular expression', function (done) {
      request(app)
       .get('/abHOLAcd')
       .expect('Content-Type', /text/)
       .expect(200,done);
    });
});
