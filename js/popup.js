document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const closeLogin = document.getElementById("closeLogin");
    const closeRegister = document.getElementById("closeRegister");
    const email = document.getElementById("email");
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

// Kiểm tra dữ liệu khi submit form
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mảng chứa các lỗi nếu có
    const errors = [];
    
    // Kiểm tra tên
    if (name === '') {
        errors.push('Vui lòng nhập tên của bạn');
    }   
    // Kiểm tra tên đăng nhập
    if (username === '') {
        errors.push('Vui lòng nhập tên đăng nhập');
    }
    
    // Kiểm tra mật khẩu
    if (password === '') {
        errors.push('Vui lòng nhập mật khẩu');
    } else if (password.length < 6) {
        errors.push('Mật khẩu phải có ít nhất 6 ký tự');
    }
    
    // Kiểm tra email
    if (email === '') {
        errors.push('Vui lòng nhập email');
    } else if (!validateEmail(email)) {
        errors.push('Email không hợp lệ');
    }
    
    // Nếu có lỗi, hiển thị thông báo
    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        // Nếu không có lỗi, hiển thị thông báo thành công
        alert('Bạn đã đăng ký thành công!');
        // Có thể thêm code để gửi form lên server ở đây
    }
});

// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
});
