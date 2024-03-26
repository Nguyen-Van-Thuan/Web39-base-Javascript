// Cach 1: Tao 1 mang arr co cac gia tri 1, 2, "Name"
// let arr = [];

// Gan gia tri cho mang rong
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = "Name";
// console.log(arr);





// Cach 2: Tao mang arr co Gia tri PT 1, 2, "name"
// let arr = [1,2, "name"];
// console.log(arr);



//VD1: Truy cap phan tu cua mang -> Thong qua chi so cua mang

// 10, 11, 12, 13 , 14 -> Gia tri phan tu cua mang
// 0, 1, 2, 3, 4 -> Chi so cua mang

// let array = [11, 12, 13, 14, 15];

// console.log(array[0]);
// console.log(array[2]);

// console.log(array.length);

// lenght: la 1 thuoc tinh co san js. Kiem tra do dai cua mang


//VD2: Truy cap phan tu cua mang numbers = [1,2,3,4,5,6];
// let numbers = [1, 2, 3, 4, 5, 6]; //Chi so mang bat dau 0

// console.log(numbers[3]); //in ra so 4
// console.log(numbers[4]);




// VD3: Cap nhat 1 gia tri cua mang
/*
  De cap nhat duoc 1 gia tri trong mang, co 2 buoc:
  + Buoc 1: Truy cap vao phan tu can update
  + Buoc 2: Gan lai gia tri moi

*/
// let arr_3 = [1, 2, 3, 4];
// // Phan tu 1 - Vi tri(index) 0
// // Phan tu 2 - Vi tri 1
// // Phan tu 3 -  Vi tri 2
// // Phan tu 4 - Vi tri 3
// arr_3[0] = 11;
// arr_3[4] = 5;

// console.log(arr_3);


// Cac kieu du lieu JS - Kieu du lieu nguyen thu
// Number - String - symbols - bollean - null - undefined


// Cac kieu du lieu JS - Kieu du lieu Object
// let user = {
//   name : "Nguyen van a",
//   age : 19,
//   email: "nguyenvana@gmail.com"
// };
// console.log(user);




// Values Type - Dung cho 6 kieu du lieu nguyen thuy

// let a = 1; //Tao ra 1 vung nho 1 -> Luu tru gia tri bien a
// let b = a; //Tao ra 1 vung nho 2 -> lu tri gia tri bien b

// b = b + 2;
// console.log(a);

// console.log(b);

// References Type - Kieu tham chieu (object)
// let x = [1, 2, 3, 4];
// let y = x;
// // Them 1 cai gia tri moi mang x - 5
// y.push(5);
// console.log(x);
// console.log(y);




// Duyet mang voi vong lap for
// number.length: Do dai cua mang
// i++


/*
  - input:  number = [1,2,3,4,5,6,7,8]
  - output: 
    + In ra gia tri cua tung phan tu trong mang
    + Tinh tong cac gia tri phan tu trong mang
    + Tinh tong gia tri cua cac so le trong mang
*/

// let arrayNumber = [1, 2, 3, 4, 5, 6, 7];

// let total = 0;
// let isOdd = 0;

// for (let i = 0; i < arrayNumber.length; i++) {
//   // ra GT cua tung phan tu trong mang
//   // console.log(arrayNumber[i]); //0, 1, 2, 3 -> chi so mang

//   // Tinh tong PT trong mang
//   total = total + arrayNumber[i];

//   // Tin tong so le cua cac PT trong mang
//   if (arrayNumber[i] % 2 != 0) {
//     // console.log(arrayNumber[i]);
//     isOdd += arrayNumber[i];
//   }
// }

// console.log("Tong cua mang la: ", total);
// console.log("Tong cua so le cua mang la: ", isOdd);

// total = total + arrayNumber[i];

// total = 0 + arrayNumber[0] = 1; vong lap 1 --- arrayNumber[0] -> 1
// total = 1 + arrayNumber[1] = 3; vong lap 2  --- arrayNumber[1] -> 2
// total = 3 + arrayNumber[2] = 6; vong lap 3 --- arrayNumber[2] --> 3
// total = 6 + arrayNumber[3] = 10; vong lap 3  ---arrayNumber[3] -->4





// Duyet mang voi vong lap forEach
// let arr = [11, 22, 33, 44, 55];

// su dung forEach voi ES5
// Value: Tra ve gia tri phan tu 
// index: Tra ve chi so (Vi tri) phan tu
// Value va index do minh tu dinh nghia (tu dat ten)


// arr.forEach(function(value, b){
//   // console.log("Gia tri PT cua mang: ",value);
//   console.log("Vi tri cua cac PT trong mang: ",b);
// })




let arr = [11, 22, 33, 44, 55];
// su dung forEach voi ES6

arr.forEach((value, index) => {
  console.log(value);
  console.log(index);
})