// Đợi cho đến khi tài liệu HTML được tải hoàn toàn
document.addEventListener('DOMContentLoaded', function() {
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
});