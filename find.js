
const find=(res)=>{

  const result=res.split(" ");
  console.log(result[1]);
  let st=result[1];
  console.log(st[2]);

};

find('Hello World!, I am Teju');



const number='1234';
const arrDigits=Array.from(String(number), Number);
const first=arrDigits.slice(0,((arrDigits.length)/2));
const second=arrDigits.slice(((arrDigits.length)/2),arrDigits.length);

const a=[...first]+[...second];

console.log(a);


const key='te234ju';


console.log(key.match(/\d+/g)); 

arrDigits.forEach(map=()=>{

});