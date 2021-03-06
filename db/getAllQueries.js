const db = require('../server')
const getAllEmployeesArray = [];
const getAllRolesArray = [];
const getAllManagersArray = [];
const getAllDepartmentsArray = [];
//Database queries
//Get All Options
//Similar to the view queries however these results are 
//passed into an array to be used to generate question options
//Isolated to allow future flexibility to change displayed tables 
//independant of question arrays
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
getAllMangers = () =>{
    db.query('SELECT id,first_name,last_name FROM employee WHERE manager_id IS NULL;', function (err, results) {
        getAllManagersArray.push(results);
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
    getAllMangers,
    getAllEmployeesArray,
    getAllRolesArray,
    getAllDepartmentsArray,
    getAllManagersArray
}