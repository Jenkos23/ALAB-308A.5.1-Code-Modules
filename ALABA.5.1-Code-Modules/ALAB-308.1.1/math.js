// Part 2: Practical Math


export const AvgCostperFuel = 3;  //Calculated in dollars
export const estFuelBudg = 175;  //Calculated in dollars


// function to calculate how much it will cost for each specific miles per Hour 
export function costPerMiles(distanTotalTrip,gallonsPerHour){
    
    return distanTotalTrip/gallonsPerHour* AvgCostperFuel;
}



// function to estimate how  many gallons will I need to travel for duration of 1500 miles  
export function gallonPerMiles(distanTotalTrip, galonPerHour){
    return distanTotalTrip/galonPerHour;

}



//Function how long it will take to travel in hours

export function travelDuration(distanTotalTrip, miles){
    return distanTotalTrip/miles

}





