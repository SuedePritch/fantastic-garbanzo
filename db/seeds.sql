INSERT INTO department (name)
VALUES 
    ('Design'),
    ('Development'),
    ('Executive'), 
    ('Sales');


INSERT INTO role(title, salary, department_id)
VALUES
    ('CEO', 8000000, 3),
    ('CFO', 2600000, 3),
    ('CTO', 4600000, 3),
    ('COO', 3500000, 3),
    
    ('Level 4 Developer', 215000, 2),
    ('Level 3 Developer', 145000, 2),
    ('Level 2 Developer', 105000, 2),
    ('Level 1 Developer', 85000, 2),
    ('Intern Developer', 65000, 2),

    ('Senior Designer', 86000, 1),
    ('Mid Level Designer', 72000, 1),
    ('Junior Designer', 65000, 1),
    ('Intern Designer', 45000, 1),

    ('Sales', 63000, 4);
    
INSERT INTO employee (first_name,last_name,role_id, manager_id)
VALUES 
    ('James','Pritchard', 1, 1),
    ('Sarah','Johnston', 2, 1),
    ('Doug','Chillian', 3, 1),
    ('Mike','Harris', 4, 1),
    ('Sally','Richmond', 6, 1),
    ('Martha','Jones', 5, 1),
    ('Jim','Taylor', 13, 1),
    ('Walt','Williams', 8, 1),
    ('Matt','Crocker', 11, 1),
    ('Joe','Wong', 9, 1),
    ('Jamie','Rodriguez', 6, 1),
    ('Frank','Smith', 10, 1),
    ('Julia','Anderson', 11, 1),
    ('George','Lawrence', 7, 1),
    ('Sam','Palmerson', 14, 1);
    


-- this will end up in server
SELECT 
    employee.first_name,
    employee.last_name,
    role.title,
    role.salary,
    role.department_id
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
ORDER BY role.salary