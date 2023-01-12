
// call,apply,bind in js

let userDetails = {
  
  Name : "Nisha",
  Age : 30,
  Designation : "Software Engineer",

 
}

let printDetails = function (state,country)
  {
    console.log(this.Name+ " " +state + " "+ country);
  }



let userDetails2 = {
  Name : "Deepshikha",
  Age : 31,
  Designation : "Software Engineer",
  
}

//Call
printDetails.call(userDetails,"Jabalpur","India");

//Apply
printDetails.apply(userDetails2,["Jabalpur","India"]);


//Bind 

let newFunc = printDetails.bind(userDetails,"Bangalore","India");

newFunc();




