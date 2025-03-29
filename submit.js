document.getElementById("leadershipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => { object[key] = value; });

    fetch("https://script.google.com/macros/s/AKfycbyjuDr1HEJc_bwfNUbcr9RUTxrKFUlijHFLugs5cuQflPxvitBALofRabXyTzb5C8JKgA/exec", { // Replace with your Web App URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object) // Convert form data to JSON
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "Success") { // Trim to remove spaces/newlines
            document.querySelector(".success-message").style.display = "block";
        } else {
            alert("Error: " + data);
        }
    })
    .catch(error => alert("Request failed: " + error));
});
