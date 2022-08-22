function playerListCheck(idName) {
    const playersList = document.querySelectorAll('li');

    //placing name in selected-v list
    for (let i = 1; i <= playersList.length; i++) {
        if (playersList[i - 1].innerText.includes('Player-' + i + '')) {
            const getId = playersList[i - 1].getAttribute('id');
            const getName = getText(idName);
            setText(getId, getName);
            document.getElementById(idName + '-' + 'btn').setAttribute('disabled', true);
            document.getElementById ('players-expenses-amount').innerText = '0000';
            document.getElementById ('total-amount').innerText = '0000';
            document.getElementById ('per-player-cost').value = '';
            document.getElementById ('manager-cost').value = '';
            document.getElementById ('coach-cost').value = '';
            break;
        }
    }

    //validation for more than 5 players selection
    const myArray = coverArrayLikeObjectToArray (playersList);
    
    let count = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].includes('player') === false) {
            count++;
            if (count === 5) {
                count2++;
                if (count2 > 1) {
                    alert('5 Players Already Selected');
                }
            }
        }
    }
}

// convert array like object to original array 
function coverArrayLikeObjectToArray (arrayLikeObject) {
    const updatedPlayerListArray = [];
    for (let i = 0; i < arrayLikeObject.length; i++) {
        updatedPlayerListArray.push(arrayLikeObject[i].innerText.toLowerCase());
    }
    return updatedPlayerListArray;
}


function getText (id) {
    const getTextElement = document.getElementById (id);
    const getText = getTextElement.innerText;
    return getText;
}

function setText (id, value) {
    const setTextElement = document.getElementById (id);
    setTextElement.classList.remove('text-secondary');
    setTextElement.classList.add('text-white');
    setTextElement.innerText = value;
}

function getInputValueAsNumber (id) {
    const inputElement = document.getElementById (id);
    const inputVlueString = inputElement.value;
    const inputValue = parseFloat (inputVlueString);
    return inputValue;
}

function getTextValueAsNumber (id) {
    const textField = document.getElementById (id);
    const textAsString = textField.innerText;
    const textNumber = parseFloat (textAsString);
    return textNumber;
}