const express = require('express');
const app = express();
const port = 3001;

// Definindo uma rota de exemplo
app.get('/shipping', (req, res) => {
  res.json({ message: 'Shipping service is running!' });
});

app.listen(port, () => {
  console.log(`Shipping service is running on http://localhost:${port}`);
});
