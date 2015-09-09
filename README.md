Hard Mode Solo Heroku Challenge
Welcome back (back? back?) to a challenge that involves your Resume! For this challenge, 
I want you to spin up an entirely new project (repetition is key here and will be helpful I promise!). 
Set up a node project using npm init, create an http server and respond on port 3000 with “Hello world!”. 
Test the application using the curl command.

Note: make sure you use .listen(process.env.PORT || 3000); in order to support heroku’s automatic port assignment.
Next, you will need to create an account at heroku.com. Once you’re logged in, go to your dashboard, 
and create a new app (there is a plus sign in the top right, or just go to https://dashboard.heroku.com/new). 

Enter a name or leave it blank (it’s fun to leave it blank) and hit “create app”.
Follow the steps on the next page. It should say “Install Heroku Toolbelt”, “Create a new Git repository” and finally 
“Deploy your application”. If you set up your application correctly it should deploy just fine.

Once you are complete, post the assignment to both GitHub and Heroku and send these URLs to your instructors.

Hard Mode 
Replace http with Express in your application, and serve a ‘public’ directory 
(see http://expressjs.com/starter/static-files.html). Add your resume index.html, css and (optional) 
js files into this folder. Push this to both GitHub and Heroku.

Pro Mode
Pull Bootstrap in using npm install, and serve those files using an express static server too. 
Restyle your resume using Bootstrap. Push this to both GitHub and Heroku.
