const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ quiet: true });

const app = express();
app.use(express.json());

app.get('/check-status', (req, res) => {
  res.status(200).json({ OK: true });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT || 3000}`);
});
