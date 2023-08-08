const express = require('express') ;

const app = express();


app.get('/', (req, res) => {
  res.send('Hello, World!');
  res.send('Application is running')
});

app.listen(8081, ()=>{ console.log('Server is running on port 8081'); });