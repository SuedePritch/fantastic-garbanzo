
const db = require('../server')
const inquirer = require('inquirer')
const {
    departmentChoicesArray, 
    generateChoicesDepartment
} = require('./choiceGenerator')


viewByDepartment = () =>{
    generateChoicesDepartment();
    inquirer.prompt([
        {
            type: "list",
            name: 'department',
            message: 'Choose department to View Team',
            choices: departmentChoicesArray
        }
        ]).then(answers =>{
            let departmentChosen = answers.department
            let departmentIdChosen = departmentChosen[0]
            db.query(`
            SELECT 
                employee.first_name,
                employee.last_name,
                role.title,
                department.department

            FROM employee
            LEFT JOIN role
            ON employee.role_id = role.id
            LEFT JOIN department
            ON role.department_id = department.id
            LEFT JOIN manager
            ON employee.manager_id = manager.employeeid
            WHERE department_id = ?
            ORDER BY department.id, role.salary DESC;
            `,departmentIdChosen, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    console.table(results)
                }
                    mainMenu();
    })
} )}

module.exports = viewByDepartment