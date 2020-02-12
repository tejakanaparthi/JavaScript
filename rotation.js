//JavaScript program to rotate the string 'w3resource' n number of times

let input='w3resource';

const arr=[...input];

//Method1:With Arrays
for(let i=0;i<9;i++){
   
    const last=arr[arr.length-1];

    arr[arr.length-1]=arr[0];
    arr[0]=last;

}

console.debug(arr.toString());
//Method 2:rotate the string periodically removing one letter from the end of the string and attaching it to the front.
const type2=()=>{
    
    setInterval(function () {

        input=input[input.length-1]+input.substring(0,input.length-1);
        console.log(input);
    },2);
};
type2();
input.s