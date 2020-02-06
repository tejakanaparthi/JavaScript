let date=new Date();

const day=date.getDay();
 
const dayArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let hour=date.getHours();

if(hour>12){
  
    hour=hour%12;
    hour= hour+" "+ "PM"
}
else if(hour===24){
 
    hour =12+" "+AM
}else{
 
    hour= hour+" "+"AM"
}

console.log(`Today is: ${dayArray[day]}`);

console.log(`${hour}: ${date.getMinutes()}: ${date.getSeconds()}`);