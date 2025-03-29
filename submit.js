document.getElementById("leadershipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => { object[key] = value; });

    fetch("https://67e8087720e3af747c4043b5.mockapi.io/applications", { // Use your actual endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);
        alert("Form Submitted Successfully!");
        document.querySelector(".success-message").style.display = "block";
    })
    .catch(error => {
        console.error("Fetch Error:", error);
        alert("Request failed: Check API URL and Internet Connection.");
    });
});
