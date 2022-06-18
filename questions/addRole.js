const inquirer = require('inquirer');
const db = require('../server')

addRole = () =>{
    inquirer.prompt([
        {
            type: "input",
            name: 'title',
            message: 'Role title',
        },
        {
            type: "input",
            name: 'salary',
            message: 'Role Salary',
        },
        {
            type: "input",
            name: 'department_id',
            message: 'Role Department',
        },
        
        ]
        ).then(answers =>{
            db.execute(`
            INSERT INTO role (title, salary, department_id)
            VALUES
                ('${answers.title}', '${answers.salary}', '${answers.department_id}')
            `, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    console.log('Added Role');
                    mainMenu();
                }
            })
})
}

module.exports = addRole