import inquirer from "inquirer";
let answers = await inquirer.prompt({
    message: "Have you ever felt in love?",
    type: "input",
    name: "userResponse"
});
console.log(answers.userResponse);
