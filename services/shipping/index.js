// Importando o express
const express = require('express');
const app = express();
const port = 3001; // Porta onde o serviço vai rodar

// Definindo uma rota básica
app.get('/shipping', (req, res) => {
  res.json({
    message: 'Shipping Service is running',
    status: 'OK'
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Shipping service is running at http://localhost:${port}`);
});
