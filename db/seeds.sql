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
    ('Level 2 Developer', 145000, 2),
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
    ('Doug','Chillian', 1, 1),
    ('Mike','Harris', 4, 1);