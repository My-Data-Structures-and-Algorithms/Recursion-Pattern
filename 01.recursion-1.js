let countDown = (num) => {
    if (num <= 0) { //base case
        console.log('All done');
        return;
    }
    console.log(num);
    num --; //change in data
    countDown(num); //recursive call
}

countDown(5);

let sumRange = (num) => {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(5));

let factorial = (num) => {
    if (num ===1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5));