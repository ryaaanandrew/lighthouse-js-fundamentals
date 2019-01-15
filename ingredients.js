var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list]+"- while loop");
  list++;
}

// Write a for loop that prints out the contents of ingredients:

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]+" - for loop");
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (i = ingredients.length; i >=0; i--) {
  console.log(ingredients[i]+" - backwards");
}