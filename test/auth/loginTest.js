const assert = require('chai').assert;
const request = require('supertest');

const app = require('../../app');
const conn = require('../../db/index');

describe('POST /login method', () => {

  //MONGODB BOILERPLATE-----------
  before((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })

  after((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })
  //------------------------------

  it('OK, user able to login', (done) => {
    request(app).post('/api/v1/auth/login')
    .send({ email: 'test1@gmail.com', password: 'testerOne' })
    .then((res) => {
      assert.equal(res.status, 200, 'Unsuccessful connection');
      assert.equal(res.type, 'text/html', 'It should return text/html format');
      assert.equal(res.text, 'Login successful!', 'Not a string and string is different');
      done();
    })
  })

  // TODO: write tests like this!
  // it('Wrong password', (done) => {
  //   request(app).post('/api/v1/auth/login')
  //   .send({ email: 'test1@gmail.com', password: 'testerOne1231' })
  //   .then((res) => {
  //     assert.equal(res.status, 200, 'Unsuccessful connection');
  //     assert.equal(res.type, 'text/html', 'It should return text/html format');
  //     assert.equal(res.text, 'Login successful!', 'Not a string and string is different');
  //     done();
  //   })
  // })

  // it('Wrong email', (done) => {

  // })
})
