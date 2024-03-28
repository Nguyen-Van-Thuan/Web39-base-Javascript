// Truy cap phan tu thong qua id
// Y/c: STYLES H1 THANH MAU DO (RED)

let title_1 = document.getElementById("title-1");
// console.log(title_1);
title_1.style.color = 'red';



// Truy cap phan thong qua class
let title_2 = document.getElementsByClassName("title-2");
// console.log(title_2);




// Truy cap phan tu thong qua tag
let tag_h3 = document.getElementsByTagName("h3");
// console.log(tag_h3);
// tag_h3.style.color = "blue";
for(let i = 0; i < tag_h3.length; i ++) {
  // console.log(tag_h3[i]);
  tag_h3[i].style.color = "blue";
}



// Truy cap phan tu voi querySelector
// Tra ve phan tu dau tien no tim thay
let title_4 = document.querySelector("#title-4");
let para_1 = document.querySelector('.para-1');
// console.log(title_4);
// console.log(para_1);




// Truy cap phan tu voi querySelectorAll
let para_2 = document.querySelectorAll(".para-2");
// console.log(para_2);



// Truy cap phan tu thong qua quan he
let box_2 = document.querySelector(".box-2");
// console.log(box_2.firstChild);




// Lay noi dung phan tu
let para_4 = document.querySelector('.para-4');
// console.log(para_4.textContent);
para_4.innerHTML = "Hello 500 anh em!";
para_4.style.color = "red";
para_4.style.fontSize = "40px";

