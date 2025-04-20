// File: js/upload.js
document.addEventListener('DOMContentLoaded', function() {
    // Lấy form upload và thêm event listener
    const uploadForm = document.getElementById('upload-form');
    if (uploadForm) {
        uploadForm.addEventListener('submit', handleUpload);
    }

    // Khởi tạo mảng lưu trữ sách đã tải lên
    if (!localStorage.getItem('uploadedBooks')) {
        localStorage.setItem('uploadedBooks', JSON.stringify([]));
    }

    // Hiển thị preview của file PDF khi người dùng chọn file
    const fileInput = document.getElementById('file');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
    }
});

// Xử lý khi người dùng chọn file
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        // Hiển thị tên file đã chọn
        const fileName = document.createElement('p');
        fileName.textContent = `File đã chọn: ${file.name}`;
        fileName.classList.add('selected-file-name');
        
        // Xóa thông báo cũ (nếu có)
        const oldFileName = document.querySelector('.selected-file-name');
        if (oldFileName) {
            oldFileName.remove();
        }
        
        // Thêm thông báo mới
        event.target.parentNode.appendChild(fileName);
    }
}

// Xử lý khi người dùng submit form
function handleUpload(e) {
    e.preventDefault();
    
    // Lấy dữ liệu từ form
    const bookTitle = document.getElementById('book-title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    
    // Kiểm tra xem người dùng đã điền đầy đủ thông tin chưa
    if (!bookTitle || !author || !category || !file) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    // Kiểm tra định dạng file
    if (file.type !== 'application/pdf') {
        alert('Vui lòng chọn file PDF!');
        return;
    }
    
    // Tạo object lưu thông tin sách
    const bookInfo = {
        id: Date.now(), // Tạo id duy nhất dựa trên timestamp
        title: bookTitle,
        author: author,
        category: getCategoryName(category),
        fileName: file.name,
        uploadDate: new Date().toLocaleDateString('vi-VN'),
        downloadCount: 0
    };
    
    // Đọc file dưới dạng DataURL
    const reader = new FileReader();
    reader.onload = function(e) {
        // Lưu nội dung file vào localStorage (lưu ý: chỉ phù hợp với file nhỏ)
        // Với file lớn, bạn nên sử dụng API để tải lên server
        bookInfo.fileData = e.target.result;
        
        // Lưu thông tin sách vào localStorage
        saveBook(bookInfo);
        
        // Hiển thị thông báo thành công
        showSuccessMessage();
        
        // Reset form
        resetForm();
    };
    
    // Đọc file
    reader.readAsDataURL(file);
}

// Chuyển đổi giá trị category thành tên hiển thị
function getCategoryName(categoryValue) {
    const categories = {
        'science': 'Khoa học',
        'psy': 'Tâm lý',
        'educational': 'Giáo dục',
        'romance': 'Tình cảm',
        'technology': 'Công nghệ',
        'economy': 'Kinh tế',
        'other': 'Khác'
    };
    
    return categories[categoryValue] || categoryValue;
}

// Lưu thông tin sách vào localStorage
function saveBook(bookInfo) {
    // Lấy danh sách sách đã tải lên
    const uploadedBooks = JSON.parse(localStorage.getItem('uploadedBooks')) || [];
    
    // Thêm sách mới
    uploadedBooks.push(bookInfo);
    
    // Lưu lại vào localStorage
    localStorage.setItem('uploadedBooks', JSON.stringify(uploadedBooks));
}

// Hiển thị thông báo tải lên thành công
function showSuccessMessage() {
    const successMsg = document.getElementById('success-message');
    successMsg.style.display = 'block';
    
    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 3000);
}

// Reset form sau khi tải lên thành công
function resetForm() {
    document.getElementById('upload-form').reset();
    
    // Xóa thông báo file đã chọn
    const selectedFileName = document.querySelector('.selected-file-name');
    if (selectedFileName) {
        selectedFileName.remove();
    }
}

// Để hiển thị sách đã tải lên trên trang "Sách của tôi"
function displayUploadedBooks(container) {
    // Lấy danh sách sách đã tải lên
    const uploadedBooks = JSON.parse(localStorage.getItem('uploadedBooks')) || [];
    
    // Xóa nội dung cũ
    container.innerHTML = '';
    
    if (uploadedBooks.length === 0) {
        container.innerHTML = '<p>Bạn chưa tải lên sách nào.</p>';
        return;
    }
    
    // Tạo grid hiển thị sách
    const bookGrid = document.createElement('div');
    bookGrid.className = 'book-grid';
    
    // Thêm từng sách vào grid
    uploadedBooks.forEach(book => {
        // Tạo card cho sách
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.dataset.bookId = book.id;
        
        // Tạo HTML cho card
        bookCard.innerHTML = `
            <div class="book-cover">
                <div class="pdf-icon">PDF</div>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-meta">
                    <span class="book-category">${book.category}</span>
                    <span class="book-date">${book.uploadDate}</span>
                </div>
                <div class="book-actions">
                    <button class="btn-download" data-id="${book.id}">Tải xuống</button>
                    <button class="btn-delete" data-id="${book.id}">Xóa</button>
                </div>
            </div>
        `;
        
        // Thêm card vào grid
        bookGrid.appendChild(bookCard);
    });
    
    // Thêm grid vào container
    container.appendChild(bookGrid);
    
    // Thêm event listener cho các nút
    addBookActionListeners();
}

// Thêm sự kiện cho các nút tải xuống và xóa
function addBookActionListeners() {
    // Thêm event cho nút tải xuống
    document.querySelectorAll('.btn-download').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.dataset.id;
            downloadBook(bookId);
        });
    });
    
    // Thêm event cho nút xóa
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.dataset.id;
            deleteBook(bookId);
        });
    });
}

// Tải xuống sách
function downloadBook(bookId) {
    // Lấy danh sách sách
    const uploadedBooks = JSON.parse(localStorage.getItem('uploadedBooks')) || [];
    
    // Tìm sách theo ID
    const book = uploadedBooks.find(b => b.id == bookId);
    
    if (book && book.fileData) {
        // Tạo một link ẩn để tải xuống
        const a = document.createElement('a');
        a.href = book.fileData;
        a.download = book.fileName || `${book.title}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // Tăng số lượt tải
        book.downloadCount++;
        localStorage.setItem('uploadedBooks', JSON.stringify(uploadedBooks));
    }
}

// Xóa sách
function deleteBook(bookId) {
    if (confirm('Bạn có chắc chắn muốn xóa sách này?')) {
        // Lấy danh sách sách
        const uploadedBooks = JSON.parse(localStorage.getItem('uploadedBooks')) || [];
        
        // Lọc ra sách không trùng ID
        const filteredBooks = uploadedBooks.filter(b => b.id != bookId);
        
        // Cập nhật lại localStorage
        localStorage.setItem('uploadedBooks', JSON.stringify(filteredBooks));
        
        // Làm mới hiển thị
        const container = document.querySelector('.my-books-container');
        if (container) {
            displayUploadedBooks(container);
        }
    }
}