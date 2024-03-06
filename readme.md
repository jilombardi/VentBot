# VentBot

## What is this bot?

    This bot is a genshin bot
    It can currently do simple commands, such as /help which outputs a list of commands and /user
    which outputs the user that entered the command.
    The intended function of the bot is to output information about genshin, however, I have not
    added this is as of yet.





## downloading repo:
-------------------------
(please let me know if anything is missing!!!!)

## Requirments
    1. Create Discord bot application 
    2. Add bot to discord server
    3. download node, discord.js, axios and dotenv
    4. .env file





## 1 - Creating discord bot application

    1. go to this website and log into your account: https://discord.com/developers/applications 
    2. Click "create new application" and name your bot


## 2 - Adding bot to discord server

    1. go to your bot page on the developer's portal
    2. Go to the OAuth page
    3. scroll to the URL Generator tab at the bottom
    4. Under the "scopes" box, check the "bot" option
    5. A "bot permissions" box at the bottom should appear
    6. Check which options your bot needs to function 
        -I just did the 'administrator' option since I put my bot in a private server
        -However, if you do not want to do admin, these are the minimum amount of permissions:
            -manage roles
            -manage channels
            -read messages/ view channels
            -send messages
            -read message history
            -use slash commands
        -Note that there may be another required permission I missed!! 
    7. Copy and paste the generated link into a new tab
    8. This should lead you to a page where you can add your bot to your server

If you're lost, go to this website: https://discordpy.readthedocs.io/en/stable/discord.html
It goes through how to make a bot account and how to add it to a server.





## 3 - download node, discord.js, axios and dotenv
    1. clone project and put it into a project folder 
    2. cd into your project folder
    3. type the following command into terminal: 'npm init'
    4. Install discord.js, axios, and dotenv by typing the following command into terminal: 'npm install discord.js axios dotenv'

Note: I do not have a .env.sample file right now, so you will have to make this file once the project is copied. See description below ('4 - .env file') to know what to put in this file.

If you're lost, go to this website: https://buddy.works/tutorials/how-to-build-a-discord-bot-in-node-js-for-beginners
It goes through the entire process of making a disord bot, part 2 describes how to download everything
 

## 4 - .env file

    1. Create file in project folder called .env
    2. ***** If you plan to post this on github, add a '.gitignore' file. In this file, type '.env' *********
    3. paste the following into the file:

    CLIENT_TOKEN= <>
    GUILD_ID = <>
    CLIENT_ID = <>

        # CLIENT_TOKEN
            1.The client token is your bot's token. Go to https://discord.com/developers/applications > bot application page > Bot
            2.Click the 'Reset Token' button and 'copy' (if the code is already there, you can just copy it, no need to reset)
            3. Paste this token into Client_TOKEN

        For the next two IDs, you will need to the following before you can copy them:
            1. Go to discord (regular discord, not the developers portal!)
            2. Go to settings > advanced
            3. Check the option 'developer mode'    
            ** This will allow you to see the following IDs! Without this, it will be invisible **

        # GUILD_ID
            1. The guild ID is the unique ID of a discord server
            2. Go to discord (again, not the developer's portal!! Regular discord)
            3. Go to the server you added your bot to (if you have your bot in multiple servers, just pick one)
            4. Go to server settings > widget
            5. There should be a box labeled 'server ID'
            6. copy the ID and paste it into GUILD_ID

        #CLIENT_ID
            1. This is your ID!
            2. Click on your profile picture on the bottom left
            3. The very last option of the pop-up tab should be 'copy user ID'
            4. copy this and paste it into CLIENT_ID

Note: the CLIENT_TOKEN is used to log into your bot. GUILD_ID and CLIENT_ID are used for slash commands.





That should be everything you need to operate your discord bot using my project file. 
Of course, I may have missed something, so please let me know if this is the case.