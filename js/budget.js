// Budget Calculation

//calculate button event
document.getElementById('total-cost-of-each-players-btn').addEventListener('click', function () {
    const playersList = document.querySelectorAll('li');
    const myArray = coverArrayLikeObjectToArray(playersList);
    
    let count = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].includes('player') === false) {
            count++;
        }
    }
    
    //Only Selected Player cost Calculation
    const perPlayerCost = getInputValueAsNumber('per-player-cost');

    if ((isNaN(perPlayerCost)) || (perPlayerCost < 0)) {
        alert('Eneter valid Amount');
        document.getElementById('per-player-cost').value = '';
        document.getElementById('players-expenses-amount').innerText = '0000';
    }
    else if (count === 0) {
        alert('Select any Player')
        document.getElementById('players-expenses-amount').innerText = '0000';
    }
    else {
        const totalCostOfSelectedPlayers = perPlayerCost * count;
        document.getElementById('players-expenses-amount').innerText = totalCostOfSelectedPlayers;
    }
    
})

//calculate-total button event
document.getElementById('total-cost-btn').addEventListener('click', function () {
    const playerExpenses = getTextValueAsNumber('players-expenses-amount');
    const managerCost = getInputValueAsNumber('manager-cost');
    const coachCost = getInputValueAsNumber('coach-cost');
    
    //validation
    if ((isNaN(managerCost)) || (isNaN(coachCost)) || (managerCost < 0) || (coachCost < 0)) {
        alert('Enter a valid amount for both manager and coach cost');
        document.getElementById('manager-cost').value = '';
        document.getElementById('coach-cost').value = '';
        document.getElementById('total-amount').innerText = '0000';
    }
    
    else {
        //validation
        if (playerExpenses === 0) {
            alert('First Calculate Player expenses!');
            document.getElementById('manager-cost').value = '';
            document.getElementById('coach-cost').value = '';
            document.getElementById('total-amount').innerText = '0000';
        }
        else {
            //calculation
            const totalCost = playerExpenses + managerCost + coachCost;
            document.getElementById('total-amount').innerText = totalCost;
        }
    }
})