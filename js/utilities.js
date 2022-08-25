function clear () {
    document.getElementById ('players-expenses-amount').innerText = '0000';
    document.getElementById ('total-amount').innerText = '0000';
    document.getElementById ('per-player-cost').value = '';
    document.getElementById ('manager-cost').value = '';
    document.getElementById ('coach-cost').value = '';
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