'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


// from w3 schools
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let seattle = {
    cityName: "seattle",
    minCustmer: 23,
    maxCustmer: 65,
    avgcookies: 6.3,
    CustmerPerHour: [],
    // avgcook:[],
    cookiesPerHour: [],
    total:0,

    //     getRandCust:function (){
    //     for (let i = 0; i < hours.length; i++) {
    //         this.Custperhour.push(random(this.min,this.max)); 
    //     }},

    //    getavgcookie:function(){

    //         for (let i = 0; i < hours.length; i++) {
    // //             this.avgcook.push(random(this.main,this.max)); 


    //     }

    // }
    calcCutmerPerHuor: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custmerPerHour.push(random(this.minCustmer,this.maxCustmer))

        }
    },

         calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.custmerPerHour[i]*this.avgcookies));
            this.total=this.total+this.cookiesPerHour[i];

        }
    },
    render:function(){
         let parent=document.getElementById('parent');
         console.log(parent);
         let h2Element=document.createElement('h2');

         console.log(h2Element);
         parent.appendChild(h2Element);
         h2Element.textContent=this.cityName;
         let unorderedList=document.createElement('ul');
         parent.appendChild(unorderedList);

         for (let i = 0; i < hours.length; i++) {
             
             let liElement=document.createElement('li');
             unorderedList.appendChild(liElement);
             liElement.textContent=`${hours[i]}:${this.cookiesPerHour[i]}cookies`;
             
         }
         let totalElement=document.createElement('il');
    unorderedList.appendChild(totalElement);
    totalElement.textContent=`Total:${this.total}cookies`;

          
    }


    
        // console.log(custmerPerHour);
        // seattle.calcCutmerPerHuor();
        // console.log(seattle.custmerPerHour);

        // console.log(seattle.minCustmer);
        seattle.calcCutmerPerHuor();
        //  console.log(seattle.custmerPerHour);
        seattle.calcCookiesPerHour();
    //  console.log(seattle.cookiesPerHour);
    seattle.render();


    // .................

    

let tokyo = {
    cityName: "tokyo",
    minCustmer: 3,
    maxCustmer: 24,
    avgcookies: 1.2,
    CustmerPerHour: [],
  
    cookiesPerHour: [],
    total:0,

  
    calcCutmerPerHuor: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custmerPerHour.push(random(this.minCustmer,this.maxCustmer))

        }
    },

         calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.custmerPerHour[i]*this.avgcookies));
            this.total=this.total+this.cookiesPerHour[i];

        }
    },
    render:function(){
         let parent=document.getElementById('parent');
         console.log(parent);
         let h2Element=document.createElement('h2');

         console.log(h2Element);
         parent.appendChild(h2Element);
         h2Element.textContent=this.cityName;
         let unorderedList=document.createElement('ul');
         parent.appendChild(unorderedList);

         for (let i = 0; i < hours.length; i++) {
             
             let liElement=document.createElement('li');
             unorderedList.appendChild(liElement);
             liElement.textContent=`${hours[i]}:${this.cookiesPerHour[i]}cookies`;
             
         }
         let totalElement=document.createElement('il');
    unorderedList.appendChild(totalElement);
    totalElement.textContent=`Total:${this.total}cookies`;

          
    }


    
        

        
    tokyo.calcCutmerPerHuor();
         
        tokyo.calcCookiesPerHour();
     
    tokyo.render();

    // .........................


    
let dubi = {
    cityName: "dubi",
    minCustmer: 11,
    maxCustmer: 38,
    avgcookies: 3.7,
    CustmerPerHour: [],
  
    cookiesPerHour: [],
    total:0,

  
    calcCutmerPerHuor: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custmerPerHour.push(random(this.minCustmer,this.maxCustmer))

        }
    },

         calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.custmerPerHour[i]*this.avgcookies));
            this.total=this.total+this.cookiesPerHour[i];

        }
    },
    render:function(){
         let parent=document.getElementById('parent');
         console.log(parent);
         let h2Element=document.createElement('h2');

         console.log(h2Element);
         parent.appendChild(h2Element);
         h2Element.textContent=this.cityName;
         let unorderedList=document.createElement('ul');
         parent.appendChild(unorderedList);

         for (let i = 0; i < hours.length; i++) {
             
             let liElement=document.createElement('li');
             unorderedList.appendChild(liElement);
             liElement.textContent=`${hours[i]}:${this.cookiesPerHour[i]}cookies`;
             
         }
         let totalElement=document.createElement('il');
    unorderedList.appendChild(totalElement);
    totalElement.textContent=`Total:${this.total}cookies`;

          
    }


    
        

        
    dubi.calcCutmerPerHuor();
         
        dubi.calcCookiesPerHour();
     
    dubi.render();
    
    //  ............................

    
