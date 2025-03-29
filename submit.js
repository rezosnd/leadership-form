document.getElementById("leadershipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => { object[key] = value; });

    fetch("https://script.googleusercontent.com/a/macros/kiit.ac.in/echo?user_content_key=AehSKLh3kxHegGZF_Ai-gpl856NefL3IUBkoRAjzY600rLz7gYQp8hNeTc5Int23FWTIk3j_5miXyqlOF8zZNkjB5ox0Xr34_9Tz8wqLYnSyyY2rHxQn-vJiopV-bFv57XDjgP5FRlX-2wU86nEa6IvIzR6agD8DQAYV5ZRzM3y26EX0lPOwSI03sohwYlCWSUvBkMOEfQnHpq6whZT5SLA0FVpGo48nhD-cTENI1x8iFzduaOxI5RSjFdO-ZvTQf5kAPnVSDgQ2WhnirF-el4uwhy5lFVDEVaPJ1om9c8S6Mi06MB3w--w&lib=MvwVsSf_a-MsRHlWf7XR0MgNHg2PcYo_n", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data); // Debugging

        if (data.status === "Invalid Request") {
            alert("Invalid Request: Ensure data is being sent correctly.");
        } else if (data.status === "Sheet Not Found") {
            alert("Error: Google Sheet Not Found. Verify the Sheet Name.");
        } else if (data.status === "Success") {
            document.querySelector(".success-message").style.display = "block";
        } else {
            alert("Unexpected Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Fetch Error:", error);
        alert("Request failed: Check your internet connection and Web App URL.");
    });
});
