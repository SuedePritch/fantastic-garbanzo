const inquirer = require('inquirer');
const db = require('../server');
const getAll = require('../db/getAllQueries')
const choicesArray = ['---------------'];


updateEmployeeRole = () =>{
    var allEmployeesArray = getAll.getAllEmployeesArray
    var allEmployees = allEmployeesArray[0]

    for (let i = 0; i < allEmployees.length; i++) {
        const employee = `${allEmployees[i].first_name} ${allEmployees[i].last_name}`;
        choicesArray.push(employee)
    }
    console.log(choicesArray);

    inquirer.prompt([
        {
            type: "list",
            name: 'employeeName',
            message: 'Choose Employee To Update',
            choices: choicesArray
        },
        ]
        ).then(answers =>{
            let nameArrayOfChosen = answers.employeeName.split(' ')
            console.log(nameArrayOfChosen[0], nameArrayOfChosen[1]);
            db.execute(`
            SELECT * FROM employee WHERE first_name= '${nameArrayOfChosen[0]}' AND last_name= '${nameArrayOfChosen[1]}';
            `, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    console.log(results[0].manager_id);
                    mainMenu();
                }
            })
})
}

module.exports = updateEmployeeRole