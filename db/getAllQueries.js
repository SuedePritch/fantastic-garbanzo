const db = require('../server')
const getAllEmployeesArray = [];
const getAllRolesArray = [];
const getAllDepartmentsArray = [];
//Database queries
//Get All Options
getAllEmployees = () =>{
    db.query('SELECT * FROM employee', function (err, results) {
        getAllEmployeesArray.push(results)
    });
}
getAllRoles = () =>{
    db.query('SELECT * FROM role', function (err, results) {
        getAllRolesArray.push(results);
    });
}
getAllDepartments = () =>{
    db.query('SELECT * FROM department', function (err, results) {
        getAllDepartmentsArray.push(results);
    });
}
module.exports = {
    getAllEmployees,
    getAllRoles,
    getAllDepartments,
    getAllEmployeesArray,
    getAllRolesArray,
    getAllDepartmentsArray
}