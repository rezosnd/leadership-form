document.getElementById("leadershipForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => { object[key] = value; });

    try {
        let response = await fetch("https://script.google.com/macros/s/AKfycbxiQI2R4rI6rTOjJEBll7obPwRiIcBZDP8JiV_YW_7X3svvexf5lT53sK5X27ZPjZFY3w/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Ensure JSON format
            body: JSON.stringify(object)
        });

        let data = await response.text();
        console.log("Server Response:", data); // Debugging

        if (data.trim() === "Invalid Request") {
            alert("⚠️ Invalid Request: Ensure form fields are filled correctly.");
        } else if (data.trim() === "Sheet Not Found") {
            alert("❌ Error: Google Sheet Not Found. Check the Sheet Name.");
        } else if (data.trim().toLowerCase().includes("success")) {
            document.querySelector(".success-message").style.display = "block";
            event.target.reset(); // Clear form on success
        } else {
            alert("⚠️ Unexpected Error: " + data);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("❌ Request failed: Check your internet connection and Web App URL.");
    }
});
