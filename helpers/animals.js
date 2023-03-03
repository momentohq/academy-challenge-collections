exports.melbourneZooAnimals = [
  {
    id: '1',
    species: 'koala',
    name: 'Ko',
    maturity: 'Adult'    
  },
  {
    id: '2',
    species: 'kangaroo',
    name: 'Jace',
    maturity: 'Juvenile'
  },
  {
    id: '3',
    species: 'wombat',
    name: 'Olivia',
    maturity: 'Baby'
  },
  {
    id: '4',
    species: 'kangaroo',
    name: 'Adelaide',
    maturity: 'Adult'
  },
  {
    id: '5',
    species: 'platypus',
    name: 'Stella',
    maturity: 'Baby'
  }
];

exports.donations = [
  {
    amount: 101,
    name: 'Olivia'
  },
  {
    amount: 43,
    name: 'Adelaide'
  },
  {
    amount: 66,
    name: 'Stella'
  },
  {
    amount: 85,
    name: 'Ko'
  },
  {
    amount: 10,
    name: 'Jack'
  }
];

exports.getAllAnimalSpecies = () => {
  return exports.melbourneZooAnimals.map(animal => animal.species);
};