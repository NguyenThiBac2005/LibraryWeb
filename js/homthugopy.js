document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const feedbackBtns = document.querySelectorAll('[href="#feedback"]');
    const feedbackModal = document.getElementById('feedback');
    const closeFeedback = document.getElementById('closeFeedback');
    const feedbackForm = document.getElementById('feedback-form');
    const fixedFeedbackBox = document.getElementById('fixedFeedbackBox');

    // Open feedback modal from fixed button
    if (fixedFeedbackBox) {
        fixedFeedbackBox.addEventListener('click', function() {
            feedbackModal.style.display = 'block';
        });
    }

    // Open feedback modal
    feedbackBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            feedbackModal.style.display = 'block';
        });
    });

    // Close feedback modal
    if (closeFeedback) {
        closeFeedback.addEventListener('click', function() {
            feedbackModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === feedbackModal) {
            feedbackModal.style.display = 'none';
        }
    });

    // Handle feedback form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const topic = document.getElementById('feedback-topic').value;
            const title = document.getElementById('feedback-title').value;
            const content = document.getElementById('feedback-content').value;
            
            // Validate form
            if (!topic || !title || !content) {
                alert('Vui lòng điền đầy đủ thông tin!');
                return;
            }
            
            // Here you would normally send the data to your server
            console.log({topic, title, content});
            
            // Show success message
            alert('Cảm ơn bạn đã gửi phản hồi!');
            
            // Reset form and close modal
            feedbackForm.reset();
            feedbackModal.style.display = 'none';
        });
    }

    // Code cho upload modal (giữ nguyên)
    const uploadModal = document.getElementById('upload');
    const uploadBtn = document.querySelector('[href="#upload"]');
    const closeUpload = document.getElementById('closeupload');
    
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            uploadModal.style.display = 'block';
        });
    }

    if (closeUpload) {
        closeUpload.addEventListener('click', function() {
            uploadModal.style.display = 'none';
        });
    }

    // Code cho login/register modal (giữ nguyên)
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeLogin = document.getElementById('closeLogin');
    const closeRegister = document.getElementById('closeRegister');

    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'block';
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.style.display = 'block';
        });
    }

    if (closeLogin) {
        closeLogin.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
    }

    if (closeRegister) {
        closeRegister.addEventListener('click', function() {
            registerModal.style.display = 'none';
        });
    }
        document.addEventListener('DOMContentLoaded', function() {
            var feedbackBox = document.getElementById('fixedFeedbackBox');
            var feedbackModal = document.getElementById('feedback');
            var closeFeedbackBtn = document.getElementById('closeFeedback');
            
            // Ensure modal is hidden on page load
            feedbackModal.style.display = 'none';
            
            // Show modal when feedback box is clicked
            feedbackBox.addEventListener('click', function() {
                feedbackModal.style.display = 'block';
            });
            
            // Close modal when close button is clicked
            closeFeedbackBtn.addEventListener('click', function() {
                feedbackModal.style.display = 'none';
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target == feedbackModal) {
                    feedbackModal.style.display = 'none';
                }
            });
        });
});