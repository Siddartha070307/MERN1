const token=localStorage.getItem("token");

if (!token) {
    alert("Please login first");
    window.location.href = "login.html";
}


async function fetchproducts() {
    try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        let container = document.getElementById("container");
        let template = document.getElementById("productTemplate");
        data.products.forEach((product) => {
            let clone = template.content.cloneNode(true);
            clone.querySelector(".title").innerText = product.title;
            clone.querySelector(".description").innerText = "Description: " + product.description;
            clone.querySelector(".image").src= product.thumbnail
            clone.querySelector(".image").alt = product.image;
            clone.querySelector(".price").innerText ="Price: $" +product.price;
            let card=clone.querySelector(".card");
            card.addEventListener("click",()=>{
                window.location.href=`product.html?id=${product.id}`;

            });
            container.appendChild(clone);
        });

    } catch (error) {
        console.error(error);
    }
}
fetchproducts();


async function search(){
    let response=await fetch("https://dummyjson.com/products");
    let data=await response.json();
    let searchText = document.getElementById("search").value.toLowerCase();
    let container = document.getElementById("container");
    let template = document.getElementById("productTemplate");
    container.innerHTML="";
    let filteredProducts = data.products.filter(product =>
    product.title.toLowerCase().includes(searchText)
    );
    filteredProducts.forEach((product) => {
    let clone = template.content.cloneNode(true);

    clone.querySelector(".title").innerText = product.title;
    clone.querySelector(".description").innerText = "Description: " + product.description;
    clone.querySelector(".image").src = product.thumbnail;
    clone.querySelector(".image").alt = product.title;
    clone.querySelector(".price").innerText ="Price: $" + product.price;
    let card = clone.querySelector(".card");
    card.addEventListener("click", () => {
        window.location.href = `product.html?id=${product.id}`;
    });
    container.appendChild(clone);
});
    if(filteredProducts.length==0){
        container.innerHTML="<h2> No products Found </h2>";
    }
    
}

async function limit(){
    let response = await fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price,description,thumbnail,id");
    let data = await response.json();
        let container = document.getElementById("container");
        let template = document.getElementById("productTemplate");
        container.innerHTML="";
        data.products.forEach((product) => {
            let clone = template.content.cloneNode(true);
            clone.querySelector(".title").innerText = product.title;
            clone.querySelector(".description").innerText = "Description: " + product.description;
            clone.querySelector(".image").src= product.thumbnail
            clone.querySelector(".image").alt = product.image;
            clone.querySelector(".price").innerText ="Price: $" +product.price;
            let card=clone.querySelector(".card");
            card.addEventListener("click",()=>{
                window.location.href=`product.html?id=${product.id}`;

            });
            container.appendChild(clone);
        });

}
limit();