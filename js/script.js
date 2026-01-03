document.addEventListener('DOMContentLoaded', () => {

    /* MEDIA TABS */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(btn.dataset.tab)?.classList.add('active');
        });
    });

    if (tabButtons.length) tabButtons[0].click();

    /* MOBILE MENU */
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav-links');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.innerHTML = nav.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }
});

// ===== CONTACT FORM HANDLING =====

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Harap isi semua field yang diperlukan!', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Format email tidak valid!', 'error');
                return;
            }
            
            // Show sending message
            showFormMessage('Mengirim pesan Anda...', 'info');
            
            // Simulate sending
            setTimeout(() => {
                // Success message
                showFormMessage('Terima kasih! Pesan Anda telah dikirim. Saya akan membalas secepatnya.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Auto-hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 2000);
        });
    }
}

function showFormMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }
}

// Update init function
function init() {
    // ... existing functions ...
    
    // Add contact form setup if on contact page
    if (window.location.pathname.includes('contact.html')) {
        setupContactForm();
    }
}

        // Tab Functionality
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Media Gallery Loaded');
            
            // Tab Switching
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            function switchTab(tabId) {
                console.log('Switching to tab:', tabId);
                
                // Remove active class from all
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked
                const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
                const activeContent = document.getElementById(tabId);
                
                if (activeBtn && activeContent) {
                    activeBtn.classList.add('active');
                    activeContent.classList.add('active');
                }
            }
            
            // Add click events
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    switchTab(tabId);
                });
            });
            
            // Mobile Menu Toggle
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.querySelector('.nav-links');
            
            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', function() {
                    navLinks.classList.toggle('active');
                    this.innerHTML = navLinks.classList.contains('active') 
                        ? '<i class="fas fa-times"></i>' 
                        : '<i class="fas fa-bars"></i>';
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(event) {
                    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target) && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                });
            }
            
            // Fix image paths if needed
            const images = document.querySelectorAll('.media-item img');
            images.forEach(img => {
                if (img.src.includes('foto1.jpg') || img.src.includes('foto2.jpg')) {
                    console.log('Image not found, using placeholder');
                }
            });
        });