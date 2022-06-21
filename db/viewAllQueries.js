const db = require('../server')
const table = require('console.table')
//Database queries
//View All Options
//Retrieves all relevant employee data from employee, role, department, and manager
viewAllEmployees = () =>{
    db.query(`
SELECT 
    employee.id,
    CONCAT(employee.first_name, ' ' ,employee.last_name) AS employee,
    role.title,
    role.salary,
    department.department,
    CONCAT(manager.manager_first_name, ' ', manager.manager_last_name) AS manager

FROM employee
LEFT JOIN role
ON employee.role_id = role.id
LEFT JOIN department
ON role.department_id = department.id
LEFT JOIN manager
ON employee.manager_id = manager.employeeid
ORDER BY department.id, role.salary DESC;
`, 
function (err, results) {
        console.table(results);
        mainMenu();
    });
}

//Retrieves allthe roles data
viewAllRoles = () =>{
    db.query(`
    SELECT 
        role.id,
        role.title,
        department.department,
        role.salary
    FROM role
    LEFT JOIN department
    ON role.department_id = department.id
    
    ORDER BY department.id;
    `, function (err, results) {
        console.table(results);
        mainMenu();
    });
}
//Retrieves all the department data
viewAllDepartments = () =>{
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        mainMenu();
    });
}

module.exports = {
    viewAllEmployees,
    viewAllRoles,
    viewAllDepartments
}