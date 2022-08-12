function animalAndFood(x, y) {
    animal = [...x];
    food = [...y];
    animalPop = animal.pop();
    animalShift = animal.shift();
    animalPopShift = animalPop.toLowerCase + animalShift.toLowerCase;
    foodPop = food.pop();
    foodShift = food.shift();
    foodPopShift = foodPop.toLowerCase + foodShift.toLowerCase;

    if (animalPopShift === foodPopShift) {
        return true;
    } else {
        return false;
    }
}

console.log(animalAndFood('caT', 'Carrot'));
