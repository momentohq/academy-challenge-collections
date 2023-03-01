exports.melbourneZooAnimals = [
  {
    id: '1',
    breed: 'koala',
    name: 'Ko',
    maturity: 'Adult'
  },
  {
    id: '2',
    breed: 'kangaroo',
    name: 'Jace',
    maturity: 'Juvenile'
  },
  {
    id: '3',
    breed: 'wombat',
    name: 'Olivia',
    maturity: 'Baby'
  },
  {
    id: '4',
    breed: 'kangaroo',
    name: 'Adelaide',
    maturity: 'Adult'
  },
  {
    id: '5',
    breed: 'platypus',
    name: 'Stella',
    maturity: 'Baby'
  }
];

exports.getAllAnimalBreeds = () => {
  return exports.melbourneZooAnimals.map(animal => animal.breed);
};