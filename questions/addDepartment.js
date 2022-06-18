const inquirer = require('inquirer');
const db = require('../server')

addDepartment = () =>{
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: 'Department Name',
        }
        ]
        ).then(answers =>{
            db.execute(`
            INSERT INTO department(name)
            VALUES
                ('${answers.name}')
            `, function (err, results) {
                if(err){
                    console.log(err);
                }else{
                    console.log('Added Department');
                    mainMenu();
                }
            })
})
}

module.exports = addDepartment