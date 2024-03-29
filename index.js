const { CacheClient } = require('@gomomento/sdk');
const { getMomentoClient, CACHE_NAME } = require('./helpers/setup');
const { validateAnswers } = require('./helpers/validator');
const { melbourneZooAnimals, getAllAnimalSpecies } = require('./helpers/animals');

/**
 * Welcome to the collection data type challenge! In Momento Cache, we do more than simple 
 * gets and sets of your data. We can cache different types of collections!
 * * Sets - An unordered array of unique elements
 * * Lists - An array that allows duplicate elements and remembers the order they were inserted
 * * Dictionary - A field/value object store that allows you to get or set individual values
 * * Sorted Sets - A ranked array of elements ordered by a score
 * 
 * In this challenge, you will prove your knowledge of how the Node.js Momento SDK works with the
 * different types of collections. Below are the tasks you must complete to pass the challenge.
 *  
 * 1. Create a collection that stores the unique animal species from the `melbourneZooAnimals` array
 * 2. Add the baby wombat to the front of the `babyAnimal` list cache item
 * 3. Update the name of the kangaroo from 'Jace' to 'Jack'
 * 4. Add donation money to the koala to update her on the leaderboard
 */

async function runChallenge() {
  const cacheClient = await getMomentoClient();

  // Press f12 on the function names below to jump straight to the code and objective details
  await objectiveOne(cacheClient);
  await objectiveTwo(cacheClient);
  await objectiveThree(cacheClient);
  await objectiveFour(cacheClient);

  const result = await validateAnswers();
  console.log(result);
}

/**
 * There are currently six types of values you can store in Momento cache. Simple key/value pairs, scalar values,
 * lists of ordered strings, sets of unique strings, dictionaries of field/value pairs, and ranked strings based on a score.
 * 
 * **Your task**
 * 
 * Create a cache item with the name `species` that is the appropriate data type to prevent duplicate species from showing up.
 * 
 * **Hints**
 * 
 * You are given a `species` array that contains duplicates in it
 * The cache item name is 'species'
 * A list remembers the sequence elements were added to it
 * A set stores an unordered array of unique items
 * A dictionary is a field/value object store
 * 
 * @param {CacheClient} cacheClient - Initialized SimpleCacheClient
 */
async function objectiveOne(cacheClient) {
  const species = getAllAnimalSpecies();

  // await cacheClient.listConcatenateBack(CACHE_NAME, << item name >>, << values >>);
  // await cacheClient.setAddElements(CACHE_NAME, << item name >>, << values >>);
  // await cacheClient.dictionarySetFields(CACHE_NAME, << item name >>, << values >>);
}

/**
 * A list is a cache item that remembers the order its elements were added. You can add one or more items to the front or
 * back of a list, or you can remove them!
 * 
 * **Your task**
 * 
 * Add the wombat element to the front of the list, making it at index 0
 * 
 * **Hints**
 * 
 * The value needs to be stored as a stringified JSON object, i.e. `JSON.stringify(object)`
 * 
 * @param {CacheClient} cacheClient - Initialized SimpleCacheClient
 */
async function objectiveTwo(cacheClient) {
  const wombat = melbourneZooAnimals.find(animal => animal.species == 'wombat' && animal.maturity == 'Baby');

  // await cacheClient.listPopFront(CACHE_NAME, 'babyAnimal');
  // await cacheClient.listPushFront(CACHE_NAME, 'babyAnimal', << value >>);
  // await cacheClient.listConcatenateFront(CACHE_NAME, 'babyAnimal', [<< value >>]);
  // await cacheClient.listPopBack(CACHE_NAME, 'babyAnimal');
  // await cacheClient.listPushBack(CACHE_NAME, 'babyAnimal', << value >>);
  // await cacheClient.listConcatenateBack(CACHE_NAME, 'babyAnimal', [<< value >>]);
}

/**
 * Dictionaries are cache items that story field/value pairs. A dictionary is access via an id and can
 * one or more of the field/value pairs updated or fetched at a time.
 * 
 * **Your task**
 * 
 * Change the value of the `name` field on the kangaroo dictionary item to 'Jack'
 * 
 * **Hints**
 * 
 * The dictionary id is the id of the kangaroo
 * 
 * @param {CacheClient} cacheClient - Initialized SimpleCacheClient
 */
async function objectiveThree(cacheClient) {
  const kangaroo = melbourneZooAnimals.find(animal => animal.id == '2');

  // await cacheClient.dictionaryFetch(CACHE_NAME, << dictionary id >>);
  // await cacheClient.dictionaryIncrement(CACHE_NAME, << dictionary id >>, 'name', 1);
  // await cacheClient.dictionarySetField(CACHE_NAME, << dictionary id >>, 'name', << value >>);
}

/**
 * Leaderboards are handled automatically with `sorted sets` in Momento Cache. The zoo staff has setup a `sorted set` cache 
 * item with the name `donations` to track the total amount donated (score) for animals. They saved the animal's name as the value in the cache.
 *
 * **Your task**
 *
 * Add 95.50 to the score of Ko the koala.
 *
 * **Hints**
 *
 * Update the `donations` item in the `animals` cache
 * The `Ko` element in the cache item needs the score increased by 95.5
 *
 * @param {CacheClient} cacheClient - Initialized SimpleCacheClient
 */
async function objectiveFour(cacheClient) {
  // await cacheClient.sortedSetPutElement(CACHE_NAME, << item name >>, 'Ko', << value >>);
  // await cacheClient.sortedSetFetchByScore(CACHE_NAME, << item name >>, { maxScore: << value >> } );
  // await cacheClient.sortedSetIncrement(CACHE_NAME, << item name >>, 'Ko', << value >>);
}

runChallenge();