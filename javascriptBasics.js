var text = "Hello";
function decoration(xa){
    return "Welcome " + "##^^^^!! " + xa + " !!^^^^@@@" + " To World!!";
}
console.log(text);
console.log(decoration());
console.log(decoration('hjgjeeeeeeeeeee'));

function decorateMore(xa){
    var a = decoration(xa);
    return '(@((' + a + '))!)';
}
console.log(decorateMore('My Course'));

/*function calculate_total(x,z){
    var num_items = 10;
    var price = 20;
    var calculate_total = (num_items * price);
    return calculate_total + 100;
}
console.log(calculate_total('x,y'));*/
function calculate_total(num_items,price){
    
    return (num_items * price) + 100;
}
console.log(calculate_total('x,y'));

var age = 40;
var t = true;
var f = false;
if(f  || age > 30){
    console.log("AND condtion true");
}
else{
    console.log("AND condition false");
}
// switch
//var mark= 'j';
//var mark = prompt("Type case?");
switch(mark){
    case 'A':
        console.log("This is 'A' Passed!" );
        break;
    case 'B':
        console.log("This is 'B' Good!" );
        break;
        default:
        console.log("This is Deafult try again!" );
        break;
}
//function for final mark
function finalMarkMessage(mark){
    var a;
    switch(mark){
    case 'A':
        a = "You got best score!";
        break;
    case 'B':
        a = "You need to improve!";
        break;
    default:
        a= "Not avaibale!";
        break;
    }
    return a;
}
console.log("For A case: " + ' ' + finalMarkMessage('A'));
console.log("For B case: " + ' ' + finalMarkMessage('B'));
console.log("For k case: " + ' ' + finalMarkMessage('k'));
// function for title
function nameWithTitle(name, gender){
    if(gender == 'M'){
        return "Mr." + name + ' -> ' + gender;
    }
    else if(gender == 'F'){
        return "Miss." + name + ' -> ' + gender;
    }
    else{
        return "Other: " + name;
    }
    
}
console.log(nameWithTitle("Johny",'M'));
console.log(nameWithTitle("Lila",'F'));
console.log(nameWithTitle("KKKK",'O'));
/*In this Challenge we'll create a function that will whether a person is eligible to get a discount or not.
Only people over 50 who live in postal code 1234 are eligible to get a discount.
Create a function called check_eligibility that takes two parameters: age, and postalCode.
If the person is eligible for a discount return true. If the person is not eligible, the function has to return false.
(postal code is a number, not a string)*/
function check_eligibility(age, postalCode){
    if(age > 50 && postalCode === 1234){
        console.log("Eligible to get a discount!");
        return true;
    }
    else{
        console.log("Not Eligible to get a discount!");
        return false;
    }
}
function check_eligibility(age, postalCode){
    if(age < 50 && postalCode == 1234){
        return true + age + postalCode;
    }
    else{
        return false+ age + postalCode;;
    }
}
console.log(check_eligibility('50','1234'));
// while loop
var i = 0;
while(i <= 10){
    console.log("I value is : " + i);
    i++;
}
console.log("Final value of i: " + i);
//break and continue
var num = 0;
while(num <= 10){
    num ++;
    if(num == 5){
        break;
    }
    console.log("value of i: " + num);
}
console.log("Final value after Break of i: " + num);
// continue
var nul1 = 0;
while(nul1 <= 10){
    nul1++;
    if(nul1 >= 5 && nul1 <= 6){
        console.log("@@@@@@@@@@@@@@");
        continue;
    }
    console.log("Still continue value of i: " + nul1);
}
console.log("Final value after continue i: " + nul1);
console.log(check_eligibility('50','1234'));
//for loop
/*for(var i = 0; i <= 10; i++){
    console.log("Using For loop: " + i);
}*/
for(var i = 0; i<=10;i++){
    console.log("Using For loop: " + i);
    if(i == 5){
        console.log("@@@@@@@");
        break;
    
    }
}
//Arrays
var list1 = [20,0,787,"Any value",'fruits',true];
console.log("List1 values: "+ list1);
var list2= new Array(56,50000,"Han",false);
console.log("List2 values: "+list2);
var s=list1[3];
console.log("List2 index 3 value: "+ s);
console.log("List2 values: "+list2[100]);
// Arrays Pop and push
var list3 = [10,55,1];
console.log(list3);
list3.push('hallo',true,659);
console.log(list3);
list3.pop();
console.log(list3);
//splice arrays
var list4 = [45,'good',85.36,true]
console.log(list4);
//list4.splice(index position, do you want to delete, add extra items)
list4.splice(1,0,0.78,'!!@@');
console.log(list4);