let paris= {
    cityName: "paris",
    minCustmer: 20,
    maxCustmer: 38,
    avgcookies: 2.3,
    CustmerPerHour: [],
  
    cookiesPerHour: [],
    total:0,

  
    calcCutmerPerHuor: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custmerPerHour.push(random(this.minCustmer,this.maxCustmer))

        }
    },

         calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.custmerPerHour[i]*this.avgcookies));
            this.total=this.total+this.cookiesPerHour[i];

        }
    },
    render:function(){
         let parent=document.getElementById('parent');
         console.log(parent);
         let h2Element=document.createElement('h2');

         console.log(h2Element);
         parent.appendChild(h2Element);
         h2Element.textContent=this.cityName;
         let unorderedList=document.createElement('ul');
         parent.appendChild(unorderedList);

         for (let i = 0; i < hours.length; i++) {
             
             let liElement=document.createElement('li');
             unorderedList.appendChild(liElement);
             liElement.textContent=`${hours[i]}:${this.cookiesPerHour[i]}cookies`;
             
         }
         let totalElement=document.createElement('il');
    unorderedList.appendChild(totalElement);
    totalElement.textContent=`Total:${this.total}cookies`;

          
    }


    
        

        
    paris.calcCutmerPerHuor();
         
        paris.calcCookiesPerHour();
     
    paris.render();

    // ............................

    
let lima = {
    cityName: "lima",
    minCustmer: 2,
    maxCustmer: 16,
    avgcookies: 4.6,
    CustmerPerHour: [],
  
    cookiesPerHour: [],
    total:0,

  
    calcCutmerPerHuor: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custmerPerHour.push(random(this.minCustmer,this.maxCustmer))

        }
    },

         calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesPerHour.push(Math.floor(this.custmerPerHour[i]*this.avgcookies));
            this.total=this.total+this.cookiesPerHour[i];

        }
    },
    render:function(){
         let parent=document.getElementById('parent');
         console.log(parent);
         let h2Element=document.createElement('h2');

         console.log(h2Element);
         parent.appendChild(h2Element);
         h2Element.textContent=this.cityName;
         let unorderedList=document.createElement('ul');
         parent.appendChild(unorderedList);

         for (let i = 0; i < hours.length; i++) {
             
             let liElement=document.createElement('li');
             unorderedList.appendChild(liElement);
             liElement.textContent=`${hours[i]}:${this.cookiesPerHour[i]}cookies`;
             
         }
         let totalElement=document.createElement('il');
    unorderedList.appendChild(totalElement);
    totalElement.textContent=`Total:${this.total}cookies`;

          
    }


    
        

        
    lima.calcCutmerPerHuor();
         
        lima.calcCookiesPerHour();
     
    lima.render();

// // let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
// // function random(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1) ) + min;
// //   }


// //   let  seatle={
// //     name:"seattle",
// //     min:23,
// //     max:65,
// //     avg:6.3,
// //     Custperhour:[],
// //     avgcook:[],
// //         getRandCust:function (){
// //         for (let i = 0; i < hours.length; i++) {
// //             this.Custperhour.push(random(this.min,this.max)); 
// //         }},


// //        getavgcookie:function(){

// //             for (let i = 0; i < hours.length; i++) {
// //                 this.avgcook.push(random(this.main,this.max)); 


// //         }





// //     }

// //  //inside the method git custmer per hour i need to write for loop
// //  //inside the for loop i need to call random with the min and max of the city 
// //  //we need to push them into the empty Array
// //  //muliplay the avg with the num of custmer 
// //  seatle.getRandCust();
// //  console.log(seatle.Custperhour)
// // seatle.getavgcookie();
// // console.log(seatle.avgcookie);

// // let hours=['city','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// function SalmonCookies(cityName, minCustumer, maxCutumer, cookiesAvg) {

//     this.cityName = cityName;
//     this.minCustumer = minCustumer;
//     this.maxCutumer = maxCutumer;
//     this.cookiesAvg = cookiesAvg;
//    this.totalCookiesPerDay=0;
//    this.cookiesPerHours=[];
//    cookiesPerHour=[];
   
// }

// // //prototype*****
// //  SalmonCookies.prototype.total=function() {
// //      this.total=
// //  }

// // SalmonCookies.prototype.calcHours =


// // let seatle = new SalmonCookies('Seatle', '23', '65', '6.3');

// // let tokyo = new SalmonCookies('Tokyo', '3', '24', '1.2');

// // let dubi = new SalmonCookies('Dubi', '11', '24', '3.7');

// // let paris = new SalmonCookies('Paris', '20', '38', '6.2');

// // let lima = new SalmonCookies('Lima', '2', '16', '6.4');




// // console.log(seatle);
// // console.log(tokyo);
// // console.log(dubi);
// // console.log(paris);
// console.log(lima);
// // for (let index = 0; index < array.length; index++) {
// //    SalmonCookies[i].getTotal();
// // }
// // SalmonCookies.prototype.render=function(){
// //     let parent=document.getElementById(Salmon Cookies);

// // callfunction*****
// // }
// let parent=document.getElementById("Salmon Cookies")

// let table=document.createElement('table');
// parent.appendChild(table);

// // parent.appendChild(table);

// // let headingRow=document.createElement('tr');
// // table.appendChild(headingRow);


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

// /***************** lab 09 */

// let form=document.getElementById('form');
// form.addEventListener('submit',submitter);
// function submitter(e){
//     e.preventDefault();
//     console.log(e);

// }
// let city=e.target.cityName.value;
// let min=e.target.minNumber.value;
// let max=e.target.maxNumber.value;
// let avg=e.target.avgNumber.value;
// >>>>>>> 844c6feb51be4fab873846610c4db6f13b55cee3
