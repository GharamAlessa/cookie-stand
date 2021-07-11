'use strict';

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  let  seatle={
    name:"seattle",
    min:23,
    max:65,
    avg:6.3,
    Custperhour:[],
    avgcook:[],
        getRandCust:function (){
        for (let i = 0; i < hours.length; i++) {
            this.Custperhour.push(random(this.min,this.max)); 
        }},

       getavgcookie:function(){

            for (let i = 0; i < hours.length; i++) {
                this.avgcook.push(random(this.main,this.max)); 


        }
    
    
    
    
    
    }

 //inside the method git custmer per hour i need to write for loop
 //inside the for loop i need to call random with the min and max of the city 
 //we need to push them into the empty Array
 //muliplay the avg with the num of custmer 
 seatle.getRandCust();
 console.log(seatle.Custperhour)
seatle.getavgcookie();
console.log(seatle.avgcookie);

 

