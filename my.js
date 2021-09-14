const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("food");
const url = "https://kea21s-3d40.restdb.io/rest/food";
const option = {
  headers: {
    "x-apikey": "61360fcc43cedb6d1f97ed46",
  },
};
//fetch the data
fetch(url, option)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("img").src = product.photo;
  copy.querySelector("h3").textContent = product.name;
  copy.querySelector(".des").textContent = product.description;
  copy.querySelector(".rate").textContent = product.rating;
  copy.querySelector(".time").textContent = product.added;

  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
