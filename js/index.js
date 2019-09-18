// var - function level scoping. Can change value
// let - block level scoping. Value can change
let len = 10

function functionScope() {
    for(var index = 0; index < len; index++) {
        var inside = index;
        console.log(inside);
    }
    console.log(inside);
}

function blockScope() {
    for (let index = 0; index < len; index++) {
        let inside = index;
        console.log(inside);
    }
    console.log(inside);
}