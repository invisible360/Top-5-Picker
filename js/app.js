
//making cards class - blue print of every cards
class Cards {
    constructor(image, name, goals, assist, buttonId) {
        this.image = image;
        this.name = name;
        this.goals = goals;
        this.assist = assist;
        this.buttonId = buttonId
    }
}
//making individual player
const p1 = new Cards('img/messi.png', 'Lionel Messi', 30, 120, 'messi');
const p2 = new Cards('img/neymar.png', 'Neymar Jr', 28, 110, 'neymar');
const p3 = new Cards('img/mbappe2.png', 'Kylian Mbappe', 20, 90, 'mbappe');
const p4 = new Cards('img/vitor.png', 'Vitor Machado', 21, 100, 'vitor');
const p5 = new Cards('img/ramos.png', 'Sergio Ramos', 24, 105, 'ramos');
const p6 = new Cards('img/renato.png', 'Renato Sanches', 22, 100, 'renato');
const p7 = new Cards('img/renato.png', 'test1 Sanches', 22, 100, 'test1');
const p8 = new Cards('img/renato.png', 'test2 Sanches', 22, 100, 'test2');

const array = [p1, p2, p3, p4, p5, p6, p7, p8];

//dynamic card
const playerCards = obj => {
    const objToString = JSON.stringify (obj);
    const playerContainer = document.getElementById('all-players-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col">
        <div class="card bg-black text-white text-center border border-secondary h-100"
            style="border-radius: 0 ;">
            <img class="img-fluid" src=${obj.image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 id="messi" class="card-title">${obj.name}</h5>
                <p class="card-text">
                <div class="d-flex align-items-center justify-content-evenly text-white-50">
                    <p>${obj.goals} Goals</p>
                    <p>&bull;</p>
                    <p>${obj.assist} Assist</p>
                </div>
                </p>
                <button id="${obj.buttonId+'-btn'}" class="btn btn-primary" onclick = 'selectPlayer (${objToString})'>Select</button>
            </div>
        </div>
    </div>
    `
    playerContainer.appendChild(div);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    playerCards (element);
}

let count = 0;
const selectPlayer = (obj) => {
    const listContainer = document.getElementById ('player-name-container');
    const li = document.createElement ('li');
    li.innerHTML =`
    ${obj.name}
    `
    const items = document.querySelectorAll('li');

    if (items.length > 4) {
        alert ('5 Already Selected');
        return;
    }

    li.setAttribute ('id', obj.buttonId)
    listContainer.appendChild (li);

    document.getElementById(obj.buttonId+'-btn').setAttribute('disabled', true);
    clear ();


}