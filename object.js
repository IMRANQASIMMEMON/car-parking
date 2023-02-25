


	// var cart =[{
         
 //         id:0,
 //         name:"imran",
 //         age:40
 //    },{
 //    id:1,
 //    name:"sadaf",
 //    age:30	
 //    },{
 //    	id :2,
 //    	name:"hammad",
 //    	age:20

 //    }
 //         ]

//var store = localStorage.setItem("Name",JSON.stringify(cart));

//var getStore =JSON.parse(localStorage.getItem("Name"))
//console.log(getStore);
//console.log(cart[2].name);

// var sum = 0;
// var arr = [2,4,5];

// for(var i = 0;i<arr.length;i++){
// sum += parseInt(arr[i]);
// }
// //console.log(sum);
var cart = [];
const name = document.getElementById('name');
const Registraion = document.getElementById('Registraion');
console.log(name.value);
cart.push({"Name":name.value,"Registraion" : Registraion.value});

function submitData(){
 
//for getting data from localstorage
 
 cart =JSON.parse(localStorage.getItem('names'));
 console.log(cart);

  const data =document.getElementById('data');   
 var btn =document.getElementById('btn')
  var userValue = document.getElementById('user-value')
//console.log(userValue.value)
var userInput =parseInt(userValue.value);

console.log(userInput);

for(var i = 0; i<cart.length;i++){


if (cart[i].Registraion ==userInput) {

data.innerHTML=" Name  "+cart[i].Name+ "  Registraion " +cart[i].Registraion +" <button onclick=deleteData("+i+")>delete</button>  " 

}
}
}
function deleteData(i){
console.log(i)
cart.splice(i,1);
//console.log(cart[i]);
//alert("delete data")
 localStorage.setItem("names",JSON.stringify(cart));

  submitData()
//data.innerHTML = ""
}
// add data
function addData(){

var name = document.getElementById('name')
var Registraion = document.getElementById('Registraion')
console.log(name.value)
console.log(Registraion.value)
  
cart.push({"Name":name.value,"Registraion" : Registraion.value});
//console.log(cart)

 localStorage.setItem("names",JSON.stringify(cart));

//var getStore =JSON.parse(localStorage.getItem("Name"))
//console.log(getStore);
//submitData();

  } 
