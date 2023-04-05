# QuizMaster
## To Run application:
Add a .env file in \QuizMaster\server. This file contains the following:  
DB_HOST=""  (ip address of the server)  
DB_USER=""  (Mysql username)  
DB_PASSWORD=""  (Mysql password)  
DB_NAME=""  (Database name)  
SALT="" (For encrypting passwords)  
JWT_KEY="" (Secret key to generate JWT tokens)  

Login credentials phpmyadmin:  
username: root  
password: secret123  

(Instead of running the database with docker you can connect to another mysql database respectively)  

To start this application run:  
\QuizMaster\database: docker compose up  
\QuizMaster\server: npm install  
\QuizMaster\server: npm run dev  

\QuizMaster\client: npm install  
\QuizMaster\client: npm run dev  

Login credentails user accounts:  
username: sebas  
password: admin  