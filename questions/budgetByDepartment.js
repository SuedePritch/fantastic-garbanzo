const inquirer = require('inquirer');
const db = require('../server');
const {
    generateChoicesDepartment,

} = require('./choiceGenerator')

//displays the sum of the salaries of each department
budgetByDepartment = () =>{
    generateChoicesDepartment();
            db.query(`
            SELECT 
                department.department,
                SUM(role.salary) AS total_utilized_budget
            FROM employee
            LEFT JOIN role
            ON employee.role_id = role.id
            LEFT JOIN department
            ON role.department_id = department.id
            GROUP BY department.department
            `, function (err,results){
                if(err){
                    console.log(err);
                }else{
                    console.table(results);
                }
                mainMenu();
            })
            
        }
        module.exports = budgetByDepartment