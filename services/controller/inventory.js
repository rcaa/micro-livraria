const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Carregar o arquivo proto
const packageDefinition = protoLoader.loadSync('proto/inventory.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

// Carregar o serviço InventoryService do arquivo proto
const InventoryService = grpc.loadPackageDefinition(packageDefinition).inventory.InventoryService;

// Criar o cliente gRPC
const client = new InventoryService('127.0.0.1:3002', grpc.credentials.createInsecure());

module.exports = client;
