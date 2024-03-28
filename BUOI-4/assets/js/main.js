// Khoi tao 1 object thuan tuy

// let user_1 = {};
// user_1.name = "Nguyen van A";
// user_1.email = "a@gmail.com";
// console.log(user_1);



// let user_2 = {
//   name: "Nguyen Van B",
//   age: 20,
//   email: "b@gmail.com"
// }
// console.log(user_2);






// Truy cap vao phan tu cua Object

// let user_3 = {
//   name: "nguyen van c",
//   email: "nguyenvanc@gmail.com",
//   age: 20
// };

// console.log(user_3.name);
// console.log(user_3.email);
// console.log(user_3.age);

// console.log(user_3["name"]);





// Gan gia tri cua thuoc tinh trong object
// let user_4 = {
//   name: "nguyenvanteo",
//   age: 25,
//   email: "teo@gmail.com"
// };
// user_4.name = "nguyen thi a";
// user_4.email = "nguyenthia@gmail.com";

// Gan gia tri moi cua 1 thuoc tinh trong Object
// user_4.address = 'Ha Noi';

// Xoa 1 thuoc tinh trong object
// delete user_4.age;

// console.log(user_4);






// Phuong thuc lam viec voi mang - map()
// let arrNumber = [1, 2, 3, 4, 5];

//value: gia tri cua phan tu
// index: chi so cua phan tu
// arrNumber.map((value, index) => { 
//   console.log("Gia tri cua mang la: ",value);
//   console.log("Chi so cac PT cua mang la: ",index);
// })





// Phuong thuc filter() trong array

// Cach truyen thong
// let oddNumber = [11, 12, 13, 14, 15, 16];

// let result_1 = [];
// oddNumber.forEach((item, index) => {
//   // console.log(index);

//   if ((item % 2) != 0) {
//     // console.log("Day la so le: ", item)
//     result_1.push(item);
//   }
// });

// console.log(result_1);



// Su dung filter()
// let oddNumber_2 = [11, 12, 13, 14, 15, 16];

// const isOdd = oddNumber_2.filter((value, index) => {
//   // console.log("Gia tri cua cac phan tu trong mang: ",value);
//   // console.log("Gia tri cua cac chi so PT trong mang: ", index);
//   return (value % 2) != 0; //Tra ve phan tu le
// });

// const isOdd = oddNumber_2.filter(value => (value % 2) != 0);
// console.log(isOdd);




// phuong thuc reduce()
// let numbers = [1,2,3,4,5];

// const result_2 = numbers.reduce((total, value)=>{
//   // console.log(total);
//   // console.log(value);


//   return total = total + value;
// }, 0);

// console.log(result_2);






// Phuong thuc find()
// let arr = [1,2,3,4,5,6,7];

// let result_4 = arr.findIndex((value, index)=>{
//   // console.log(index);

//   return value > 4
// });

// console.log(result_4);



// Vong lap trong object
let student = {
  name: "nguyen van a",
  age: 25,
  email: 'nguyenvana@gmai.com',
  address: 'hanoi'
};



// let keys = Object.keys(student);
// // console.log(keys);
// keys.forEach((value, index)=>{
//   console.log(value);
//   // console.log(index);

//   console.log(student[`${value}`]);
// })


for(const key in student) {
  // console.log(key);
  console.log(student[key]);
}