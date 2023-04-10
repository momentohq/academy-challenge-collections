require('dotenv').config();
const { CacheClient, EnvMomentoTokenProvider, Configurations } = require('@gomomento/sdk');
const { donations, melbourneZooAnimals } = require('./animals');
exports.CACHE_NAME = 'animal';

exports.getMomentoClient = async () => {
  const credentials = new EnvMomentoTokenProvider({ environmentVariableName: 'MOMENTO_AUTH_TOKEN' });
  const cacheClient = new CacheClient({
    configuration: Configurations.Laptop.latest(),
    credentialProvider: credentials,
    defaultTtlSeconds: 300
  });

  await initializeCache(cacheClient);

  return cacheClient;
};

const initializeCache = async (cacheClient) => {
  await cacheClient.createCache(exports.CACHE_NAME);
  await cacheClient.flushCache(exports.CACHE_NAME);

  const babyAnimals = melbourneZooAnimals.filter(d => d.maturity == 'Baby' && d.species != 'wombat').map(d => JSON.stringify(d));
  await cacheClient.listConcatenateFront(exports.CACHE_NAME, 'babies', babyAnimals);

  for (const animal of melbourneZooAnimals) {
    await cacheClient.dictionarySetFields(exports.CACHE_NAME, animal.id, animal);
  }

  const donationSet = {};
  for (const donation of donations) {
    donationSet[donation.name] = donation.amount
  }

  await cacheClient.sortedSetPutElements(exports.CACHE_NAME, 'donations', donationSet);
};