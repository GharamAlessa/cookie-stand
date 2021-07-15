'use strict';

// let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }


//   let  seatle={
//     name:"seattle",
//     min:23,
//     max:65,
//     avg:6.3,
//     Custperhour:[],
//     avgcook:[],
//         getRandCust:function (){
//         for (let i = 0; i < hours.length; i++) {
//             this.Custperhour.push(random(this.min,this.max)); 
//         }},


//        getavgcookie:function(){

//             for (let i = 0; i < hours.length; i++) {
//                 this.avgcook.push(random(this.main,this.max)); 


//         }





//     }

//  //inside the method git custmer per hour i need to write for loop
//  //inside the for loop i need to call random with the min and max of the city 
//  //we need to push them into the empty Array
//  //muliplay the avg with the num of custmer 
//  seatle.getRandCust();
//  console.log(seatle.Custperhour)
// seatle.getavgcookie();
// console.log(seatle.avgcookie);

// let hours=['city','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function SalmonCookies(cityName, minCustumer, maxCutumer, cookiesAvg) {

    this.cityName = cityName;
    this.minCustumer = minCustumer;
    this.maxCutumer = maxCutumer;
    this.cookiesAvg = cookiesAvg;
   this.totalCookiesPerDay=0;
   this.cookiesPerHours=[];
   cookiesPerHour=[];
   
}

//prototype*****
 SalmonCookies.prototype.total=function() {
     this.total=
 }

SalmonCookies.prototype.calcHours =


let seatle = new SalmonCookies('Seatle', '23', '65', '6.3');

let tokyo = new SalmonCookies('Tokyo', '3', '24', '1.2');

let dubi = new SalmonCookies('Dubi', '11', '24', '3.7');

let paris = new SalmonCookies('Paris', '20', '38', '6.2');

let lima = new SalmonCookies('Lima', '2', '16', '6.4');




console.log(seatle);
console.log(tokyo);
console.log(dubi);
console.log(paris);
console.log(lima);
// for (let index = 0; index < array.length; index++) {
//    SalmonCookies[i].getTotal();
// }
// SalmonCookies.prototype.render=function(){
//     let parent=document.getElementById(Salmon Cookies);

// callfunction*****
// }
let parent=document.getElementById("Salmon Cookies")

let table=document.createElement('table');
parent.appendChild(table);

// parent.appendChild(table);

// let headingRow=document.createElement('tr');
// table.appendChild(headingRow);


for (let i = 0; i < hours.length; i++) {
    let thEl=document.createElement('th');
     table.appendChild(thEl);
     thEl.textContent=hours[i]
 }




//  let dataRow=document.createElement('tr');
//  table.appendChild(dataRow);
//  let td1=document.createElement('td');
//  dataRow.appendChild(td1);
//  td1.textContent=this.hours

let cityNameArr=['Seatle','Tokyo','Dubi','Paris','Lima','Total'];

for (let i = 0; i < cityNameArr.length; i++) {
   let thEl=document.createElement('tr');
    table.appendChild(thEl);
    thEl.textContent=cityNameArr[i]
}

// let dataRow=document.createElement('tr');
// table.appendChild(dataRow);
// let td1=document.createElement('td');
// dataRow.appendChild(td1);
// td1.textContent=

// let headingRow=document.createElement('tr');
// table.appendChild(headingRow);

// let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];




for (let i = 0; i < SalmonCookies.length; i++) {
    // SalmonCookies[i].render;
    
}

/***************** lab 09 */

let form=document.getElementById('form');
form.addEventListener('submit',submitter);
function submitter(e){
    e.preventDefault();
    console.log(e);

}
let city=e.target.cityName.value;
let min=e.target.minNumber.value;
let max=e.target.maxNumber.value;
let avg=e.target.avgNumber.value;