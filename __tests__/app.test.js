/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

chai.use(chaiHttp);
chai.should();

describe('This is a simple first test', () => {
  it('should render register page', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, response) => {
        if (err) throw err;
        response.should.have.status(200);
        return done();
      });
  });
});
