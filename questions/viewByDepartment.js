
const db = require('../server')
const inquirer = require('inquirer')
const table = require('console.table')
const {
    departmentChoicesArray, 
    generateChoicesDepartment
} = require('./choiceGenerator')

//displays all employees belonging to that department
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
                CONCAT(employee.first_name,' ',employee.last_name) AS employee,
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