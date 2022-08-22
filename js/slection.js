//Player Selection code
let count2 = 0;
document.getElementById('all-players-container').addEventListener('click', function (event) {
    const selectBtnElement = event.target;
    const selectBtnText = event.target.innerText;
    const playerName = selectBtnElement.parentNode.firstChild.nextSibling.innerText;
    const playerNameLowerCase = playerName.toLowerCase();

    if ((selectBtnText === 'Select') && (playerNameLowerCase.includes('messi'))) {
        playerListCheck('messi');
    }

    else if ((selectBtnText === 'Select') && (playerNameLowerCase.includes('neymar'))) {
        playerListCheck('neymar');
    }

    else if ((selectBtnText === 'Select') && (playerNameLowerCase.includes('mbappe'))) {
        playerListCheck('mbappe');
    }

    else if ((selectBtnText === 'Select') && (playerNameLowerCase.includes('vitor'))) {
        playerListCheck('vitor');
    }

    else if ((selectBtnText === 'Select') && (playerNameLowerCase.includes('ramos'))) {
        playerListCheck('ramos');
    }
    else if ((selectBtnText === 'Select') && (playerNameLowerCase.includes('renato'))) {
        playerListCheck('renato');
    }
    else {
        alert ('Please Click on any Active Select Button');
    }

});