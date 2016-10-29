# SimpleAngularProject

GitHub Profile Dispatcher
MAIN GOALS
• Create single web application which would take a user name as an input and retrieve that user’s
GitHub profile with a simple http GET call.
• By doing this projects we will mainly learn 3 things.
◦ How to create a very simple Angular App.
◦ How to make a simple REST API call (GET)
◦ How to parse and display an http call response to user.
REQUIREMENTS
• I expect only 2 files for this project which are “25-31.js” and “index.html”
(no need for controllers and services at the moment, just a very simple single JS file)
• When I click index.html, I expect to see only one text input and a submit button.
• When you get the user name and make your http call succesfully display only following data
attributes:
◦ name (login)
◦ id
◦ location
◦ email
◦ profile photo (avatar_url)
◦ company
◦ created at
HINTS
• Your http GET call should be made to following URL:
◦ https://api.github.com/users/!username_here!
▪ Like: https://api.github.com/users/octocat
• You should receive a JSON object. So, make sure you include that in your headers.
• You can go step by step, first thing you should consider is, how to receive username input from
the application in traditional angular way (tip: ng-model)
Second step would be making the http call, but before you do that, make sure you add “$http”
as a dependency.
Good Luck!
