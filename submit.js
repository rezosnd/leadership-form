document.getElementById("leadershipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = {};
    formData.forEach((value, key) => { data[key] = value; });

    fetch("https://67e806b320e3af747c403cad.mockapi.io/LeadershipApplications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
        document.querySelector(".success-message").style.display = "block";
    })
    .catch(error => {
        alert("Error: " + error.message);
    });
});
