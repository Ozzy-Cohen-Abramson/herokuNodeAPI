<h1>Heroku deploy steps:</h1>

1. npm init
2. git init
3. npm i express --save
4. check what node version you have, and on the package.json add:
   a. in scripts: "start": "node index.js"
   b. after the dependencies:
   "engines": {
   "node": "14.17.0" or you're current node version
   }
5. This is just a template for the index.js file:

   const express = require("express");
   const app = express();
   const importData = require("./data.json");

   let PORT = process.env.PORT || 3000;

   app.get("/", (req, res) => {
   res.send("Hello world!");
   });

   app.get("/players", (req, res) => {
   res.send(importData);
   });

   app.listen(PORT, () => {
   console.log(`app is listening on port http://localhost:${PORT}`);
   });

6. run node index (make sure to add all the files you import in the index.js file)
7. check that you have heroku inastalled on your machine. if not, run: npm install -g heroku
8. run heroku login
9. run heroku create nameofyourproject
10. copy the url for the heroku git, you will push you're code there.
11. git add .
12. git commit -m "whatever"
    git push heroku-url master
