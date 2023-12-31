function sendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_tpepy8q", "template_tq12i33", params)
        .then(function(response) {
            alert("Email Sent Successfully. Status: " + response.status);
        })
        .catch(function(error) {
            alert("Email could not be sent. Error: " + error);
        });
}