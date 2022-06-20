
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
            SELECT CONCAT(first_name, ' ', last_name) AS Name FROM employee WHERE manager_id = ${managerIdChosen}
            `, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    console.table(results);    
                }
                mainMenu();
            })
    })
} 

module.exports = viewByManager