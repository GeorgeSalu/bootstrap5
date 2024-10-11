const toastELList = document.querySelectorAll(".toast");
const toastList = [...toastELList].map((toastEl) => {
    const toast = new bootstrap.Toast(toastEl, {});
    toast.show();
});