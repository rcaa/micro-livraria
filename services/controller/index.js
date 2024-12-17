const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Caminho para o arquivo .proto
const PROTO_PATH = './proto/inventory.proto';

// Carregando o arquivo .proto
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true, // Mantém o nome das mensagens e serviços com a mesma capitalização do arquivo .proto
  longs: String,  // Converte os números longos para strings
  enums: String,  // Converte os enums para strings
  defaults: true,  // Preenche valores ausentes com o valor padrão
  oneofs: true     // Resolve problemas de campos "oneof"
});

// Carregando o pacote do Protobuf
const inventoryProto = grpc.loadPackageDefinition(packageDefinition).inventory;

// Criando o servidor gRPC
const server = new grpc.Server();

// Implementação do serviço
server.addService(inventoryProto.InventoryService.service, {
  SearchProductByID: (call, callback) => {
    // Lógica para SearchProductByID
    callback(null, { id: '1', name: 'Produto 1', description: 'Descrição do produto 1' });
  },
  AddProduct: (call, callback) => {
    // Lógica para AddProduct
    callback(null, { message: 'Produto adicionado com sucesso!', success: true });
  }
});

// Iniciando o servidor na porta 3000
server.bind('0.0.0.0:3000', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Servidor gRPC rodando na porta 3000');
});

// Iniciando o servidor
server.start();
