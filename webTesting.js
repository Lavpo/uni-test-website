// Playing with "time" in javascript

// JavaScript Date objects represent a single moment in time
// in a platform-independent format. Date objects encapsulate 
// an integral number that represents milliseconds since the midnight 
// at the beginning of January 1, 1970, UTC (the epoch).

//---- Several ways of setting time -----
console.log(new Date());

// basic format
console.log(new Date(2005, 4, 14, 23, 5, 55));

// iso 8601 format
console.log(new Date('2007-02-15T04:15:25'));

// unix format
console.log(new Date(1769530169 * 1000));

//Date object can represent 10 000 000 milion days
//Beyond specific range, date can't be counted and result in showing an error 
console.log(new Date(8.64e15 + 1).toString()); //invalid date



const date = new Date();
console.dir(date);

// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(date.getYear()); //getYear is an outdated way of getting year 


let date1 = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let dayone = new Date(year, month, 1).getDay(); //getDay returns the day of the week

let lastdate = new Date(year, month + 1, 0).getDate(); //getDate returns the day of the month
// normally counting starts from apr 1 - 31, but it's also possible to assign 0 value that will point
// to the previous day of the month

let lastday = new Date(year, month + 1, 0).getDay();

let monthslastdate = new Date(year, month, 0).getDate(); // gives the months last date

// console.log("-----------------------------------------------------------");
// console.log("on which day of the week does the first month fall: "+ dayone);
console.log("amount of day in the current month: "+ lastdate);
// console.log("in which day of the week does the month end: "+ lastday);
// console.log("months last date: "+ monthslastdate);

let i = 10;
// console.log("The value of i equals: "+ i++);
// console.log("The value of i (after) equals "+ i);
// console.log("The value of i equals: "+ ++i);



// for (let i = 1; i < 10; i++){
//     console.log(i);
// }
// for (let i = 1; i < 10; ++i){
//     console.log(i);
// }