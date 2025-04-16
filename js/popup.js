document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const closeLogin = document.getElementById("closeLogin");
    const closeRegister = document.getElementById("closeRegister");

    // Ẩn tất cả popup ban đầu
    loginModal.style.display = "none";
    registerModal.style.display = "none";

    // Mở popup Đăng nhập
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
        loginModal.style.display = "flex";
    });

    // Mở popup Đăng ký
    registerBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
        registerModal.style.display = "flex";
    });

    // Đóng popup Đăng nhập
    closeLogin.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Đóng popup Đăng ký
    closeRegister.addEventListener("click", function () {
        registerModal.style.display = "none";
    });

    // Đóng popup khi nhấn ngoài modal
    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target === registerModal) {
            registerModal.style.display = "none";
        }
    });
});