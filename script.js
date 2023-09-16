let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
];

function PrintDeveloper() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].profession == "developer")
      console.log("Name : " + arr[i].name + " Age:" + arr[i].age);
  }
}

function addData() {
  const id = parseInt(prompt("Enter ID:"));
  const name = prompt("Enter Name:");
  const age = parseInt(prompt("Enter Age:"));
  const profession = prompt("Enter Profession:");
  const salary = parseInt(prompt("Enter Salary:"));
  const newData = { id, name, age, profession, salary };
  arr.push(newData);
  console.log("Data added successfully:", newData);
  console.log("Updated array:", arr);
}

function removeAdmin() {
  var remove = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].profession == "admin") {
      remove.push(i);
    }
  }
  for (let i = remove.length - 1; i >= 0; i--) {
    arr.splice(remove[i], 1);
  }
  console.log("Updated array", arr);
}

function concatenateArray() {
  const dummyArray = [
    { id: 4, name: 'emma', age: 22, profession: 'designer', salary: 1200 },
    { id: 5, name: 'oliver', age: 21, profession: 'developer', salary: 1050 }
  ];
  const concatenatedArray = arr.concat(dummyArray);
  console.log("Concatenated Array:");
  console.log(concatenatedArray);
}

function averageAge() {
  const totalAge = arr.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / arr.length;
  console.log("Average Age:", average);
}

function checkAgeAbove25() {
  const isAbove25 = arr.some((person) => person.age > 25);
  if (isAbove25) {
    console.log("There is at least one person older than 25 in the array.");
  } else {
    console.log("There is no one older than 25 in the array.");
  }
}

function uniqueProfessions() {
  const distinctProfessions = {};
  arr.forEach((person) => {
    distinctProfessions[person.profession] = true;
  });
  const professionsArray = Object.keys(distinctProfessions);
  console.log("Distinct Professions:");
  professionsArray.forEach((profession) => {
    console.log(profession);
  });
}

function sortByAge() {
  arr.sort((a, b) => a.age - b.age);
  console.log("Sorted Array by Age (Ascending):");
  arr.forEach((person) => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  });
}

function updateJohnsProfession() {
  const johnIndex = arr.findIndex((person) => person.name === 'john');
  if (johnIndex !== -1) {
    arr[johnIndex].profession = 'manager';
    console.log("John's profession has been updated to 'manager'.");
  } else {
    console.log("John was not found in the array.");
  }
  console.log("Updated array:", arr);
}

function getTotalProfessions() {
  let developerCount = 0;
  let adminCount = 0;
  arr.forEach((person) => {
    if (person.profession === 'developer') {
      developerCount++;
    } else if (person.profession === 'admin') {
      adminCount++;
    }
  });
  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}
