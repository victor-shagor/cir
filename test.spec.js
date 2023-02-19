const request = require('supertest')
const app = require('./app')

afterAll(() => {
    app.close()
  });

it('shoul', async () =>{
   const response = await request(app).get('/')

   expect(response.body.message).toEqual('welcome to api')
})