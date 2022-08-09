function animalAndFood(x, y) {
    animal = [...x];
    food = [...y];
    animalPop = animal.pop();
    animalShift = animal.shift();
    animalPopShift = animalPop + animalShift
    foodPop = food.pop();
    foodShift = food.shift();
    foodPopShift = foodPop + foodShift

    if (animalPopShift === foodPopShift) {
        return true;
    } else {
        return false;
    }
}

console.log(animalAndFood('cat', 'carrot'));

