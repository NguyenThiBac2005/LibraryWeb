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
function showSuccessMessage() {
    // Hiển thị thông báo thành công khi nút tải sách được ấn
    document.getElementById("success-message").style.display = "block";

    // Reset form sau khi tải sách thành công
    document.getElementById("upload-form").reset();

    // Tự động ẩn thông báo sau 3 giây
    setTimeout(() => {
        document.getElementById("success-message").style.display = "none";
    }, 3000);
}
function isValidEmail(email) {
    // Biểu thức regex để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sendEmail() {
    const emailInput = document.getElementById("email-input").value;

    // Kiểm tra định dạng email
    if (!isValidEmail(emailInput)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ.");
        return;
    }

    // Hiển thị thông báo gửi thành công
    document.getElementById("email-success-message").style.display = "block";

    // Reset input sau khi gửi thành công
    document.getElementById("email-input").value = "";

    // Tự động ẩn thông báo sau 3 giây
    setTimeout(() => {
        document.getElementById("email-success-message").style.display = "none";
    }, 3000);
}