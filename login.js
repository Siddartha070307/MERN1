console.log("login.js loaded");
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    const data = await response.json();

    if (response.ok) {
        console.log("Login Successful");
        console.log(data);

        localStorage.setItem("token", data.accessToken);

        window.location.href = "dummy.html";
    } else {
        alert(data.message);
    }
}