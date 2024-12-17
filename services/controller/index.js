const express = require('express');
const app = express();
const port = 3000;

// Importando os pacotes necessários
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Carregando o arquivo .proto
const packageDefinition = protoLoader.loadSync('proto/inventory.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const inventoryProto = grpc.loadPackageDefinition(packageDefinition).InventoryService;

// Criando um cliente gRPC para o InventoryService
const inventory = new inventoryProto('localhost:3002', grpc.credentials.createInsecure());

// Rota para pesquisar um produto por ID
app.get('/product/:id', (req, res, next) => {
    inventory.SearchProductByID({ id: req.params.id }, (err, product) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: 'something failed :(' });
        } else {
            res.json(product); // Retorna o produto encontrado
        }
    });
});

// Iniciando o servidor HTTP
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
