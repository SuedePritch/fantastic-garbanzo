const inquirer = require('inquirer');
const db = require('../server')
const {
    generateChoicesRoles, 
    rolesChoicesArray,
    generateChoicesManager,
    managerChoicesArray

} = require('./updateEmployee')

addEmployee = () =>{
    generateChoicesRoles();
    generateChoicesManager();
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
            choices:rolesChoicesArray
        },
        {
            type: "list",
            name: 'manager_id',
            message: `Employee's Manager`,
            choices: managerChoicesArray
        },
        ]
        ).then(answers =>{
            let roleChosen = answers.role_id.split(' ')
            let roleIdChosen = roleChosen[0]
            let managerChosen = answers.manager_id.split(' ')
            let managerIdChosen = managerChosen[0]
            db.execute(`
            INSERT INTO employee (first_name,last_name,role_id, manager_id)
            VALUES
                ('${answers.first_name}', '${answers.last_name}', '${roleIdChosen}', '${managerIdChosen}')
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