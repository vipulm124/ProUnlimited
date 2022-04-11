var maxMoney = (truckCapacity, itemsForSale, itemsPriceString) => {

    let itemsArray = itemsPriceString.split(" ");
    //get a number array from the input string
    let intArray = itemsArray.map(convertToNumber);

    //we can also use a sorting technique here(preferable)
    intArray.sort();
    let sum = 0;

    for(let index = 0; index < truckCapacity;index++){
        //as per the use case, John can make money only when item price is -ve, i.e. he is getting money for picking items
        if(intArray[index] < 0){
            sum += intArray[index];
        }
    }

    return sum;

}

function convertToNumber(num){
    return Number(num);
}


var maxProfit = maxMoney(2,2,"40 60 1 2 3 4 8");