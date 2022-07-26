window.onload = () => addItem();

function addItem() {
  fetch("../db/products.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.products.forEach((product) => {
        var wrapper = document.getElementById("productWrapper");
        var template = document.querySelector("#productrow");
        var clone = template.content.cloneNode(true);
        clone.querySelector("#value").textContent = product.title;
        clone.querySelector("#button-action").id = `id-${product.id}`;
        wrapper.appendChild(clone);
      });
    });
}

function redirect(id) {
  window.location.href = `http://localhost:8080/product/index.html?${id}`;
}
