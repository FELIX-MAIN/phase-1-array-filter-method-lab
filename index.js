// Code your solution here
// Code your solution here
function findMatching(){
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const getdriver = drivers.find(driver => `driver.name === 'Bobby', 'Sammy'`);

console.log(getdriver);
}
findMatching('Bobby', 'Bobby');
findMatching('Sammy');

//fuzzyMatch
function fuzzyMatch(){
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
    drivers.push(drivers);

    console.log('drivers');
}
fuzzyMatch('drivers');

//matchname
function matchName(){
    let drivers = [
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
drivers = drivers.filter(driver => driver.hometown == 'pittsburgh');
console.log(drivers);
    }
matchName();
