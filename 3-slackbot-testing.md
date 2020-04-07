# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SlackBot Lab - Testing

## Testing your bot

### Testing your bot locally on your computer

You can test the code for your bot locally on your computer, without pushing to Heroku:

1. At the command line, navigate to the main folder for your bot.
1. Type `./bin/hubot` and press __Enter__.
This gives a few warning messages that you can safely ignore, as long as the BASH prompt is not displayed again after them. Press Enter, after which you should see a prompt such as `hubot>` that lets you interact with your bot. 
1. Press `control` + `C` when you're done, to return to the BASH prompt.


### Testing your bot on the Heroku server

You can push your code to Heroku, then test using the code on the Heroku server:

1. At the command line, navigate to the main folder for your bot.
1. Add your changes to the stage with `git add .`
1. Commit your changes with `git commit -m 'description of changes'`
1. Push your changes to Heroku with `git push heroku master`
Heroku runs tasks to build out the files necessary for your bot to run, and gives output for each step of the process.
1. Type `HUBOT_SLACK_TOKEN=TOKEN-GOES-HERE ./bin/hubot --adapter slack` where `TOKEN-GOES-HERE` is the Slack token provided by your instructor.
This gives output, then gives you a prompt such as `hubot>` that lets you interact with your hubot. 
1. Press `control` + `C` when you're done, to return to the BASH prompt.


### Testing your bot on Slack

Once you've pushed your code to Heroku, you can test your bot in the class Slack organization:

1. At the command line, navigate to the main folder for your bot.
1. Add your changes to the stage with `git add .`
1. Commit your changes with `git commit -m 'description of changes'`
1. Push your changes to Heroku with `git push heroku master`
Heroku runs tasks to build out the files necessary for your bot to run, and gives output for each step of the process.
1. In the class Slack workspace, open a direct message with the bot you're sharing (such as **redbot** or **greenbot**).
1. Send a direct message to interact with your bot.