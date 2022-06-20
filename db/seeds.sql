INSERT INTO department (name)
VALUES 
    ('Executive'), 
    ('Development'),
    ('Design'),
    ('Sales');


INSERT INTO role(title, salary, department_id)
VALUES
    ('CEO', 8000000, 1),
    ('CFO', 2600000, 1),
    ('CTO', 4600000, 1),
    ('COO', 3500000, 1),
    
    ('Level 4 Developer', 215000, 2),
    ('Level 3 Developer', 145000, 2),
    ('Level 2 Developer', 105000, 2),
    ('Level 1 Developer', 85000, 2),
    ('Intern Developer', 65000, 2),

    ('Senior Designer', 86000, 3),
    ('Mid Level Designer', 72000, 3),
    ('Junior Designer', 65000, 3),
    ('Intern Designer', 45000, 3),

    ('Sales', 63000, 4);
    
INSERT INTO employee (first_name,last_name,role_id, manager_id)
VALUES 
    ('James',       'Pritchard',     1, NULL),
    ('Sarah',       'Johnston',      2, NULL),
    ('Doug',        'Chillian',      3, NULL),
    ('Mike',        'Harris',        4, NULL),
    ('Sally',       'Richmond',      6, 6),
    ('Martha',      'Jones',         5, NULL),
    ('Jim',         'Taylor',       13, 12),
    ('Walt',        'Williams',      8, 6),
    ('Matt',        'Crocker',      11, 12),
    ('Joe',         'Wong',          9, 6),
    ('Jamie',       'Rodriguez',     6, 6),
    ('Frank',       'Smith',        10, NULL),
    ('Julia',       'Anderson',     11, 12),
    ('George',      'Lawrence',      7, 6),
    ('Sam',         'Palmerson',    14, 4);
    
INSERT INTO manager(employeeid, manager_first_name, manager_last_name)
    SELECT id, first_name, last_name
    FROM employee
    WHERE manager_id IS NULL;

