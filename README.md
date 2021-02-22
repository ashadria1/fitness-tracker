

<h1 align="center">Fitness Tracker 👋</h1>

![badge](https://img.shields.io/badge/license-ISC-brightgreen)<br />

## Table of Contents
- [Description](#Description)
- [User Story](#Story)
- [Business Context](#Context)
- [Acceptance Criteria](#Criteria)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributors)
- [Tests](#Tests)
- [Questions](#Issues)
- [Relevant Links](#Links)
- [Screenshots](#Screenshots)

## Description
🔍 For this project, I have created a workout tracker using NoSQL. This project requires a user to create a Mongo database with a Mongoose schema, and handle routes with Express.  To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application.

## Story

* As a user, I want to be able to view, create, and track daily workouts.  I want to be able to log multiple exercises in a workout on a given day.  I should also be able to track the name, type, weight, sets, reps, and duration of exercise.  If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

* Add exercises to the most recent workout plan.

* Add new exercises to a new workout plan.

* View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

* View the total duration of each workout from the past seven workouts on the `stats` page.


## Installation
💾 
* A mongodb server is required to function properly. Either set the MONGODB_URI environment variable or modify the connection uri in server.js to your mongodb server.
* clone the repo to your local machine
* `cd project_dir`
* `npm install`

## Usage
💻 `npm start`

## License
![badge](https://img.shields.io/badge/license-ISC-brightgreen)
<br />

This application is covered by the ISC license. 

## Contributing
👪 No contributors at this time.

## Tests
✏️ No testing.

## Questions
✋ Report issues to me on Github.<br />
<br />

Find me on GitHub: [Adrian Ash](https://github.com/ashadria1)<br />
<br />

✉️ Email me with any questions: ashadria@gmail.com<br /><br />

## Links

Please visit these links to view the application:

* The URL to the deployed application on Heroku:

https://floating-scrubland-11446.herokuapp.com/


* The URL to the GitHub repository:

https://github.com/ashadria1/fitness-tracker

## Screenshots

![Screenshot of input page.](assets/Screenshot1.png?raw=true "Screenshot of input page.")
<br />

![Screenshot of fitness dashboard.](assets/Screenshot2.png?raw=true "Screenshot of fitness dashboard.")
