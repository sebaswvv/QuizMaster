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
[] - POST /register niet nodig gewoon POST naar /users en dan in de controller kijken of er user data word meegegeven, dit betekent dat er gereigsteerd word  
[] - Wel echt /1 doen ipv query param  
[] - Search doen op /quizzes en dan search param meegeven en dit checken in de controller  
[] - Update an entire quiz  
[] - check each api call on client side for erros  
[] - Add search function to /choose page  
[] - style the login modal  
[] - style register page  
[] - Show the username of the person that made a public quiz     
[] - add some information on the homepage of the website   
[] - update audience and issuer to work on remote  
[] - change username and email    

[] - implement socket.io to play a quiz  
 
