require('dotenv').config();
const { SimpleCacheClient, EnvMomentoTokenProvider, Configurations } = require('@gomomento/sdk');
const { donations, melbourneZooAnimals } = require('./animals');

exports.getMomentoClient = async () => {
  const credentials = new EnvMomentoTokenProvider({environmentVariableName: 'MOMENTO_AUTH_TOKEN'});
  const momento = new SimpleCacheClient({
    configuration: Configurations.Laptop.latest(),
    credentialProvider: credentials,
    defaultTtlSeconds: 300    
  });

  await initializeCache(momento);

  return momento;
};

const initializeCache = async (momento) => {
  await momento.deleteCache('animal');
  await momento.createCache('animal');

  const babyAnimals = melbourneZooAnimals.filter(d => d.maturity == 'Baby' && d.species != 'wombat').map(d => JSON.stringify(d));
  await momento.listConcatenateFront('animal', 'babies', babyAnimals);

  for(const animal of melbourneZooAnimals){
    await momento.dictionarySetFields('animal', animal.id, animal);
  }

  // await momento.sortedSetPutElements('animal', 'donations', donations.map(donation => {
  //   return {
  //     value: donation.name,
  //     score: donation.amount
  //   }
  // }));
};