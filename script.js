/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("open");

});


/* Close menu after clicking a link */

document
    .querySelectorAll("#navLinks a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

        });

    });


/* ================= WHATSAPP ENQUIRY ================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value;

        const grade =
            document.getElementById("grade").value;

        const subject =
            document.getElementById("subject").value;

        const phone =
            document.getElementById("phone").value;

        const preferredTime =
            document.getElementById("preferredTime").value;


        const message =
`Hello BST Smart Academy! 👋

I would like to enquire about a class.

👤 Student Name: ${studentName}
🎓 Grade / Level: ${grade}
📚 Subject: ${subject}
📱 Parent / Student WhatsApp: ${phone}
🕒 Preferred Days / Times: ${preferredTime}

Thank you!`;


        const whatsappNumber = "94785366648";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        formMessage.textContent =
            "Opening WhatsApp...";


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);