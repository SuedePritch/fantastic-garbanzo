const db = require('../server')
const table = require('console.table')
//Database queries
//View All Options
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
viewAllRoles = () =>{
    db.query('SELECT id, title, department_id, salary FROM role', function (err, results) {
        console.table(results);
        mainMenu();
    });
}
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