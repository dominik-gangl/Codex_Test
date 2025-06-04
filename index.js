const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ message: 'Hallo Welt' });
});

app.listen(PORT, () => {
  console.log(`Server laeuft auf Port ${PORT}`);
});
