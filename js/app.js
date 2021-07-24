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