var menu = [ 
position = {
    name: 'Margherita',
    ingredients: [' ser', ' pomidor'], 
        s: {
            price: 17,
            size: 25
        },
        m: {
            price: 24,
            size: 35
        },
        l: {
            price: 31,
            size: 45
        },                     
},
position = {
    name: 'Funghi',
    ingredients: [' ser', ' pomidor', ' pieczarki'], 
        s: {
            price: 17,
            size: 25
        },
        m: {
            price: 24,
            size: 35
        },
        l: {
            price: 31,
            size: 45
        },                         
},
];

var menuElement = position.name + position.ingredients + position.s.price + position.s.size + position.m.price + position.m.size + position.l.price + position.l.size;


function menuListcreator () {
    for (var i=0; i<menu.length; i++) {     
    }
    return ; 
}
// console.log(menuElement);

document.getElementsByClassName("pizza").innerHTML = menuElement;

 
        // document.querrySelector("Ma").innerHTML = name.examplePosition ()          
// function myFunction () {
//     var menuPosition = document.getElementById("position-1").document.querySelectorAll("pizza");
// }


// document.getElementById("pizzaName").innerHTML = menu.examplePosition ();
