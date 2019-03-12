
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        // need one of these for each survey question
        {questionContents: 'What is your name? '},
        {questionContents: 'What is your Title or Position in your Company? '},
        {questionContents: 'What is your Company name? '},
        {questionContents: 'What is your Email Address? '},
        {questionContents: 'How many employees does your Company have?  '},
        {questionContents: 'How many clients or contracts does your Company have? '},
        {questionContents: 'How many years has your Company been in operation? '},
        {questionContents: 'What stage is your business in? '},
        {questionContents: 'What industry does your Company operate in?'},
        {questionContents: 'What were your Company\'s Total Annual Sales last year?'},
        {questionContents: 'What were your Company\'s total Cash Sales last year? (Sales where you received cash payment and were not made on credit)'},
        {questionContents: 'What were your Company\'s Total Returns, Discounts, and Trade Spend last year? (Trade Spend is common in the Consumer Packaged Good Industry including things like coupons and shelf displays).'},
        {questionContents: 'What were your Company\'s Total Cost of Goods Sold (COGS) last year? (COGS are direct materials and direct labor directly traceable to the production of what your company sells).'},
        {questionContents: 'What were your Company\'s Total Operating Expenses (OPEX) last year? (OPEX are expenses to run daily operations not tied directly to production. Examples are Sales and Marketing, Rent, Utilities, Insurance, etc.)'},
        {questionContents: 'What was your Company\'s Total Interest Expense last year? (Interest Expense is what your company pays on any borrowings which include loans, convertible debt, and lines of credit).'},
        {questionContents: 'What was your Company\'s Total Net Income last year? (Net Income is also known as the "bottom line" and refers to the profit left after all expenses). '},
        {questionContents: 'What was the balance of your Total Current Assets at the END of last year? (Current Assets are all Assets which can be sold or easily converted to cash within the next year).'},
        {questionContents: 'What was the balance of your Total Current Liabilities at the END of last year? (Current Liabilities are any debts or financial obligations your company is required to pay within the next year).'},
        {questionContents: 'What was the balance of your Total Accounts Receivable (A/R) at the BEGINNING of last year? (A/R is the money your customers owe your company for goods or services you have delivered but have yet to be paid for). '},
        {questionContents: 'What was the balance of your Total Accounts Receivable at the END of last year?'},
        {questionContents: 'What was the balance of your Total Accounts Payable (A/P) at the BEGINNING of last year? (A/P is the money you owe your suppliers, creditors, and vendors, for things such as raw materials as well as the cleaning company that washes staff uniforms).'},
        {questionContents: 'What was the balance of your Total Accounts Payable at the END of last year? '},
        {questionContents: 'What was the balance of your Total Inventory at the BEGINNING of last year?'},
        {questionContents: 'What was the balance of your Total Inventory at the BEGINNING of last year?'},
        {questionContents: 'What was the balance of your Total Inventory at the END of last year?'},
      ])
      .then(() => {
        return knex.raw("SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))")
      })
    })
}
