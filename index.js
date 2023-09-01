import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        message: "What is your name?",
        type: "input",
        name: "userResponse"
    },
    {
        message: "What was your age that time?",
        type: "number",
        name: "userAge"
    },
]);
console.log(answers.userResponse);
