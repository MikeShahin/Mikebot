# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SlackBot Lab - Install Guide

## Installing and Configuring Everything

In order to get our bots up and running, we need to perform a number of installations, so make sure you follow these steps carefully. 
Your instructor should provide you with a Hubot and an API token; be sure to have those ready because you'll need both in order to complete many of these steps.

1. First, you'll need to [sign up for a free Heroku account](http://heroku.com).

2. Next, [download and install the Heroku toolbelt](https://toolbelt.heroku.com/). This set of tools allows us to talk to Heroku's servers using the command line.

    Then, open a terminal window, and type the following commands, in order:

3. **Create your hubot directory:**

     Navigate to your JSD directory, which is the parent directory whose subfolders contain your existing clones of the repos for this course.

    Then execute the following command to create a new folder named `myhubot`:

     `mkdir myhubot`

4. **Move into that new directory:**

    `cd myhubot`

5. **Install Hubot and its dependencies (CoffeeScript, Yeoman, and the Hubot generator):**

    `npm install -g hubot coffee-script yo generator-hubot`

6. **Using Yeoman, generate a Hubot bot:**

    `yo hubot --adapter="slack"`

    This will prompt you to answer a few questions about your bot:

    * Owner: `hit enter`
    * Bot Name: `Give the bot a name (NO SPACES!)`
    * Description: `Optional Description`
<!--
    >Note: the `--adapter="slack"` option in the `yo` command above is a workaround for a dependency-related bug in `generator-hubot` causing the program to crash when it prompts the user for what adapter they want to use. If you specify the adapter on the command line as above, the broken prompting code will be skipped. (This is all documented in [this issue](https://github.com/github/generator-hubot/issues/64) in the `generator-hubot` repo.)
-->

7. **Install hubot-slack dependency and save it to your package.json:**

    `npm install hubot-slack --save`

8. **Remove the `hubot-scripts.json` file**

    In Finder, navigate to the folder for your hubot, locate the `hubot-scripts.json` file, then move it to the trash. This file is no longer supported, and its presence could generate errors later on.

9. **Edit the `package.json` file**
    In your `hubot` folder, open the `package.json` file in your editor.

    Near the bottom of the document, locate the line starting with `"node"` and change the numeric value after it to `"6.9.x"`, then save your changes.

    Now we need to push up our bot to Heroku.

10. **Initialize your local repository:**

    `git init`

11. **Add all of your new files:**

    `git add .`

12. **Commit your new files:**

    `git commit -m "Initial Commit"`

13. **Create a new app on Heroku:**

    `heroku login`

    then enter the email and password you used when setting up your Heroku account.

    You should see a confirmation that you are logged in, showing your email address.

    `heroku create myhubotapp`

    where `myhubotapp` is a unique app name; any app name already used by a heroku user will fail with "Name is already taken." 
    
    If this happens, just repeat the command with a different app name. (The more unusual the name, the more likely it is to be unique.)
    
    Note that your app name can be different than the local Bot Name you  
    specified in Step 6 above.

14. **Add the following configs for Slack:**

    `heroku config:add HEROKU_URL=https://myhubotapp.herokuapp.com`

    where `myhubotapp` is the app name you created and used in the previous step

    `heroku config:add HUBOT_SLACK_TOKEN=YourTokenGoesHere`

    where `YourTokenGoesHere` is the API token provided by the instructor

15. **Push all your code up to Heroku:**

    `git push heroku master`

     Assuming you do not receive an error, proceed to the next step.

16. **Test your bot locally to make sure it's working:**

    `./bin/hubot`

    You'll receive a number of messages, including some warnings, which should not be a problem. When the messages stop, press Enter.
    
    You should have a Node prompt displaying your bot name. 
    
    Press `control` + `C` when you're done, to return to the BASH prompt.

17. **Copy the script.js file from your start files:**

    In Finder, open the start files for today. 
    
    In the `hubot-code` folder, copy the `script.js` file.
    
    Navigate to the `JSD/myhubot/scripts` folder, then paste the file you copied. 

    You should do all your development work in this `scripts.js` file.