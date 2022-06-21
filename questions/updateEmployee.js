const inquirer = require('inquirer');
const db = require('../server');
const {
    employeeChoicesArray, 
    generateChoicesEmployee,
    rolesChoicesArray,
    generateChoicesRoles,
    managerChoicesArray,
    generateChoicesManager
} = require('./choiceGenerator')



updateEmployeeRole = () =>{
    generateChoicesEmployee();
    generateChoicesRoles();
    inquirer.prompt([
        {
            type: "list",
            name: 'employeeName',
            message: 'Choose Employee To Update',
            choices: employeeChoicesArray
        },
        ]
        ).then(answers =>{
            let nameArrayOfChosen = answers.employeeName.split(' ') 
            inquirer.prompt([
                {
                    type: "list",
                    name: 'employeeRole',
                    message: 'Choose Employee\'s New Role',
                    choices: rolesChoicesArray
                }
                ]).then(answers =>{
                    let roleChosen = answers.employeeRole.split(' ')
                    let roleIdChosen = roleChosen[0]
                    let roleTitleChosen = roleChosen.slice(1);
                    console.log(roleTitleChosen);
                    db.execute(`
                    UPDATE employee SET role_id= '${roleIdChosen}' WHERE first_name= '${nameArrayOfChosen[0]}' AND last_name= '${nameArrayOfChosen[1]}';
                    `, function (err, results) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log(nameArrayOfChosen[0], nameArrayOfChosen[1] + '\'s role has been updated to ' + roleTitleChosen.join(' '));    
                        }
                        mainMenu();
                    })
        })
})}




updateEmployeeManager = () =>{
    generateChoicesEmployee();
    generateChoicesManager();
    inquirer.prompt([
        {
            type: "list",
            name: 'employeeName',
            message: 'Choose Employee To Update',
            choices: employeeChoicesArray
        },
        ]
        ).then(answers =>{
            let nameArrayOfChosen = answers.employeeName.split(' ') 
            inquirer.prompt([
                {
                    type: "list",
                    name: 'employeeManager',
                    message: 'Choose Employee\'s New Manager',
                    choices: managerChoicesArray
                }
                ]).then(answers =>{
                    let managerChosen = answers.employeeManager.split(' ')
                    let managerIdChosen = managerChosen[0]
                    db.execute(`
                    UPDATE employee SET manager_id= '${managerIdChosen}' WHERE first_name= '${nameArrayOfChosen[0]}' AND last_name= '${nameArrayOfChosen[1]}';
                    `, function (err, results) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log(nameArrayOfChosen[0], nameArrayOfChosen[1]);    
                        }
                        mainMenu();
                    })
        })
})}

module.exports = {
    updateEmployeeRole,
    updateEmployeeManager,
}