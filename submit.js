document.getElementById("leadershipForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Collect form data
    var formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => { object[key] = value; });

    try {
        let response = await fetch("https://script.googleusercontent.com/a/macros/kiit.ac.in/echo?user_content_key=AehSKLhiZ8sPvD5G3zURXDpsx5XAhFfojoBfX1_gEcY2Vi7nML16g3iln7V7mPCYs0s7ZRB2ySo0BS9lrMUReYedKfMSyYq5Jnq37mHCR3-ql6EmVPaczbZvVWcXBJW1Q6Nlq5BjKbJUiutNgTKchXGc74fCh4MIvwzb4aNIXR6-9aQlUdpwLk71rOjPkEeDFT9GfHfmycjmDyEUPdpI6FcUH52qPgXZO_X-5X9ACt1wg3EaXNXZj0aXZs17jmjsfa-1iJXpGMGy5mGlUzccU6y5CrmZNW15ypB7O-1j9HzpM3l29qq3aZU&lib=MvwVsSf_a-MsRHlWf7XR0MgNHg2PcYo_n", { // Replace with actual Web App URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
        });

        let data = await response.text();
        console.log("Server Response:", data); // Debugging

        if (data.trim() === "Invalid Request") {
            alert("⚠️ Invalid Request: Ensure all form fields are filled.");
        } else if (data.trim() === "Sheet Not Found") {
            alert("❌ Error: Google Sheet Not Found. Check the Sheet Name.");
        } else if (data.trim().toLowerCase().includes("success")) {
            document.querySelector(".success-message").style.display = "block";
            event.target.reset(); // Clear form after successful submission
        } else {
            alert("⚠️ Unexpected Error: " + data);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("❌ Request failed: Check your internet connection and Web App URL.");
    }
});
