const express = require('express');

const app = express();

app.get('/check-status', (req, res) => {
  res.status(200).json({ OK: true });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})