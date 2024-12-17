// client.js

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Definindo o caminho do arquivo .proto
const protoPath = path.join(__dirname, 'proto', 'inventory.proto');

// Carregando o arquivo .proto
const packageDefinition = protoLoader.loadSync(protoPath, {});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// Acessando o serviço corretamente
const inventoryService = protoDescriptor.inventory.InventoryService;

// Criando o cliente gRPC
const client = new inventoryService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Chamando o método getInventory
client.getInventory({}, (error, response) => {
  if (error) {
    console.error('Erro ao chamar getInventory:', error);
  } else {
    console.log('Resposta do servidor (getInventory):', response);
  }
});

// Chamando o método addInventory
const newItem = { name: 'Novo Produto', quantity: 10 };
client.addInventory(newItem, (error, response) => {
  if (error) {
    console.error('Erro ao chamar addInventory:', error);
  } else {
    console.log('Resposta do servidor (addInventory):', response);
  }
});
