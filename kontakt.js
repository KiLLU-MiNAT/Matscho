document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;

    const body =
        `Name: ${name}
E-Mail: ${email}
Anliegen: ${topic}

Nachricht:
${message}`;

    const mailto = `mailto:matscho813@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
});