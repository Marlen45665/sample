const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Привет с бэка!' });
});

// 🟢 ВАЖНО: слушаем на 0.0.0.0, а не на localhost
app.listen(PORT, '0.0.0.0',  () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});