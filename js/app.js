'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


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




let seatle = new Shop ('Seatle', '23', '65', '6.3');

let tokyo = new Shop('Tokyo', '3', '24', '1.2');

let dubi = new Shop('Dubi', '11', '24', '3.7');

let paris = new Shop('Paris', '20', '38', '6.2');

let lima = new Shop('Lima', '2', '16', '6.4');



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

