document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("main section");

    // Function to show the selected section
    function showSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        
        // Hide all sections
        sections.forEach(section => section.style.display = "none");

        // Show the target section
        document.getElementById(targetId).style.display = "block";
    }

    // Attach event listeners to links
    links.forEach(link => link.addEventListener("click", showSection));

    // Initially display the Home section
    sections.forEach(section => section.style.display = "none");
    document.getElementById("home").style.display = "block";
});
