const inquirer = require('inquirer');
const db = require('../server')
const getAll = require('../db/getAllQueries')
const departmentChoicesArray = [];


generateChoicesDepartment = () =>{
    var allDepartmentsArray = getAll.getAllDepartmentsArray
    //removes array inside array
    var allDepartments = allDepartmentsArray[0]

    for (let i = 0; i < allDepartments.length; i++) {
        const employee = `${allDepartments[i].id} ${allDepartments[i].name}`;
        departmentChoicesArray.push(employee)
        console.log(departmentChoicesArray);
    }
}


addRole = () =>{
    generateChoicesDepartment();
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
            type: "list",
            name: 'department_id',
            message: 'Role Department',
            choices: departmentChoicesArray
        },
        
        ]
        ).then(answers =>{
            let departmentIdChosen = answers.department_id.split(' ')
            db.execute(`
            INSERT INTO role (title, salary, department_id)
            VALUES
                ('${answers.title}', '${answers.salary}', '${departmentIdChosen[0]}')
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