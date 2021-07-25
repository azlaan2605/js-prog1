function percent(a){  //function decleration 
    if (a<35)
    console.log("Failed!");
    else if(a>=35 && a<60)
    console.log("Second Class");
    else if (a>=60 && a<85)
    console.log("First Class");
    else
    console.log("Distinction");
    if (a>100)
    console.log("Invalid"); 

}
// To know your remarks enter your percentage below!

percent(10)  //function call