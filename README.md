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
[] - when fetching quiz, remove _ and replace with camelCasing. Also do this in de client  
[] - Add public/private slider  
[] - delete an entire quiz  
[] - Update an entire quiz  
[] - Add search function to /choose page  
[] - Upload and display an image  
[] - change username and email    
[] - style the login modal  
[] - style register page  
[] - Show the username of the person that made a public quiz     
[] - add some information on the homepage of the website   
[] - update audience and issuer to work on remote  

[] - implement socket.io to play a quiz  
 
