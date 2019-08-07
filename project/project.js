storagebank = [{
    id: 2,
    name: 'GPU',
    quantity: 3,
    cost: 15
}, {
    id: 2,
    name: 'CPU',
    quantity: 10,
    cost: 100
}, {
    id: 3,
    name: 'RAM',
    quantity: 50,
    cost: 15
},];
storagebasket = [];

document.addEventListener("DOMContentLoaded", Render);

function Render() {
    ClearStorage();

    storagebank.forEach(item => FillStorage(item, 'storage_1'));

    storagebasket.forEach(item => FillStorage(item, 'storage_2'));

    document.getElementById('summ').innerText = Totalcost();

}

function Totalcost() {
    let cost = 0;
    storagebasket.forEach(item => {
        cost += item.cost * item.quantity;
    });
    return cost;
}

function ClearStorage() {
    document.getElementById('storage_1').innerHTML = '';
    document.getElementById('storage_2').innerHTML = '';
}

function FillStorage(item, place) {

    const line = document.createElement("tr");
    line.classList.add('a_1','item');

    const cell = document.createElement("td");
    cell.innerText = item.name;
    cell.classList.add('title');

    const cell_1 = cell.cloneNode(true);
    cell_1.innerText = item.quantity;

    const cell_2 = cell.cloneNode(true);
    cell_2.innerText = item.cost;

    document.getElementById(place).appendChild(line);
    line.appendChild(cell);
    cell.parentNode.appendChild(cell_1);
    cell.parentNode.appendChild(cell_2);

    line.addEventListener('click', function () {
        EventLine(item,place);
    });
}

function EventLine(item,place) {

    let c = 0;

    if (storagebasket.length === 0) {
        StoragePush(item, storagebasket)
    } else {
        equal(item, c)
    }

    if (item.quantity > 0) {
        item.quantity--;
    }

    Render();
}

function equal(item, c) {
    for (const basketItem of storagebasket) {
        if (basketItem.id === item.id && item.quantity > 0) {
            basketItem.quantity++;
            c++;
        }
    }
    if (c === 0 && item.quantity > 0) {
        StoragePush(item, storagebasket)
    }

}

function StoragePush(item, mass) {
    mass.push({
        id: item.id,
        name: item.name,
        quantity: 1,
        cost: item.cost
    })
}

