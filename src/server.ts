import express from 'express';

const PORT = process.env['PORT'] || 5000;

const app = express();

app.get('/', (_, res) => {
  res.send('Web server works!');
});

app.listen(PORT, () => {
  console.log(`Web server started on port ${PORT}`);
});