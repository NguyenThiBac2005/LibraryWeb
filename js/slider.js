document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".review-container");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const totalSlides = 5; // Tổng số review
    const visibleSlides = 3; // Số review hiển thị cùng lúc
    let currentIndex = 0;

    function updateSlider() {
        const offset = -(currentIndex * (100 / visibleSlides));
        container.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        if (currentIndex < totalSlides - visibleSlides) {
            currentIndex++;
        } else {
            currentIndex = 0; // Quay lại đầu
        }
        updateSlider();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - visibleSlides; // Quay lại cuối
        }
        updateSlider();
    }

    // Gắn sự kiện cho nút mũi tên
    nextArrow.addEventListener("click", nextSlide);
    prevArrow.addEventListener("click", prevSlide);

    // Tự động chuyển slide sau mỗi 5 giây
    setInterval(nextSlide, 5000);

    // Khởi tạo slider
    updateSlider();
});
