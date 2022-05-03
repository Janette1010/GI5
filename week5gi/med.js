/*
MEDIUM: Write a function that would allow you to do this:
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"
*/
//~ Please ignore this first attempt in the notes I just need it to look back and see how to acatully figure it out <3 
/*const cutPizzaSlices = function (slices) {
    return slices / 2;
}
const sharePizza = function (pizzaslices) {

    const shareSlices = cutPizzaSlices(pizzaslices);

    const pizza = `Each person gets ${shareSlices} slices of pizza`;
    return pizza;
};

console.log(sharePizza(8));*/

function cutPizzaSlices(slices) {
    return (people) => {
        const shareSlices = (slices / people).toFixed(2);
        return `Each person gets ${shareSlices} slices of pizza`;
    }
}
const sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));