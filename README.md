# Employee Management
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
### Description
This app is a command line interface for employee management. It uses a SQL database to provide a content management system. 

[Video Walkthrough](https://drive.google.com/file/d/1xfjL2B_jAmcoPIzYzZcEe7njtnDPPRCd/view)
### Installation
install dependancies

    npm install 

run app

    node index  

### Contributions
[Issues and Pull requests can be made to this repo](https://github.com/SuedePritch/fantastic-garbanzo)

### Technology
* NodeJS
* SQL
* Inquirer
* console.table 

---
## -----EMPLOYEE MANAGER-----
---
### -------Main Menu-------
* View All Employees 
* Add Employee 
* Update Employee Role 
* Update Employee Manager 
* Delete Employee 
* View Teams By Manager 
* View All Roles
* Add Role 
* Delete Role 
* View All Departments 
* View Teams By Department 
* Budget By Department 
* Add Department 
* Delete Department 



###  View All Employees
|id  |employee         |title               |salary   |department  | manager        | 
|----|-----------------|--------------------|---------|------------|----------------|   
|1   |James Pritchard  |CEO                 |8000000  |Executive   | null           |       
|3   |Doug Chillian    |CTO                 |4600000  |Executive   | null           |    
|4   |Mike Harris      |COO                 |3500000  |Executive   | null           |    
|2   |Sarah Johnston   |CFO                 |2600000  |Executive   | null           |    
|6   |Martha Jones     |Level 4 Developer   |215000   |Development | null           |    
|5   |Sally Richmond   |Level 3 Developer   |145000   |Development | Martha Jones   |
|11  |Jamie Rodriguez  |Level 3 Developer   |145000   |Development | Martha Jones   |
|14  |George Lawrence  |Level 2 Developer   |105000   |Development | Martha Jones   |
|8   |Walt Williams    |Level 1 Developer   |85000    |Development | Martha Jones   |
|10  |Joe Wong         |Intern Developer    |65000    |Development | Martha Jones   |
|12  |Frank Smith      |Senior Designer     |86000    |Design      | null           |        
|9   |Matt Crocker     |Mid Level Designer  |72000    |Design      | Frank Smith    |
|13  |Julia Anderson   |Mid Level Designer  |72000    |Design      | Frank Smith    |
|7   |Jim Taylor       |Intern Designer     |45000    |Design      | Frank Smith    |
|15  |Sam Palmerson    |Sales               |63000    |Sales       | Mike Harris    |


###  View All Roles
|id  |title               |department    | salary   |
|----|--------------------|--------------|----------|
|1   |CEO                 | Executive    | 8000000  |
|2   |CFO                 | Executive    | 2600000  |
|3   |CTO                 | Executive    | 4600000  |
|4   |COO                 | Executive    | 3500000  |
|5   |Level 4 Developer   | Development  | 215000   | 
|6   |Level 3 Developer   | Development  | 145000   | 
|7   |Level 2 Developer   | Development  | 105000   | 
|8   |Level 1 Developer   | Development  | 85000    | 
|9   |Intern Developer    | Development  | 65000    | 
|10  |Senior Designer     | Design       | 86000    | 
|11  |Mid Level Designer  | Design       | 72000    | 
|12  |Junior Designer     | Design       | 65000    | 
|13  |Intern Designer     | Design       | 45000    | 
|14  |Sales               | Sales        | 63000    |



###  View All Departments
|id  |department  |
|----|------------|
|1   |Executive   |
|2   |Development |
|3   |Design      |
|4   |Sales       |



### View Teams By Manager

#### Martha's Team
|Name            | title              |department |
|----------------|--------------------|-----------|
|Sally Richmond  | Level 3 Developer  |Development|
|Jamie Rodriguez | Level 3 Developer  |Development|
|George Lawrence | Level 2 Developer  |Development|
|Walt Williams   | Level 1 Developer  |Development|
|Joe Wong        | Intern Developer   |Development|



###  Choose department to View Team 
|employee        | title | department |
|----------------|-------|------------|
|James Pritchard | CEO   | Executive  |
|Doug Chillian   | CTO   | Executive  |
|Mike Harris     | COO   | Executive  |
|Sarah Johnston  | CFO   | Executive  |



###  Budget By Department
|department  | total_utilized_budget|
|------------|----------------------|
|Executive   | 18700000             |
|Development | 760000               |
|Design      | 275000               |
|Sales       | 63000                |