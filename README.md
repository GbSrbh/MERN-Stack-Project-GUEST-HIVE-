"# MERN-Stack-Project-GUEST-HIVE-" 

Follow the following steps to run the project on your local port:


1) In the api folder create a .env file and fill the following tempelate in the env file.

<
mongoURI = 
jsonSecret = anyRandomSecret
FrontEndPort = http://localhost:5173
>

Note: Remember to exclude <>. Add your mongo db connection uri and any random json secret.

2) Open new terminal on your vs code and enter api folder using command "cd api", and install dependencies using "npm i".

3) Now start backend using command: "nodemon index" or "node index"

3) Do the same for client folder, open a new terminal and enter:

"cd client"
"npm i"

4) Now start front end using command "npm run dev".

Let them  both run togethor on differrent ports and access the front end on port "5173".

Done✅
