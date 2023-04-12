import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showMessage = (message, type) => {
  Toastify({
    text: message,
    duration: 3000,
    destination: "#",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "gray",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
