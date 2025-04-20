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
    // Tìm logo bằng ID (thay 'logo' bằng ID thực tế của logo trên trang của bạn)
    const logo = document.querySelector('.logo');
    
    // Kiểm tra xem logo có tồn tại không
    if (logo) {
        // Thêm sự kiện click vào logo
        logo.addEventListener('click', function() {
            // Chuyển hướng về trang chủ
            window.location.href ='/TrangChu.html';
        });
        
        // Thêm kiểu con trỏ để người dùng biết logo có thể nhấp được
        logo.style.cursor = 'pointer';
        
        // Tùy chọn: Thêm tooltip để người dùng biết chức năng của logo
        logo.title = 'Về trang chủ';
    } else {
        console.error('Không tìm thấy phần tử logo');
    }  