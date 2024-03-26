// Tao 1 function hello
// function hello(){ //Khai bao
//   console.log("Hello 500 anh em lop web39!");
// }
// hello(); //Thuc thi


// Function phan biet tham so va doi so
// Paramater: Tham so -> Dat ten tuy y
// argument: doi so

// function hi(name){  //name -> Tham so (Paramater)
//   // console.log(name);
//   console.log(`Hello 500 anh em! Minh la ${name}`);
// }

// hi("Nguyen Van B"); //Gia tri truyen vao la doi so
// hi("Le Thi C");


// Function tinh tong 2 so

// function sum(a, b) { //a, b tham so
//   console.log(a);
//   console.log(b);
//   // let a = 5;
//   // let b = 6;
//   console.log(a + b);
// }
// sum(6);


// Function khong co tham so -> It dung trong thuc te
// function sayHello(){
//   console.log("Hello 500 anh em");
// }
// sayHello();


// Function co tham so -> It dung trong thuc te
// function sayHello(age, name){ //age, name -> Tham so
//   // console.log(age);
//   // console.log(name);

//   console.log(`Toi la ${name}. Toi ${age} tuoi`);
// }

// sayHello(22, "Hung");


// Function co ket qua tra ve -> Su dung nhieu trong thuc te
// function sum(a,b,c){
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   return (a + b + c);
// }

// Thuc thi
// console.log(sum(1,2,3)); //Cach 1

// Cach 2
// let numberSum = sum(1,2,3);
// console.log(numberSum);




// Cau lenh co dieu kien - Cau lenh if
// Lon hon: " > "
// Be hon: " < "
// Lon hon va bang: " >= "
// Be hon va bang: " <= "
// Bang nhau: " == "

// let money = 40;
// if(money == 27) {
//   console.log("Ban du tien mua iphone!");
// }

// Note: 
// = -> Gan gia tri
// == -> So sanh gia tri
// === -> So sanh gia tri + Kieu du lieu



// Cau lenh dieu kien if else
// let hour = 15;

// if(hour < 12) {
//   console.log("Buoi sang");
// }else {
//   console.log("Buoi chieu")
// }

// cau lenh dieu kien if - else if - else
// let time = 20;

// if (time < 12) {
//   console.log("Chao buoi sang!");
// } else if (time >= 12 && time < 18) {
//   console.log("Chao buoi chieu");
// }else {
//   console.log("Chao buoi toi");
// }

// Vi du switch case
// let money = 15000;

// switch(money) {
//   case 12000: {
//     console.log("Ca phe sua");
//     break;
//   }
//   case 10000: {
//     console.log("Ca phe da");
//     break;
//   }
//   case 8000: {
//     console.log("string dau");
//     break;
//   }
//   case 2000: {
//     console.log("Tra da");
//     break;
//   }
//   default: {
//     console.log("Di ve nha");
//     break;
//   }
// }



// Fisrt class function

// Function co the gan cho bien
// function sum(a, b) {
//   return (a + b);
// }

// // console.log(sum(1, 2));

// let sumFn = sum(1,2);
// console.log(sumFn);



// Funtion nay co the la tham so cua function khac
// let isSum = function sum(a, b) {
//   return (a + b);
// }

// // console.log(sum(1,3));

// function numberSum(isSum, c) {
//   return (isSum + c)
// }

// let result = numberSum(isSum(1,3), 5);
// console.log(result);


// ES5 - Khai bao va su dung 1 function
// function sayHello(){
//   console.log("Hello 500 anh em lop Web39! Not phan nay chungta se ve");
// }

// sayHello();


// ES6 - Khai bao va su dung 1 function

// let sayHello = () => {
//   console.log("Hello 500 anh em!");
// }

// sayHello();




// ES5 - tinh tong 3 so
// function sum(a,b,c){
//   return (a + b +c);
// }
// console.log(sum(1,2,3));

// ES6 - tinh tong 3 so
let sum = (a, b, c) => {
  return (a + b + c);
}

console.log(sum(1, 2, 3));