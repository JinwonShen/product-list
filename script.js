import { UI } from "./ui.js";
import { Product } from "./product.js";

const formEl = document.getElementById("product-form");
const nameInputEl = document.getElementById("name");
const priceInputEl = document.getElementById("price");
const yearInputEl = document.getElementById("year");

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // refresh 방지

  const name = nameInputEl.value;
  const price = priceInputEl.value;
  const year = yearInputEl.value;

  const product = new Product(name, price, year);

  const ui = new UI();

  // 유효성 체크

  if (name === "" || price === "" || year === "") {
    // 오류메시지
    return ui.showMessage("모든 필드에 데이터를 삽입 하십시오.", "error");
  }
  // 추가
  ui.addProduct(product);

  // 성공메시지
  ui.showMessage("제품이 성공적으로 추가되었습니다.", "success");

  // field 초기화
  ui.resetForm();

  // Delete
  document.getElementById("product-list").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
  });
});
