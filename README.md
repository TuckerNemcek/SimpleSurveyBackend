# Simple Startup Survey

https://simple-startup-survey-backend.herokuapp.com/GeneralQuestions/generalQuestions.html

This is a survey designed for [Simple Startup](https://simplestartup.com/), a financial consulting company in Boulder. It asks a series of questions and then tell you about the financial health of your business based on the results of the questions. The service is free, and helps business owners gauge the health of their business and Simple Startup get new customers.

The app pulls the questions from a database to make it easier to update the questions in the future. It has error handling to make sure the client is filling out the survey correctly. Originally it was supposed to save customer data as well, but adding Auth or OAuth was outside of the scope of the project, so as of now it does not, but is set up to do so easily in the future if another dev comes on continue work on the project

## How to use the site
Simply click the link and then begin inputting your information.

Please have your Income Statement (P&L) and Balance Sheet ready to fill this survey.

After the fourth page is where you will see the check on how healthy your business is.

## How to download
You will need NodeJS

Navigate to your preferred local directory

clone the repo

git clone https://github.com/TuckerNemcek/SimpleSurveyBackend.git

npm install

if you want to edit the questions you will want to edit the seeds folder

## Built With

* JavaScript
* Express
* Node.js
* HTML / CSS
