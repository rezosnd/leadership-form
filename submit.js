document.getElementById("leadershipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        name: document.querySelector("input[name='name']").value,
        rollNumber: document.querySelector("input[name='rollNumber']").value,
        branchYear: document.querySelector("select[name='branchYear']").value,
        contact: document.querySelector("input[name='contact']").value,
        email: document.querySelector("input[name='email']").value,
        domain: document.querySelector("select[name='domain']").value,
        whyLead: document.querySelector("textarea[name='whyLead']").value,
        leadershipSkills: document.querySelector("textarea[name='leadershipSkills']").value,
        experience: document.getElementById("leadershipExperience").value,
        experienceDetails: document.querySelector("textarea[name='experienceDetails']")?.value || "N/A",
        newIdeas: document.querySelector("textarea[name='newIdeas']").value
    };

    fetch("https://script.google.com/macros/s/AKfycbwsD0so_ZlBl2ack6ePtRdl8FTQMlkVjaXe3agk4OF4mjDbNvVzm6czkOzs1fKw5HCvvQ/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        document.querySelector(".success-message").style.display = "block";
        console.log("Success:", data);
    })
    .catch(error => console.error("Error:", error));
});
