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

## Notes:
TRUNCATE options;  
TRUNCATE questions;  
TRUNCATE quizzes; 

## TODO:
[x] - Add public/private slider  
[x] - delete an entire quiz  
[x] - Wel echt /1 doen ipv query param  
[x] - Search doen op /quizzes en dan search param meegeven en dit checken in de controller  
[x] - fix broken endpoints client side  
[x] - Update an entire quiz client side  
[x] - Add search function to /choose page  
[x] - Show the username of the person that made a public quiz  
[x] - style the login modal  
[x] - style register page  
[x] - filteren and pagination op GET  
[x] - Make component of question block (play  & participate)  
[x] - finish socker implement  
[x] - Check if there are components where needed  
[] - alwaysreturn error msg  
[] - add some information on the homepage of the website   
[] - update audience and issuer to work on remote  
[] - make sure the user gets correct erros    
 
