const findTheOldest = function (people) {
  const d = new Date();

  for (let i = 0; i < people.length; i++) {
    if (!people[i].hasOwnProperty('yearOfDeath')) {
      people[i].yearOfDeath = d.getFullYear();
    }
  }
  const oldest = people.sort(function (a, b) {
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
