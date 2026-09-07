document.addEventListener("DOMContentLoaded", function () {

    // Highlight current navigation link
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks =
        document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});


function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully."
    );

    event.target.reset();

}