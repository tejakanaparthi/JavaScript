//JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  
const areaTriangle=(a,b,c)=>{
    const s=(a+b+c)/2;
    
    const area=Math.sqrt((s*(s-a)*(s-b)*(s-c)));
    
    console.log(area);
  };
  
  areaTriangle(5,6,7);