const { SimpleCacheClient } = require('@gomomento/sdk');
const { getMomentoClient } = require('./helpers/setup');
const { validateAnswers } = require('./helpers/validator');
const { melbourneZooAnimals, getAllAnimalSpecies } = require('./helpers/animals');

/**
 * Welcome to the collection data type challenge! In Momento Serverless Cache, we do more than simple 
 * gets and sets of your data. We can cache different types of collections!
 * * Sets - An unordered array of unique elements
 * * Lists - An array that allows duplicate elements and remembers the order they were inserted
 * * Dictionary - A field/value object store that allows you to get or set individual values
 * 
 * In this challenge, you will prove your knowledge of how the Node.js Momento SDK works with the
 * different types of collections. Below are the tasks you must complete to pass the challenge.
 *  
 * 1. Create a collection that stores the unique animal species from the `melbourneZooAnimals` array
 * 2. Add the baby wombat to the front of the `babyAnimal` list cache item
 * 3. Update the name of the kangaroo from 'Jace' to 'Jack'
 * 
 * Before you get started, please replace the `username` and `email` placeholders below with your information
 */

const username = "USERNAME";
const email = "EMAIL";

async function runChallenge() {
  const momento = await getMomentoClient(melbourneZooAnimals);

  // Press f12 on the function names below to jump straight to the code and objective details
  await objectiveOne(momento);
  await objectiveTwo(momento);
  await objectiveThree(momento);

  const result = await validateAnswers(username, email);
  console.log(result);
}

/**
 * Objective - Create a collection that stores the unique animal species from the `melbourneZooAnimals` array
 * 
 * You are provided with an array of animal species, but it contains duplicates! We want to see a list of unique animals
 * on display at the Melbourne Zoo. You need to figure out which data type is the right one to use and add all the provided values
 * to it. 
 * 
 * **Your task**
 * Comment out the line that best fits the victory conditions below and fill in the placeholders with the correct values
 * 
 * **Victory conditions**
 * * You create a collection item in the `animal` cache with the name `species`
 * * The `species` cache item is the correct collection data type (set, list, or dictionary)
 * * The `species` cache item has only the distinct animal species as elements. There are no duplicates.
 * 
 * @param {SimpleCacheClient} momento - Initialized SimpleCacheClient
 */
async function objectiveOne(momento) {
  const species = getAllAnimalSpecies();

  // await momento.setAddElements('animal', << item name >>, << values >>);
  // await momento.listConcatenateBack('animal', << item name >>, << values >>);
  // await momento.dictionarySetFields('animal', << item name >>, << values >>);
}

/**
 * **Objective** - Add the baby wombat to the front of the `babyAnimal` list cache item
 * 
 * The `babyAnimal` cache item holds stringified json objects of all the baby animals at the zoo. Until yesterday, the only baby 
 * the zoo had was Stella the platypus. The list holds animals from youngest to oldest, so we need to make sure that the wombat
 * is added to the FRONT of the list.
 * 
 * **Your task**
 * 
 * Comment out the line that best fits the victory conditions below and fill in the placeholder with the correct value if necessary
 * 
 * **Victory conditions**
 * * The `babyAnimal` item in the `animal` cache contains the stringified JSON object for Olivia the wombat
 * * The wombat element is listed *before* the platypus element in the list (index of 0)
 * 
 * @param {SimpleCacheClient} momento - Initialized SimpleCacheClient
 */
async function objectiveTwo(momento) {
  const wombat = melbourneZooAnimals.find(animal => animal.species == 'wombat' && animal.maturity == 'Baby');

  // await momento.listPopFront('animal', 'babyAnimal');
  // await momento.listPushFront('animal', 'babyAnimal', << value >> );
  // await momento.listConcatenateFront('animal', 'babyAnimal', [<< value >>]);
  // await momento.listPopBack('animal', 'babyAnimal');
  // await momento.listPushBack('animal', 'babyAnimal', << value >>);
  // await momento.listConcatenateBack('animal', 'babyAnimal', [<< value >>]);
}

/**
 * **Objective** - Update the name of the kangaroo from 'Jace' to 'Jack'.
 * 
 * Somebody incorrectly spelled Jack the kangaroo's name! You need to go in and fix it so we stop getting zoo-goers calling
 * him by the wrong name. The data for Jack is kept in a dictionary cache item. **Animals are stored in the cache by their `id`**.
 * 
 * Below is what the *kangaroo* object looks like:
 * ```
 * {
 *   "id": "2",
 *   "species": "kangaroo",
 *   "name": "Jace",
 *   "maturity": "Juvenile"
 * }
 * ```
 * 
 * **Your task**
 * 
 * Comment out the line that best fits the victory conditions below and fill in the placeholder with the correct values
 * 
 * **Victory conditions**
 * * The `name` field of the kangaroo item in the `animal` cache is 'Jack'
 * 
 * @param {SimpleCacheClient} momento - Initialized SimpleCacheClient
 */
async function objectiveThree(momento) {
  const kangaroo = melbourneZooAnimals.find(animal => animal.id == '2');

  // await momento.dictionaryFetch('animal', << dictionary id >>);
  // await momento.dictionaryIncrement('animal', << dictionary id >>, 'name', 1);
  // await momento.dictionarySetField('animal', << dictionary id >>, 'name', << value >>);
}

runChallenge();