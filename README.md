# JavaScript
http://cfbcursos.com.br/javascript-01-aprenda-javascript-introducao/
assistir 2 videos
- weakly typed
- client side
#### OPERATORS

```javascript
//Operadores Lógicos
&&, ||, !
//Condicionais
if, else

//Operadores Aritiméticos
+, -, *, /, **, %

//Incremento e Decremento
let a = 10;
let b = 20;
let c = a++ + ++b;
console.log(a,b,c);
//11,21,31

//npm install prompt-syncconst
prompt = require("prompt-sync")();
let nota = prompt("Digite a nota:")

//Operadoes relacionais
==, ===, <=, >=, <>, <, >
```

let b = 20;
let c = a++ + ++b;
console.log(a,b,c);//11,21,31//npm install prompt-syncconst prompt = require("prompt-sync")();
let nota = prompt("Digite a nota:");

```javascript
// PRINT
// return in console
console.log("hello world!");
// return in page
document.write("hello world!");

// string is unchange value
// literal primitive / obj String

// use again, change value
var testV = 1;

// undeclarable again, change value
let testL = 1;

// undeclarable again, unchange value
const testC = 1;

// STRING ATRIBUTS
var test = "test";
console.log(test.length);
console.log(test.indexOf("es"));
console.log(test.charAt(2));
console.log(test.charAt(2,3));
console.log(test.replace("t", " "));

// ALERTS
alert("Hello world!");//no return
confirm("Just accept!")//true or false
prompt("type something")//value

parseInt(prompt("num:"));

// CONCAT
test = 3.141592
document.write(`<p>Teste: ${test}</p>`)
document.write("<p>PI" + test + "</p>")

// CASTING
var text = "20";
var int = 20;
console.log(typeof text);

var toInt = parseInt(text, 20);//+20
console.log(typeof toInt);

var toStr = int.toFixed(2);// float point
int.split("/")//remove "/"

// COMPARE
3 === "3"//f
3 == "3"//t
3 !== "3"//t
3 != "3"//f
3 > 3//f
3 < 3//f
3 >= 3//t
3 <= 3//t

// CONDITIONS
if(3 == 3){
    alert("3 == 3");
}
else if(3 != 3){
    alert("3 != 3");
}
else{
    alert("3 ? 3");
}
// FUNCTIONS
test = 3.141592
test.toFixed(2)

// ARRAYS
const ar = Array(10)// arr 11 items
ar[0] = "Hello"
const arr = ["John", "Peter", "Sally", "Jane"];
const array = [...arr, "new1", "new2"] //... spreed operator copy arr
frutas[0];//first
frutas[frutas.length - 1]//last
arr.forEach(function (item, index, array) {
  console.log(item, index, array);
});
arr.push('Jeff');//add last
arr.pop();//rm last
arr.shift();//rm first
arr.unshift('lola')//add first
arr.indexOf('banana');//search
arr.splice(0, 1);//rm 1=element(s) by 0=initial-position
arr.slice();//copy
let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;
const obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo").innerHTML = obj.counter;

// OBJ
let myObj = {
  name:"John",
  age:30,
  today: new Date(),
  age: function () {
      return 30;
  },
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  },
  name: function() {
      return this.name;
  },
  get name() {
      return this.name;
  },
  set newName(n) {
      this.name = n;
  }
}
myObj.name();
myObj.newName = "Alfred";
myObj['name']
myObj.name

function Person(first, age) {//constructor
  this.firstName = first;
  this.age = age;
}
const myFather = new Person("John", 21);// new obj
myObj.firstName //objectName.property
delete myObj.age;//delete myObj["age"];
var numObj = new Number(20); // fast with num

// Obj sets
new Set();//Creates a new Set
add();//Adds a new element to the Set
arr.delete()//Removes an element from a Set
has();//Returns true if a value exists
clear();//Removes all elements from a Set
forEach();//Invokes a callback for each element     
values();//Returns an Iterator with all the values in a Set
keys();//Same as values()
entries();//Returns an Iterator with the [value,value] pairs from a Set
size//Returns the number elements in a Set
let text = "";
letters.forEach (function(value) {
  text += value;
})

// Obj maps
new Map()//Creates a new Map object
set()//Sets the value for a key in a Map
get()//Gets the value for a key in a Map
clear()//Removes all the elements from a Map
arr.delete()//Removes a Map element specified by a key
has()//Returns true if a key exists in a Map
forEach()//Invokes a callback for each key/value pair in a Map
entries()//Returns an iterator object with the [key, value] pairs in a Map
keys()//Returns an iterator object with the keys in a Map
values()//Returns an iterator object of the values in a Map
size//Returns the number of Map elements

// LOOPS
for(let i = 0; i < cars.length; i++){}//text += cars[i] + "<br>";
for(i in values){}//return index
for (i of values){}//return elements
while (condition){}
//console.log(values[i]);
arr.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// FUNCTIONS
function nameF(x){}
nameF(x);//call F
function functionWithF(nameF){}

// <input onfocus="focus(this);" onblur="noFocus(this);">
function focus(i){
    i.style.background="#000000"
}
function noFocus(i){
    i.style.background="#FFFFFF"
}

function rolar(e){
    var carac = String.fromCharCode(e.which);
    if (carac == 'c'){
        self.scrollBy(0,10);
    }
    else if(carac == 'b'){
        self.scrollBy(0,-10);
    }
    else{
    return false;
    }
}

// FORMAT
value = 3.1415
document.write(`Value: R$ ${value} <br>`)
document.write(`Preco total ${value.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})} <hr>`)
document.log(new IntL.NumberFormat('pt-BR').format(value))

//REGEXP
// Characters
[abc] //find inside square brackets
[0-9] //find inside square brackets
(x | y)//find this one or other
// Metacharacters are special characters

// Modifier types
i //ignore uppercase and lowercase
g //global search (find all results and dont stop when first element will finded).
m //ignore wraped lines

// Metacharactere
"\d" //find digit
"\s" //find white space
"\b" //find first or last in str
"\uxxxx" //find character unicode specifyed by hexadecimal num xxxx

// Quantifyer
"n+" //Corresponde a qualquer string que contenha pelo menos um n
"n*" //Corresponde a qualquer cadeia que contenha zero ou mais ocorrências de n

var str = "Hello World!";
var r = str.search(/World/i);//mu=letters //i=uppercase and lowercase
var v = str.replace(/World/g,"university");//g=global search m=wrap lines

var r = /d(b+)d/g;//script usa o método exec para encontrar uma instancia dentro de uma string
var v = myRe.exec('cdbbdbsbz');
console.log(v);

var str = "Cara, cadê o meu carro?";
var r = str.search(/[a-h]/gi);//Retorna todas as ocorrencias das letras “a” a “h”, independente de serem maiúsculas ou minúsculas
console.log(r);

var str = "Hellooo World! Hello Mundoooooo!"; 
var r = /o+/g;//find "oO" in str
var r = str.match(r);
console.log(r);
```
