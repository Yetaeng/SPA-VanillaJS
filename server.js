const express = require('express');
const path = require('path');

const app = express();

// 정적 폴더 경로 설정
app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'index.html'));
});

app.get('/', (req, res) => {
  res.sendStatus(404);
});

app.get('/', (error, req, res) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(3000);