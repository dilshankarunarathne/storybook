# StoryBook

[![Version](https://img.shields.io/badge/version-1.0-brightgreen.svg)](https://pypi.org/project/ad-topic-recommender/)
[![License](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-blue.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Overview

Storybook is a social media web application built as a group project for CS3122 - Advanced Database Management Systems.
This project demonstrates the application of database concepts and technologies in a real-world context.

## Features

Users can:

- Register and create profiles
- Share posts with text and optional images
- Comment on other users' posts
- Like posts

## API Documentation

The Postman API playground is available at [Postman](https://www.postman.com/karunarathne/workspace/storybook/overview).
API docs are available at [/docs](https://github.com/dilshankarunarathne/storybook/tree/master/docs).

## Installation

To install and run StoryBook, follow these steps:

1. Clone the repository: `git clone https://github.com/dilshankarunarathne/storybook.git`
2. Navigate to the project directory: `cd storybook`
3. Install dependencies: `cd server && npm install && cd ../client && npm install && cd ..`
4. Start the server: `cd server && npm start`
5. Start the client: `cd client && npm start`

## Project Structure

```
storybook-master
│   .gitignore
│   docker-compose.yml
│   LICENSE
│   README.md
│   swagger.json
│
├───.github
│       FUNDING.yml
│
├───client
│   │   .gitignore
│   │   .gitkeep
│   │   Dockerfile
│   │   package-lock.json
│   │   package.json
│   │   README.md
│   │
│   ├───public
│   │   │   index.html
│   │   │   style.css
│   │   │
│   │   └───assets
│   │           avatar_default.jpg
│   │           cover1.jpg
│   │           cover2.jpg
│   │           email-veri1.jpg
│   │           like.png
│   │           like1.jpg
│   │
│   └───src
│       │   App.css
│       │   App.js
│       │   App.test.js
│       │   index.css
│       │   index.js
│       │   logo.svg
│       │   reportWebVitals.js
│       │   setupTests.js
│       │
│       ├───api
│       │       comments.js
│       │       post.js
│       │       profile.js
│       │       reaction.js
│       │       users.js
│       │
│       ├───Components
│       │   ├───edit_profile
│       │   │       editProfile.css
│       │   │       EditProfile.jsx
│       │   │
│       │   ├───feed
│       │   │       feed.css
│       │   │       Feed.jsx
│       │   │
│       │   ├───landingPage
│       │   │       landingPage.css
│       │   │       LandingPage.jsx
│       │   │
│       │   ├───login
│       │   │       login.css
│       │   │       Login.jsx
│       │   │
│       │   ├───post
│       │   │       post.css
│       │   │       Post.jsx
│       │   │
│       │   ├───profile
│       │   │       profile.css
│       │   │       Profile.jsx
│       │   │
│       │   ├───register
│       │   │       register.css
│       │   │       Register.jsx
│       │   │
│       │   ├───share
│       │   │       share.css
│       │   │       Share.jsx
│       │   │
│       │   └───topbar
│       │           topbar.css
│       │           Topbar.jsx
│       │
│       ├───context
│       │       AuthContext.js
│       │       AuthProvider.js
│       │       PrivateRoute.js
│       │
│       └───pages
│           ├───forgot
│           │       forgot.css
│           │       Forgot.jsx
│           │
│           ├───home
│           │       home.css
│           │       Home.jsx
│           │
│           ├───reset
│           │       reset.css
│           │       Reset.jsx
│           │
│           └───success
│                   success.css
│                   Success.jsx
│
├───database
│       .gitkeep
│       database.sql
│       triggers.sql
│
├───docs
│       .gitkeep
│       index.html
│
└───server
│   .gitignore
│   app.js
│   db.js
│   Dockerfile
│   package-lock.json
│   package.json
│   process.env
│   README.md
│
├───controllers
│   │   authController.js
│   │   commentController.js
│   │   homeController.js
│   │   profileController.js
│   │   reactController.js
│   │
│   └───uploads
│           .gitkeep
│
├───middleware
│       authMiddleware.js
│       mailer.js
│
├───models
│       Comment.js
│       Post.js
│       React.js
│       User.js
│
└───static
    .gitkeep
    account-verification-mail.html
    forgot-password-mail.html
```

## Contributions

We welcome contributions to this project. Please check the contribution guidelines for more information.

The group members are:

- EUSL/TC/IS/2019/COM/24&nbsp;&nbsp;  [Dilshan](https://github.com/dilshankarunarathne)
  - Server Application
  - Database
  - Client-Server Integration
- EUSL/TC/IS/2019/COM/109 [Tharuka](https://github.com/NadeeTharuka)
  - Client Application
- EUSL/TC/IS/2019/COM/69&nbsp;&nbsp; [Isuru](https://github.com/isurudayananda)
  - Client Application
- EUSL/TC/IS/2019/COM/49&nbsp;&nbsp; [Udari](https://github.com/UdariAdhikaram)
  - Client Application
- EUSL/TC/IS/2019/COM/35&nbsp;&nbsp; [Madhawa](https://github.com/MadhawaRathnayaka)
  - Documentation
- EUSL/TC/IS/2019/COM/11&nbsp;&nbsp; [Abiram]()
  - Client Application
- EUSL/TC/IS/2019/COM/23&nbsp;&nbsp; [Sakaniya](https://github.com/sakapanchu)
  - Client Application

## License

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].  
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]  
[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]  

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
