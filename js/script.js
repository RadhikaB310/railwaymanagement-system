// LOGIN FUNCTION
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin123") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid Username or Password");
    }
}

// CHECK LOGIN STATUS
function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// SAVE BOOKING
function saveBooking() {
    let booking = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        train: document.getElementById("train").value,
        source: document.getElementById("source").value,
        destination: document.getElementById("destination").value
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Ticket Booked Successfully!");
    window.location.href = "view.html";
}
