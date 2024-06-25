// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitsArray = [
    { name: 'Apple', color: 'Red', pricePerKg: 100 },
    { name: 'Banana', color: 'Yellow', pricePerKg: 70},
    { name: 'Pomegranate', color: 'Red', pricePerKg: 200}
];

const getFruitDetails = (fruitName) => {
    const fruits = {};
    fruitsArray.forEach(fruit => {
        fruits[fruit.name] = {
            color: fruit.color,
            pricePerKg: fruit.pricePerKg
        };
    });
    return fruits[fruitName];
};

const fruitDetails = getFruitDetails('Apple');
console.log(fruitDetails);
