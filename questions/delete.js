const inquirer = require('inquirer');
const db = require('../server');
const {
    employeeChoicesArray, 
    generateChoicesEmployee,
    rolesChoicesArray,
    generateChoicesRoles,
    generateChoicesDepartment,
    departmentChoicesArray
} = require('./choiceGenerator')


//delete functions used to remove employee, department, and roles
//displays current options as a list
removeEmployee = () =>{
    generateChoicesEmployee();
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
            db.query(`DELETE FROM employee WHERE first_name = '${nameArrayOfChosen[0]}' AND last_name = '${nameArrayOfChosen[1]}'`, function (err,results){
                if(err){
                    console.log(err);
                }else{
                    console.log(`Removed ${nameArrayOfChosen}`);
                }
                mainMenu();
            })
            
        })}




removeDepartment = () =>{
    generateChoicesDepartment();
    inquirer.prompt([
        {
            type: "list",
            name: 'department_id',
            message: 'Choose Role To Delete',
            choices: departmentChoicesArray
        },
        ]
        ).then(answers =>{
            let departmentChosen = answers.department_id.split(' ')

            let departmentIdChosen = departmentChosen[0]
            db.query(`DELETE FROM department WHERE id = ?`, departmentIdChosen, function (err,results){
                if(err){
                    console.log(err);
                }else{
                    console.log(`Removed ${departmentChosen.join(' ')}`);
                }
                mainMenu();
            })
            
        })}


removeRole = () =>{
    generateChoicesRoles();
    inquirer.prompt([
        {
            type: "list",
            name: 'role_id',
            message: 'Choose Role To Delete',
            choices: rolesChoicesArray
        },
        ]
        ).then(answers =>{
            let roleChosen = answers.role_id.split(' ')
            let roleIdChosen = roleChosen[0]
            db.query(`DELETE FROM role WHERE id = ?`,roleIdChosen, function (err,results){
                if(err){
                    console.log(err);
                }else{
                    console.log(`Removed ${roleChosen}`);
                }
                mainMenu();
            })
            
        })
}
module.exports = {
    removeEmployee,
    removeRole,
    removeDepartment
}
