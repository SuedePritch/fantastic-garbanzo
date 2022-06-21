const getAll = require('../db/getAllQueries')
const employeeChoicesArray = [];
const rolesChoicesArray = [];
const managerChoicesArray = [];
const departmentChoicesArray = []

//The choice generator uses the arrays created in getAllQueries to build 
//an array with only specific data such as first and last name
//these arrays are used in their respective question files


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
generateChoicesDepartment = () =>{
    var allDepartmentsArray = getAll.getAllDepartmentsArray
    //removes array inside array
    var allDepartments = allDepartmentsArray[0]

    for (let i = 0; i < allDepartments.length; i++) {
        const department = `${allDepartments[i].id}  ${allDepartments[i].department}`;
        departmentChoicesArray.push(department)
    }
}
module.exports = {
    generateChoicesEmployee,
    employeeChoicesArray,
    generateChoicesRoles,
    rolesChoicesArray,
    generateChoicesManager,
    managerChoicesArray,
    generateChoicesDepartment,
    departmentChoicesArray
}