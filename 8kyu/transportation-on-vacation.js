/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

// MY SOLUTION
function rentalCarCost(d) {
    let baseRate = d * 40;
    if(d >= 7) {
        return baseRate - 50;
    } else if(d >= 3) {
        return baseRate - 20;
    } else {
        return baseRate;
    }
}

function rentalCarCost2(d) {
    let baseRate = d * 40;
    return d >= 7 ? baseRate - 50 :
            d >= 3 ? baseRate - 20 : baseRate;
}

// OTHER SOLUTIONS
const rentalCarCost3 = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));