const getAll = require('../db/getAllQueries')
const employeeChoicesArray = [];
const rolesChoicesArray = [];
const managerChoicesArray = [];



//retrieve all employees so that they can be displayed as list choices
generateChoicesEmployee = () =>{
    var allEmployeesArray = getAll.getAllEmployeesArray
    //removes array inside array
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
//retrieve all employees so that they can be displayed as list choices
generateChoicesManager = () =>{
    var allManagersArray = getAll.getAllManagersArray
    //removes array inside array
    var allManagers = allManagersArray[0]

    for (let i = 0; i < allManagers.length; i++) {
        const employee = `${allManagers[i].id} ${allManagers[i].first_name} ${allManagers[i].last_name}`;
        managerChoicesArray.push(employee)
    }
}
module.exports = {
    generateChoicesEmployee,
    employeeChoicesArray,
    generateChoicesRoles,
    rolesChoicesArray,
    generateChoicesManager,
    managerChoicesArray
}