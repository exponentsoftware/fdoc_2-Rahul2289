// 1. Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.
const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

function createArrayOfArrays(countries) {
  let upperCase = [...countries];
  let result = [];

  for (let i = 0; i < countries.length; i++) {
    let temp = [];

    countries[i] = countries[i].toLowerCase();
    countries[i] = countries[i].split("");
    countries[i][0] = countries[i][0].toUpperCase();
    countries[i] = countries[i].join("");

    temp.push(countries[i], upperCase[i].slice(0, 3), countries[i].length);

    result.push(temp);
  }
  return result;
}
console.log(createArrayOfArrays(countries));

/*2.	Write a function which filter users who has  scoresGreaterThan85,  
	Write a function which addUser  to the user array only if the user does not exist.   
	Write a function which addUserSkill which can add skill to a user only if the user exist.   
	Write a function which editUser if the user exist in the users array.  */
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

const userScoreLessThan85 = (users) => {
  let userScore = users.filter((user) => user.scores > 85);
  let result = userScore.map((user) => user.name + "->" + user.scores);
  return result;
};
console.log(userScoreLessThan85(users));

//Q.2.b

const addUser = (users, userObj) => {
  let temp = users.filter((e) => {
    return e.name == userObj.name;
  });
  if (temp == false) {
    users.push(userObj);
    console.log("new user is added");
  } else {
    console.log("user is already exist");
  }
  return users;
};

const newUser = {
  name: "Rahul",
  scores: 90,
  skills: ["HTM", "CSS", "JS", "react"],
  age: 20,
};

console.log(addUser(users, newUser));

//Q.2.c

const add_user_skills = (users, userObj) => {
  let index = users.findIndex((e) => {
    return e.name == userObj.name;
  });
  if (index != -1) {
    users[index].skills = users[index].skills.concat(userObj.skills);
    console.log(`Skills added successfully`);
  } else {
    console.log(`User doesnt exists`);
  }
  return users;
};

const NewUser = {
  name: "Thomas",
  scores: 90,
  skills: ["HTM", "CSS", "JS", "react", "redux"],
  age: 20,
};
console.log(add_user_skills(users, NewUser));

//2.d
function editUser(arr, userObj) {
  let index = arr.findIndex((x) => x.name === userObj.searchWith.name);

  if (index != -1) {
    arr[index] = userObj.replaceWith;

    console.log(`User updated successfully!`);
  } else {
    console.log(`User doesn't axists.`);
  }
  return arr;
}
const newData = {
  searchWith: { name: "Thomas" },
  replaceWith: {
    name: "Thanus",
    scores: 55,
    skills: ["React", "html", "java"],
    age: 26,
  },
};

console.log(editUser(users, newData));
