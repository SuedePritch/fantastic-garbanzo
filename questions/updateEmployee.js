const inquirer = require('inquirer');
const db = require('../server');
const getAll = require('../db/getAllQueries')
const employeeChoicesArray = [];
const rolesChoicesArray = [];



//retrieve all employees so that they can be displayed as list choices
generateChoicesEmployee = () =>{
    var allEmployeesArray = getAll.getAllEmployeesArray
    var allEmployees = allEmployeesArray[0]

    for (let i = 0; i < allEmployees.length; i++) {
        const employee = `${allEmployees[i].first_name} ${allEmployees[i].last_name}`;
        employeeChoicesArray.push(employee)
    }
}
//retrieve all roles so that they can be displayed as list choices
generateChoicesRoles = () =>{
    var allRolesArray = getAll.getAllRolesArray
    var allRoles = allRolesArray[0]
    for (let i = 0; i < allRoles.length; i++) {
        const role = `${allRoles[i].id} ${allRoles[i].title}`;
        rolesChoicesArray.push(role)
    }
}


updateEmployeeRole = () =>{
    generateChoicesEmployee();
    generateChoicesRoles();
    inquirer.prompt([
        {
            type: "list",
            name: 'employeeName',
            message: 'Choose Employee To Update',
            choices: employeeChoicesArray
        },
        ]
        ).then(answers =>{
            let nameArrayOfChosen = answers.employeeName.split(' ') 
            inquirer.prompt([
                {
                    type: "list",
                    name: 'employeeRole',
                    message: 'Choose Employee\'s New Role',
                    choices: rolesChoicesArray
                }
                ]).then(answers =>{
                    let roleChosen = answers.employeeRole.split(' ')
                    let roleIdChosen = roleChosen[0]
                    let roleTitleChosen = roleChosen.slice(1);
                    db.execute(`
                    UPDATE employee SET role_id= '${roleIdChosen}' WHERE first_name= '${nameArrayOfChosen[0]}' AND last_name= '${nameArrayOfChosen[1]}';
                    `, function (err, results) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log(nameArrayOfChosen[0], nameArrayOfChosen[1] + '\'s role has been updated to ' + roleTitleChosen.join(' '));    
                        }
                        mainMenu();
                    })
        })
})}

module.exports = updateEmployeeRole