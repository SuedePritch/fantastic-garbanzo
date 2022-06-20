const db = require('../server')
//Database queries
//View All Options
viewAllEmployees = () =>{
    db.query(`
    SELECT 
    employee.id,
    employee.first_name,
    employee.last_name,
    role.title,
    role.salary,
    department.department,
    manager.manager_first_name,
    manager.manager_last_name

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
    db.query('SELECT * FROM role', function (err, results) {
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