// remove items from list4
list4.splice(2,2);
console.log(list4);

// remove and add other items
list4.splice(2,1,'!!@@', 'good',0.12,545,674,"rorl");
console.log(list4);
// remove from last using -1 -2
list4.splice(-2,1);
console.log(list4);
//iteration through arrays
var listLoop = [2,3,4,5,6];
console.log(listLoop);
var i = 0;
var len = listLoop.length;
while(i < len){
    listLoop[i]++;
    i++;
}
console.log(listLoop);
// for loop through
for(i = 0; i < len; i++){
    listLoop[i]++;
}
console.log(listLoop);
//Multidiamentional Arrays
var list = [[1,2,3],[4,5,6],[7,8,9]];
console.log(list);
console.log(list[1]);
console.log(list[1][1]);
console.log(list[2]);
console.log(list[2][0]);
// modify
list[2][0] = "Apple";
console.log(list);
//Coding Challenge - Traversing an Array Using a while loop, traverse the array and multiply each price by 2
var prices = [10, 15, 25, 8, 4, 55, 99, 11, 15, 25, 5, 4, 65, 5, 10, 15, 7, 8, 4, 9, 100];
console.log(prices);
//using a while loop, traverse the array and multiply each price by 2
var len = prices.length;
var i;
while(i <= len){
    prices[i]*2;
    i++;
}
console.log(prices);
//Object : function,arrays and strings
//Not Object : numbers and boolean 
//var a = new Object();
var a = {};
a.name = "Your Name: ";
a.age = 45;
a.city = "Wien";
a.friends = ["Aaa","BBb",23,true];
a.someMethos = function(x, y){
    return x + y;
}
console.log(a);
console.log(a.city); // same way of doing
console.log(a['city']);
console.log(a.someMethos(2, 6));

//JSON is data exchange protocol. Exchanging information between different parties.
//As a protocol used to communicate between two different servers APIs or Mobile app.
//JSON object
var user = {
    name: 'Peter',
    age: 35,
    score: 83.69,
    country: 'Wien',
    hobbies: ['Tennies','fussbala','swimmen'],
    profile : {
        type: 'private',
        account : 'priumem'
    }
};
console.log(user);
console.log(user.country);
console.log(user.hobbies);
console.log(user.hobbies[1]);
console.log(user.profile.account);
// How to undefine unconditional object
if('profile' in user){
    console.log("User has a profile! ");
}
console.log(user.photo);
if(!user.photo){
    console.log("not avaiable photos!!");
}
//Traversing an Array of Objects Challenge
Iterate through the array using a for loop and add 10 credits to all users.
var users = [
    {username: 'asdfasdf', credits: 150},
    {username: 'asasdfdf', credits: 510},
    {username: 'asdasdffasdf', credits: 11},
    {username: 'weewrwe', credits: 0},
    {username: 'werwer', credits: 120},
    {username: 'sdfsdf', credits: 130},
    {username: 'dfgdfg', credits: 0},
    {username: 'dfgdfg', credits: 510},
    {username: '4564564', credits: 110},
];
var len = users.length;
for(var i = 0; i <= len; i++){
    
    users[i].credits+=10;
}
console.log(users);
//Iterate through the array using a for loop and add 10 credits to all users.