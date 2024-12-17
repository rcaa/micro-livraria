// Importando as bibliotecas necessárias
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Definindo o caminho do arquivo .proto
const protoPath = path.join(__dirname, 'proto', 'inventory.proto');

// Carregando o arquivo .proto
const packageDefinition = protoLoader.loadSync(protoPath, {});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// Acessando o serviço InventoryService
const inventoryService = protoDescriptor.inventory.InventoryService;

// Configurando o servidor gRPC
const server = new grpc.Server();

// Implementação do serviço (exemplo)
server.addService(inventoryService.service, {
  getInventory: (call, callback) => {
    // Exemplo de resposta para a requisição getInventory
    console.log("getInventory called");
    callback(null, { items: ['item1', 'item2', 'item3'] });
  },
  addInventory: (call, callback) => {
    // Exemplo de resposta para a requisição addInventory
    const newItem = call.request;
    console.log('Item adicionado:', newItem.name, newItem.quantity);
    callback(null, { status: 'success' });
  }
});

// Definindo o endereço do servidor gRPC
const serverAddress = 'localhost:50051';

// Iniciando o servidor gRPC
server.bindAsync(serverAddress, grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    console.error('Erro ao iniciar o servidor gRPC:', error);
    return;
  }
  console.log(`Servidor gRPC iniciado em ${serverAddress}`);
  server.start();
});
