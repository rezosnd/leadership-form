document.getElementById("leadershipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => { object[key] = value; });

    fetch("https://script.google.com/macros/s/AKfycbwjAZZhAjvgqgzLiDJ8IwZ1a5u2igTvcpMB1V--7kxqnkVWrfho50O7y-vcFHmCQvGBpA/exec", {  // Use updated Web App URL
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(object).toString()
    })
    .then(response => response.text())
    .then(data => {
        if (data === "Success") {
            document.querySelector(".success-message").style.display = "block";
        } else {
            alert("Error: " + data);
        }
    })
    .catch(error => alert("Request failed: " + error));
});
