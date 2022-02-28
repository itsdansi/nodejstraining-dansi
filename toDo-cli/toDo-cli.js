//import module
import { LocalStorage } from "node-localstorage";
import chalk from "chalk";

// constructor function to create a storage directory inside our project for all our localStorage setItem.
var localStorage = new LocalStorage("./scratch");

// taking user input
const command = process.argv[2];
const args = process.argv[3];
// var toDoListData = [];

//Setting localStorage Item
localStorage.setItem("name", "John");
// console.log(localStorage.getItem("toDoListData"));

// const getToDoData = () => {
//   console.log(`You have ${toDoListData.length} tasks on your todo list`);
//   //   return toDoListData;
//   console.log(localStorage.getItem("toDoListData"));
// };

const listToDo = () => {
  let toDoListData = localStorage.getItem("toDoListData");
  if (toDoListData.length > 0) {
    console.log(`Your todo list:`);
    console.log(localStorage.getItem("toDoListData"));
  } else {
    console.log(chalk.bgRed("Your todo list is empty"));
  }
};
const addToDoData = (task) => {
  //   get existing todo data
  let toDoListData = localStorage.getItem("toDoListData") ?? [];
  let arrayData = Array.from(toDoListData);
  //   console.log(Object.values);

  console.log(typeof arrayData);
  let newData = [...arrayData, task];

  // add new task to existing
  //   newData.push(task);
  localStorage.setItem("toDoListData", newData);
  console.log(newData);
  //   toDoListData.push(task);

  //   return listToDo();
};

const deleteToDo = (task) => {
  let toDoListData = [...localStorage.getItem("toDoListData")];
  let arrayData = Array.from(toDoListData);
  const index = arrayData.indexOf(task);
  console.log(index);
  if (index > -1) {
    localStorage.clear(arrayData[index]);
    console.log(`Deleted "${task}" from your todo list`);
  } else {
    console.log(chalk.bgRed(`Could not find "${task}" in your todo list`));
  }
  //   return localStorage.clear();
};

const help = () => {
  console.log(
    chalk.bgRed(
      "Here are the available commands:  add <task> || delete <task>  || list || help"
    )
  );
};

switch (command) {
  case "add":
    addToDoData(args);
    break;
  case "ls":
    listToDo();
    break;
  case "delete":
    deleteToDo(args);
    break;
  case "help":
    help();
    break;
  default:
    console.log("Command not recognized");
    help();
}
