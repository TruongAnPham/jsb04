/*let greet = function(name){
    console.log("Hello" + name);
}
greet("An"); // "Hello"+ name

function min(a,b){
    return a < b ? a: b;
}
console.log(min(4,5));

function increase(number){ // increase la name
    let x=5;
    x+= number
    console.log("the number is "+ number)
}
let d = increase(40);
console.log(d)

let minvalue = function (a,b){
    if (a < b) return a;
    return b;
};
console.log(minvalue(4,6));

minvalue = function (a,b,c){
    let min= a;
    if(b< min) min = b;
    if(c< min) min = c;
    return min;
};
console.log(minvalue(3,5,8));

minvalue = 0;
console.log(minvalue);

function nam(a){
    if (a%4 == 0 && a%100 !=0){
        console.log("Nam nhuan");
    }
    else{
console.log("khong nhuan");
    }
};
let b = nam(2020);*/


let a = document.getElementById("h1").style.color = "red";
let b = document.getElementById("h1").style.backgroundColor= "blue";
let c = document.getElementById("button2").style.backgroundColor= "green";
let d = document.getElementById("h1").innerHTML = "Hello World!";
function changecolor(){
    document.getElementById("button2").style.backgroundColor = "white";
    document.getElementById("button2").style.color= "black";

}

let e = document.getElementById("button2").addEventListener("mouseover", changecolor);

function changecolorback(){
    document.getElementById("button2").style.backgroundColor = "green";
    document.getElementById("button2").style.color= "black";
}
let f = document.getElementById("button2").addEventListener("mouseout", changecolorback);



