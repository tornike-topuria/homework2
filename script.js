// 1
for(let i = 0; i <= 95; i = i + 1) {
   console.log(5 + i) 
}

// 2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];{
for( array1 > 0; array1 < 10; array1 = array1 + 1)
    console.log(array1 [0, 1, 2, 5, 6, 7, 9, 10])
   }

// 3
 let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];{
    for(array2 > 0; array2  < 10; array2 = array2 + 1)
    console.log(array2[4] + "არის" )
    if(array2){console.log("არის")}
 }

 // 4  
let array3 = [1, 2, 3, 4, 5];

let sum = 0

for (let jami = 0; jami < array3.length; jami++) {
    sum = sum + array3[jami]
}
console.log(sum);

// 5
let array4 = [1, 2, 3, 7, 6, 9];
for (let average = 0; average < array4.length; average++) {
    sum = sum + array4[average]
}

console.log(sum / array4.length);

 
// 6
// let array5 = [1, 2, 3, 7, 6, 9]

// {

// }

// 7
let user = {
   firstname: "giorgi",
   lastname: "smith",
   age: 25,
   studentstatus: "active"
}
console.log(user.studentstatus);

// 8
let user2 = {
   name: 'giorgi',
   age: 20,
   studentstatus: 'active'
}
if (user2.age < 18 && user2.studentstatus == "active") {
   console.log("hello");
}
else {
   console.log("error");
}

if (user2.name == "levani") {
   console.log("hello levani");
}
else {
   console.log("error");
}

if (user2.studentstatus == "active" || user2.age < 25) {
   console.log("hello world");
}
else {
   console.log("error");
}


// 9
// let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];
// for(array = 0; array <= 10; array = array + 1){
//    console.log(array[[0[0,2,3], [0,3],[2]]])
// }

// 11
let users = [
   { username: 'giorgi', status: false },
   { username: 'levani', status: false },
   { username: 'anna', status: true }
]


if (users[0].status == true) {
   console.log(users[0]);
}
if (users[1].status == true) {
   console.log(users[1]);
}
if (users[2].status == true) {
   console.log(users[2]);
}

