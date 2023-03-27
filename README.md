# QuizMaster
## To Run application:
Add a .env file in \QuizMaster\server. This file contains the following:  
DB_HOST=""  (ip address of the server)  
DB_USER=""  (Mysql username)  
DB_PASSWORD=""  (Mysql password)  
DB_NAME=""  (Database name)  
SALT="" (For encrypting passwords)  
JWT_KEY="" (Secret key to generate JWT tokens)  

(Instead of running the database with docker you can connect to another mysql database respectively)

To start this application run:  
\QuizMaster\database: docker compose up  
  
\QuizMaster\server: npm run dev  
\QuizMaster\client: npm run dev  


## TODO:
[] - implement delete confirm modal  