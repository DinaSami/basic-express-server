const {server} = require('../src/server')
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('server',()=>{
  it('Should return name',async ()=>{
    const query = 'dina'
 const response = await mockRequest.get(`/person?name=${query}`);
 expect(response.body.name).toEqual(query)
 expect(response.status).toBe(200)
  })
})