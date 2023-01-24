import express from 'express';
import cors from 'cors';

const app = express();
const ip = 'localhost';
const port = process.env.PORT || 5000;

app.use(cors());
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Running at http://${ip}:${port}`);
});
