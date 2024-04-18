const calculateAge = (person) => {
    return person.deathYear - person.birthYear;
};
const findOldestPerson = (people) => {
    let oldestPerson = people[0];
    for (let i = 1; i < people.length; i++) {
        const age = calculateAge(people[i]);
        const oldestAge = calculateAge(oldestPerson);
        if (age > oldestAge) {
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};
const people = [
    { name: "Ali", birthYear: 1900, deathYear: 1980 },
    { name: "Vali", birthYear: 1920, deathYear: 1995 },
    { name: "Hasan", birthYear: 1915, deathYear: 2005 },
    { name: "Husan", birthYear: 1905, deathYear: 1960 }
];
const oldestPerson = findOldestPerson(people);
console.log("Eng keksa inson:", oldestPerson.name);
