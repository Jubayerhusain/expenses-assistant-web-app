// get the calculate btn 
const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', function () {
    // console.log('calculate btn ia clicked')
    const incomeInput = parseFloat(document.getElementById('income').value);
    const softwareInput = parseFloat(document.getElementById('software').value);
    const coursesInput = parseFloat(document.getElementById('courses').value);
    const internetInput = parseFloat(document.getElementById('internet').value);
    // console.log(incomeInput, softwareInput, coursesInput, internetInput)
    const expenses = softwareInput + coursesInput + internetInput;
    const balance = incomeInput - expenses;

    // remove the hidden class from result summary 
    document.getElementById('results').classList.remove('hidden');

    // get the totalExpenses id from result section and set expenses value 
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = expenses;

    // get the balance from results summary section and set the balance value 
    const totalbalance = document.getElementById('balance');
    totalbalance.innerText = balance;

    // history 
    const createElement = document.createElement('div');
    createElement.className = "bg-white rounded-md p-2 border-l-2 border-indigo-500";
    createElement.innerHTML = `
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">Income: ${incomeInput}</p>
        <p class="text-xs text-gray-500">Expenses: ${expenses}</p>
        <p class="text-xs text-gray-500">Balance: ${balance}</p>
    `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(createElement, historyContainer.firstChild);
})

// get the calculate savings btn

const calculateSavingsBtn = document.getElementById('calculate-savings');
calculateSavingsBtn.addEventListener('click', function () {
    const incomeInput = parseFloat(document.getElementById('income').value);
    const softwareInput = parseFloat(document.getElementById('software').value);
    const coursesInput = parseFloat(document.getElementById('courses').value);
    const internetInput = parseFloat(document.getElementById('internet').value);
    const savingsInput = parseFloat(document.getElementById('savings').value);
    // console.log(incomeInput, softwareInput, coursesInput, internetInput)
    const expenses = softwareInput + coursesInput + internetInput;
    const balance = incomeInput - expenses;

    // calculate saving balance 
    const savingsBalance = (balance * savingsInput) / 100;
    // console.log('Your savings balance: ', savingsBalance);

    // set the savings balance to savings 
    const savings = document.getElementById('savings-amount');
    savings.innerText = savingsBalance;

    // calculate remaining balance 
    const remainingBalance = balance - savingsBalance;

    // set the remaining balance to remainig balance 
    const remaining = document.getElementById('remaining-balance');
    remaining.innerText = remainingBalance;

})

// get the assistan tab 
const assistanTab = document.getElementById('assistant-tab');
assistanTab.addEventListener('click', function () {
    // get the assistan tab and added class list
    document.getElementById('assistant-tab').classList.add(
        'text-white',
        'font-semibold', 
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600');
    // remove a class list from history-tab 
    document.getElementById('history-tab').classList.remove(
        'text-white',
        'font-semibold', 
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600'
    )
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');


})

// get the history tab 
const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', function () {
    // console.log('hey your history tab is clicked')

    // remove the classlist from histoy tab 
    document.getElementById('history-tab').classList.remove('text-gray-600');
    // adding the classlist from history tab 
    document.getElementById('history-tab').classList.add(
        'text-white', 
        'font-semibold', 
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600');

    // get the assistan tab and remove class list
    document.getElementById('assistant-tab').classList.remove(
        'text-white', 
        'font-semibold', 
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600');

    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('history-section').classList.remove('hidden');

})