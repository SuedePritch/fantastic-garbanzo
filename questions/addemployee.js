const inquirer = require('inquirer');
const db = require('../server')

addEmployee = () =>{
    inquirer.prompt([
        {
            type: "input",
            name: 'first_name',
            message: 'Employee First Name',
        },
        {
            type: "input",
            name: 'last_name',
            message: 'Employee Last Name',
        },
        {
            type: "list",
            name: 'role_id',
            message: 'Employee Role',
            choices:[1,2,3,4]
        },
        {
            type: "list",
            name: 'manager_id',
            message: `Employee's Manager`,
            choices:[1,2,3,4]
        },
        ]
        ).then(answers =>{
            db.execute(`
            INSERT INTO employee (first_name,last_name,role_id, manager_id)
            VALUES
                ('${answers.first_name}', '${answers.last_name}', '${answers.role_id}', '${answers.manager_id}')
            `, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    console.log('Added Employee');
                    mainMenu();
                }
            })
})
}

module.exports = addEmployee