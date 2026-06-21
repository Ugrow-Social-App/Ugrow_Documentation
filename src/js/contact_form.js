const form_contact = document.getElementById("contact_form");

form_contact.addEventListener("submit", function(event) {
    event.preventDefault();

    const dataForm = new FormData(form_contact);
    if (!data_verify(Object.fromEntries(dataForm))) {
        console.warn("Error: couldn't submit the form, because the data are invalid");
    } else {
        alert("Sucess!");
        form_contact.reset();
    }
});

const data_verify = (data) => {
    // Model of email in Regex
    const email_model = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    console.log(data.type)
    if (!email_model.test(data.email)) {
        console.log("Error: invalid email");
        setErrorFormContact("contact.error.email");
        return false;
    } else if (data.type != "problem" && data.type != "feedback") {
        console.log("Error: invalid type of request");
        setErrorFormContact("contact.error.type");
        return false;
    } else {
        return true;
    }
}

const setErrorFormContact = (err_msg) => {
    const err = document.getElementById("error_msg_contact_form");
    err.style.display = "block";
    if (err.hasAttribute("data-i18n")) {
        err.removeAttribute("data-i18n");
    }
    err.setAttribute("data-i18n", err_msg);
}