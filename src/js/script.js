document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("imageInput");
    const imagePreview = document.getElementById("imagePreview");
    const addPhotoText = document.getElementById("addPhotoText");
    const deletePhoto = document.getElementById("deletePhoto");

    const registerForm = document.querySelector("form"); 
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");

    imageInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.classList.remove("hidden");
                addPhotoText.classList.add("hidden");
                deletePhoto.classList.remove("hidden");
            };
            reader.readAsDataURL(file);
        }
    });

    deletePhoto.addEventListener("click", function () {
        imagePreview.src = "";
        imagePreview.classList.add("hidden");
        addPhotoText.classList.remove("hidden");
        deletePhoto.classList.add("hidden");
        imageInput.value = "";
    });

    registerForm.addEventListener("submit", function (event) {
        if (password.value !== confirmPassword.value) {
            passwordError.classList.remove("hidden");
            event.preventDefault();
        } else {
            passwordError.classList.add("hidden");
        }
    });

    confirmPassword.addEventListener("input", function () {
        if (password.value === confirmPassword.value) {
            passwordError.classList.add("hidden");
        }
    });
});

