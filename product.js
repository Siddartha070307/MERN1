async function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch( `https://dummyjson.com/products/${id}`);
    const product = await response.json();
    document.querySelector(".title").innerText =product.title;
    document.querySelector(".description").innerText ="Description: " + product.description;
    document.querySelector(".image").src =product.thumbnail;
    document.querySelector(".image").alt =product.image;
    document.querySelector(".price").innerText ="Price: $" + product.price;
}
const token = localStorage.getItem("token");

if (!token) {
    alert("Please login first");
    window.location.href = "login.html";
} else {
    loadProduct();
}

