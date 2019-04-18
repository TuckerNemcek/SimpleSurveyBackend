


The app working by pulling from a list of questions in seeds/01_questions.js. For every question it makes
a new form with the same number as that question. The question answers are then pulled into an array which
is stored in local storage and passed onto the next page. When it gets to the final page of the
survey all of those answers are run through calculations in order to give an output.

I ran into trouble with posting the data. You will find my post route commented out in balanceSheet.js
I kept running into a CORS error which I ultimately could not solve. When it was working (on my machine)
it was saving all answers and associating them with the email that the survey taker had provided.

Best of luck to the next person working on this! 
