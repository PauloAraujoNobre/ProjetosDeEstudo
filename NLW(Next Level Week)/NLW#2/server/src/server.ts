import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  
  const users = [
    { name: 'Pablim', age: '20'},
    { name: 'Shunim', age: '20'},
  ];
  
  return response.json(users);
})

app.listen(4444);

