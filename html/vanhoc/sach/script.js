const toggleBtn = document.getElementById("toggleBtn");
const moreInfo = document.getElementById("moreInfo");

toggleBtn.addEventListener("click", () => {
  moreInfo.classList.toggle("hidden");
  toggleBtn.textContent = moreInfo.classList.contains("hidden") ? "Xem thêm" : "Ẩn bớt";
});
