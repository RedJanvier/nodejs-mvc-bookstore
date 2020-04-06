const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('This is a simple first test', () => {
    it('should render register page', done => {
        chai(app)
    });
});