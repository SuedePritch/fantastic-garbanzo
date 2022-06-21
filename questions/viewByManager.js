
const db = require('../server')
const inquirer = require('inquirer')
const {managerChoicesArray, generateChoicesManager} = require('./choiceGenerator')


viewByManager = () =>{
    generateChoicesManager();
    inquirer.prompt([
        {
            type: "list",
            name: 'manager',
            message: 'Choose Manager to View Team',
            choices: managerChoicesArray
        }
        ]).then(answers =>{
            let managerChosen = answers.manager.split(' ')
            let managerIdChosen = managerChosen[0]
            db.execute(`
            SELECT 
                CONCAT(first_name, ' ', last_name) AS Name, 
                role.title,
                department.department
            FROM employee
            LEFT JOIN role
            ON employee.role_id = role.id
            LEFT JOIN department
            ON role.department_id = department.id
            WHERE manager_id = ${managerIdChosen}
            ORDER BY role.salary DESC;
            `, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    console.log(`
                    --------\n
                    --------
                    `);
                    console.log(managerChosen[1]+`\'s` + ' Team');
                    console.table(results);    
                }
                mainMenu();
            })
    })
} 

module.exports = viewByManager