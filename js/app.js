'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
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

let shops=[];

function Shop(cityName, minCustumer, maxCutumer, avgcookie) {
    this.cityName = cityName;
    this.minCustumer = minCustumer;
    this.maxCutumer = maxCutumer;
    this.avgcookie = avgcookie;
    this.totalCookiesperDay = 0;
    this.custmerperHour = [];
    this.cookiesPerHour = [];
    shops.push(this);

}
Shop.prototype.calcCustmerPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.custmerperHour.push(random(this.minCustumer, this.maxCutumer));

    }
}

Shop.prototype.calcCookiesPerHour=function(){
    for (let i = 0; i < hours.length; i++) {
       
        this.cookiesPerHour.push(Math.floor(this.custmerperHour[i]*this.avgcookie));
        this.totalCookiesperDay+=this.cookiesPerHour[i];
    }
}


// // function SalmonCookies(cityName, minCustumer, maxCutumer, cookiesAvg) {

// //     this.cityName = cityName;
// //     this.minCustumer = minCustumer;
// //     this.maxCutumer = maxCutumer;
// //     this.cookiesAvg = cookiesAvg;
// //    this.totalCookiesPerDay=0;
// //    this.cookiesPerHours=[];
// //    cookiesPerHour=[];

// // }

// //prototype*****
//  SalmonCookies.prototype.total=function() {
//      this.total=
//  }

// SalmonCookies.prototype.calcHours =


let seatle = new Shop ('Seatle', 23, 65, 6.3);

let tokyo = new Shop('Tokyo', 3, 24, 1.2);

let dubi = new Shop('Dubi', 11, 24, 3.7);

let paris = new Shop('Paris', 20, 38, 6.2);

let lima = new Shop('Lima', 2, 16, 6.4);



//................table.........

let parent=document.getElementById('parent');

console.log(parent);

let table=document.createElement('table');

parent.appendChild(table);

function makeHeader(){
    let headerRow=document.createElement('tr');
 table.appendChild(headerRow);

 let firstTh=document.createElement('th');
 headerRow.appendChild(firstTh);
 firstTh.textContent='Name'

 for (let i = 0; i < hours.length; i++) {
    
     let hoursTh=document.createElement('th');
     headerRow.appendChild(hoursTh);

    hoursTh.textContent=hours[i];
    
 }
 let lastTh=document.createElement('th');
headerRow.appendChild(lastTh);
lastTh.textContent='Daily Location Total';
}





Shop.prototype.render=function(){
    let dataRow=document.createElement('tr');
    table.appendChild(dataRow);
        let nameTd=document.createElement('td');

        dataRow.appendChild(nameTd);
    nameTd.textContent=this.cityName;


for (let i = 0; i < hours.length; i++) {
 let cookiesTd=document.createElement('td');
 dataRow.appendChild(cookiesTd);
 cookiesTd.textContent=this.cookiesPerHour[i];

    
}

 nameTd=document.createElement('td');

dataRow.appendChild(nameTd);
nameTd.textContent= this.totalCookiesperDay;
}

function makeFooter(){
    let footerRow=document.createElement('tr');
    table.appendChild(footerRow);
    footerRow.textContent='Totals';



    let totalTotals=0;
    for (let i = 0; i < hours.length; i++) {
        let totalForEachHour=0;
        for (let j = 0; j < shops.length; j++){
            totalForEachHour+=shops[j].cookiesPerHour[i];

            totalTotals+= shops[j].cookiesPerHour[i];

        }

       let footerTh=document.createElement('th');
       footerRow.appendChild(footerTh);
       footerTh.textContent=totalForEachHour;
    }
let lastTh=document.createElement('th');
footerRow.appendChild(lastTh);
lastTh.textContent=totalTotals;

}











makeHeader();

for (let i = 0; i < shops.length; i++) {
    shops[i].calcCustmerPerHour();
    shops[i].calcCookiesPerHour();    
    shops[i].render();
    

  
 }
 makeFooter();  



// console.log(seatle);
// console.log(tokyo);
// console.log(dubi);
// console.log(paris);
// console.log(lima);
// // for (let index = 0; index < array.length; index++) {
// //    SalmonCookies[i].getTotal();
// // }
// // SalmonCookies.prototype.render=function(){
// //     let parent=document.getElementById(Salmon Cookies);

// // callfunction*****
// // }


// // parent.appendChild(table);




// for (let i = 0; i < hours.length; i++) {
//     let thEl=document.createElement('th');
//      table.appendChild(thEl);
//      thEl.textContent=hours[i]
//  }




// //  let dataRow=document.createElement('tr');
// //  table.appendChild(dataRow);
// //  let td1=document.createElement('td');
// //  dataRow.appendChild(td1);
// //  td1.textContent=this.hours

// let cityNameArr=['Seatle','Tokyo','Dubi','Paris','Lima','Total'];

// for (let i = 0; i < cityNameArr.length; i++) {
//    let thEl=document.createElement('tr');
//     table.appendChild(thEl);
//     thEl.textContent=cityNameArr[i]
// }

// // let dataRow=document.createElement('tr');
// // table.appendChild(dataRow);
// // let td1=document.createElement('td');
// // dataRow.appendChild(td1);
// // td1.textContent=

// // let headingRow=document.createElement('tr');
// // table.appendChild(headingRow);

// // let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];




// for (let i = 0; i < SalmonCookies.length; i++) {
//     // SalmonCookies[i].render;

// }

/***************** lab 09 */


let form = document.getElementById('form');

form.addEventListener('submit', submitter);
function submitter(e) {
    e.preventDefault();
    console.log(e.target.cityName.value);


    let city = e.target.cityName.value;
    let min = e.target.minFeild.value;
    let max = e.target.maxFeild.value;
    let avg = e.target.avgFeild.value;
    console.log();
}

