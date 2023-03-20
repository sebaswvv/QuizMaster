# QuizMaster
## To Run application:
Add a .env file in \QuizMaster\server. This file contains the following:  
DB_HOST=""  
DB_USER=""  
DB_PASSWORD=""  
DB_NAME=""  
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
[] - compress images.     
[] - style the login modal  
[] - Check if there are components where needed  
[] - filteren and pagination op GET  
[] - alwaysreturn error msg  
[] - style register page  
[] - add some information on the homepage of the website   
[] - update audience and issuer to work on remote  
[] - change username and email      
[] - make sure the user gets correct erros    

[] - implement socket.io to play a quiz  
 
