const db = require('../server')

//Database queries
//View All Options
viewAllEmployees = () =>{
    db.query('SELECT * FROM employee', function (err, results) {
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

module.exports = viewAllEmployees, viewAllRoles, viewAllDepartments