// Task 1: Create a multi-dimensional array (2D array) with books and movies
const library = [
    ["The Hobbit", "Harry Potter", "1984"], // Shelf 1 (Books)
    ["The Matrix", "Inception", "Interstellar"], // Shelf 2 (Movies)
    ["Avengers", "The Dark Knight", "Spider-Man"] // Shelf 3 (Movies)
];

// Task 2: Access and log all elements using bracket notation
console.log(library[0][0]); // The Hobbit
console.log(library[0][1]); // Harry Potter
console.log(library[0][2]); // 1984
console.log(library[1][0]); // The Matrix
console.log(library[1][1]); // Inception
console.log(library[1][2]); // Interstellar
console.log(library[2][0]); // Avengers
console.log(library[2][1]); // The Dark Knight
console.log(library[2][2]); // Spider-Man

// Task 3: Access elements dynamically using variables
let row = 1; // Second shelf
let item = 2; // Third item on that shelf
console.log(`Using variables: ${library[row][item]}`); // Interstellar

row = 0;
item = 1;
console.log(`Using variables: ${library[row][item]}`); // Harry Potter

row = 2;
item = 0;
console.log(`Using variables: ${library[row][item]}`); // Avengers

// Task 4: Loop through and print all items on the second shelf
console.log("All items on the second shelf:");
for (let i = 0; i < library[1].length; i++) {
    console.log(library[1][i]);
}
