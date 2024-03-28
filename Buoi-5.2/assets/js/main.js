// Call du lieu tren server va no tra ve data
const data = [
  {
    name: "Quần short khaki cạp chun basic, diễu gấu FSBK010",
    src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_1_img.jpg?v=328"
  },
  {
    name: "Áo T shirt thể thao basic FSTS002",
    src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_2_img.jpg?v=328"
  },
  {
    name: "Áo T shirt trơn in logo ngực FSTS001",
    src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_3_img.jpg?v=328"
  },
  {
    name: "Áo Polo can phối thân FSTP004",
    src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_4_img.jpg?v=328"
  },
  {
    name: "Áo Polo thể thao basic FSTP027",
    src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_5_img.jpg?v=328"
  },
  {
    name: "Áo Polo thể thao basic FSTP027",
    src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_5_img.jpg?v=328"
  }
];

//Buoc 1: Truy cap phan tu
let rowProduct = document.querySelector(".row-js");
// console.log(rowProduct);

// Buoc 2: Lap qua mang data

let HTML = ``;

data.forEach((value) => {
  console.log(value);

  HTML += `
  <div class="coloumn coloumn-4">
    <div class="box-images">
      <img src="${value.src}" alt="SP 1">
    </div>
    <div class="box-content">
      <h3>${value.name}</h3>
    </div>

  </div>
  `;
});
// console.log(HTML);

// Buoc 3: Do du lieu vao HTML
rowProduct.innerHTML = HTML;