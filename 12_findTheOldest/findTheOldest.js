const findTheOldest = function(people) {
    const curYear = new Date().getFullYear();

    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.age = curYear - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });

    let oldest = people.sort((a , b) => {return b.age - a.age});

    return oldest[0];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Debbie",
        yearOfBirth: 2018,
      },
  ]

console.table(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
