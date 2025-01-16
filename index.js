// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(names, driver) {
  return names.filter(name => name.toUpperCase() === driver.toUpperCase());
}
findMatching(drivers, "Bobby");

function fuzzyMatch(names, query) {
  return names.filter(name => name.toLowerCase().startsWith(query.toLowerCase()));
}

 fuzzyMatch(drivers, 'sa');

 const driversAddress = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

matchName(driversAddress, 'Bobby');
