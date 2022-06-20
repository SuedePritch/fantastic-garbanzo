
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
            db.execute(`
            SELECT id FROM role WHERE department_id = ${departmentIdChosen}
            `, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    for (let i = 0; i < results.length; i++) {
                        const jobTitle = results[i];
                        console.log(jobTitle);
                        db.execute(`
                        SELECT CONCAT(first_name, ' ', last_name) AS Name FROM employee WHERE role_id = ${jobTitle.id}
                        `, function (err, results) {
                            if(err){
                                console.log(err);
                            }else{
                                console.log(results);    
                            }   
                        }
                        )
                    }
                }
                    mainMenu();
    })
} )}

module.exports = viewByDepartment