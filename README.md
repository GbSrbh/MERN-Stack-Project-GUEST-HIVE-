"# MERN-Stack-Project-GUEST-HIVE-" 

Go to "api/Config", create a file called "default.json". Inside default.json add this tempelate:

<{
  "mongoURI": "",
  "jsonSecret": ""
}>

Remember to exclude <>. Here, add your mongo db connection url and any random json secret.

Open cmd terminal on your vs code and enter api folder using command: "cd api". 

Now start backend using command: "nodemon index"

Open another cmd terminal on home directory and enter client folder using "cd client".

Now start front end using "npm run dev".

Let them  both run togethor on differrent ports and access the front end on port "5173".

Done✅
