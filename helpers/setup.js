require('dotenv').config();
const { SimpleCacheClient, EnvMomentoTokenProvider, Configurations } = require('@gomomento/sdk');

exports.getMomentoClient = async (data) => {
  const credentials = new EnvMomentoTokenProvider({environmentVariableName: 'MOMENTO_AUTH_TOKEN'});
  const momento = new SimpleCacheClient({
    configuration: Configurations.Laptop.latest(),
    credentialProvider: credentials,
    defaultTtlSeconds: 300
  });

  await initializeCache(momento, data);

  return momento;
};

const initializeCache = async (momento, data) => {
  await momento.deleteCache('animal');
  await momento.createCache('animal');

  const babyAnimals = data.filter(d => d.maturity == 'Baby' && d.species != 'wombat').map(d => JSON.stringify(d));
  await momento.listConcatenateFront('animal', 'babies', babyAnimals);

  for(const animal of data){
    await momento.dictionarySetFields('animal', animal.id, animal);
  }
};