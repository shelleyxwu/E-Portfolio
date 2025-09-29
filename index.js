// template ID: template_eenrs3d
// Service ID: service_h1zz8bl
// API Public Key: COriYHjiYcCtqgN5B

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            "service_h1zz8bl",
            "template_eenrs3d",
            event.target,
            "COriYHjiYcCtqgN5B"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at shelleywu10@gmail.com"
            )
        })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}