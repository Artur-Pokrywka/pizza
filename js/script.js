"use strict";
function getTemplateForPizzaData(data) {
    return `
            <div class="col-sm-5">
                <h3 class="pizzaName" id="${data.name}">${data.name}</h3>
                <p class="ingredientsList">${data.ingredients.join(', ')}</p>
            </div>
            <div class="col-sm-7 size-price">
                <a href="#"><button class="btn btn-info btn-lg s-price">${data.s.price} zł</button>
                    <div class="pizza-size pizza-size-s">${data.s.size} cm</div>
                </a>
                <a href="#"><button class="btn btn-info btn-lg m-price">${data.m.price} zł</button>
                    <div class="pizza-size pizza-size-m">${data.m.size} cm</div>
                </a>
                <a href="#"><button class="btn btn-info btn-lg l-price">${data.l.price} zł</button>
                    <div class="pizza-size pizza-size-l">${data.l.size} cm</div>
                </a>
            </div>
    `;
}

function renderPizzaMenu () {
    var pizzaMenuContainer = document.getElementById('pizza-menu');

    for (var i = 0; i < menu.length; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row', 'main-row');
        rowElement.innerHTML = getTemplateForPizzaData(menu[i]);
        pizzaMenuContainer.appendChild(rowElement);
    }
}
renderPizzaMenu();
 
 