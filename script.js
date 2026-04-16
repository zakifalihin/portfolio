// ============================================
// NAVBAR FUNCTIONALITY
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked!');
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !message) {
            alert('Mohon isi semua field!');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Email tidak valid!');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;

        // Simulate delay
        setTimeout(() => {
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, message });

            // Success message
            alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');

            // Reset form
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Add animation class to hero on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeIn 0.8s ease-out';
    }

    // Initialize tooltips or other features
    initializeFeatures();
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================
function initializeFeatures() {
    // Add any additional initialization here
    console.log('Portfolio website loaded successfully!');
}

// Prevent default behavior for placeholder links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.classList.contains('social-icon') || 
            link.classList.contains('link-btn')) {
            e.preventDefault();
            console.log('Link placeholder - update with actual URL');
        }
    });
});

// ============================================
// RESPONSIVE MENU HANDLING
// ============================================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
    }
});

// ============================================
// BUTTON HOVER EFFECTS
// ============================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// SCROLL TO TOP (Optional Enhancement)
// ============================================
window.addEventListener('scroll', () => {
    // Add any scroll-based animations here
});

// ============================================
// CV DOWNLOAD FUNCTIONALITY
// ============================================
const downloadPDFBtn = document.getElementById('downloadPDF');

if (downloadPDFBtn) {
    downloadPDFBtn.addEventListener('click', () => {
        downloadCVAsHTML();
    });
}

function downloadCVAsHTML() {
    const cvContent = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Zaki Falihin Ayyubi</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 40px 20px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #6366f1;
            padding-bottom: 20px;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 5px;
            color: #1e293b;
        }
        
        .header .title {
            font-size: 16px;
            color: #6366f1;
            margin-bottom: 15px;
        }
        
        .contact-info {
            text-align: center;
            font-size: 12px;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 14px;
            font-weight: bold;
            background: #6366f1;
            color: white;
            padding: 10px 15px;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .summary {
            font-size: 12px;
            line-height: 1.8;
            color: #555;
        }
        
        .experience-item {
            margin-bottom: 15px;
            page-break-inside: avoid;
        }
        
        .experience-item .position {
            font-weight: bold;
            font-size: 13px;
            color: #1e293b;
        }
        
        .experience-item .company {
            font-size: 12px;
            color: #6366f1;
            margin-bottom: 5px;
        }
        
        .experience-item .date {
            font-size: 11px;
            color: #999;
            margin-bottom: 5px;
        }
        
        .experience-item ul {
            margin-left: 20px;
            font-size: 12px;
            color: #555;
        }
        
        .experience-item li {
            margin-bottom: 5px;
        }
        
        .education-item {
            margin-bottom: 10px;
        }
        
        .education-item .degree {
            font-weight: bold;
            font-size: 13px;
            color: #1e293b;
        }
        
        .education-item .school {
            font-size: 12px;
            color: #6366f1;
        }
        
        .education-item .year {
            font-size: 11px;
            color: #999;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .skill-category {
            font-size: 12px;
        }
        
        .skill-category strong {
            display: block;
            margin-bottom: 5px;
            color: #1e293b;
        }
        
        .skill-item {
            display: inline-block;
            background: #f1f5f9;
            padding: 4px 10px;
            margin: 3px;
            border-radius: 3px;
            font-size: 11px;
            color: #6366f1;
        }
        
        .certification-item {
            font-size: 12px;
            margin-bottom: 8px;
            padding-left: 15px;
            position: relative;
        }
        
        .certification-item:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }
        
        @media print {
            body {
                padding: 0;
                margin: 0;
            }
            .container {
                box-shadow: none;
                max-width: 100%;
                padding: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Zaki Falihin Ayyubi</h1>
            <p class="title">Mobile Development</p>
            <div class="contact-info">
                <span>zakifalihin05@gmail.com</span>
                <span>+62 887 5295 115</span>
                <span>Makassar, Indonesia</span>
                <span>linkedin.com/in/zakifalihinayyubi</span>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">Ringkasan Profesional</div>
            <p class="summary">
                Information Technology student dengan fokus kuat pada Mobile dan Multiplatform Development. Memiliki lebih dari satu tahun pengalaman sebagai Laboratory Assistant dan berkontribusi aktif sebagai Core Team Member di Technical Division komunitas developer universitas. Mahir dalam Flutter untuk pengembangan aplikasi mobile, dengan keahlian tambahan dalam pengembangan web full-stack dan manajemen database. Mendemonstrasikan kemampuan problem-solving yang kuat, efektif berkolaborasi dalam tim, dan komitmen terhadap continuous learning dan professional growth di bidang technology.
            </p>
        </div>
        
        <div class="section">
            <div class="section-title">Pengalaman Kerja</div>
            
            <div class="experience-item">
                <div class="position">Asisten Laboratorium - Computer Science Faculty</div>
                <div class="company">Universitas Muslim Indonesia (UMI)</div>
                <div class="date">Jan 2025 - Present</div>
                <ul>
                    <li>Memberikan panduan teknis dan mentoring kepada mahasiswa dalam praktikum pemrograman dan pengembangan software</li>
                    <li>Menyederhanakan konsep pemrograman kompleks menjadi penjelasan terstruktur dan mudah dipahami</li>
                    <li>Mendukung proses evaluasi dengan review assignment dan memberikan feedback teknis konstruktif</li>
                    <li>Membantu troubleshooting masalah teknis untuk memastikan kelancaran aktivitas pembelajaran</li>
                </ul>
            </div>
            
            <div class="experience-item">
                <div class="position">Core Team - Development Student Club UMI</div>
                <div class="company">Universitas Muslim Indonesia (UMI)</div>
                <div class="date">Des 2025 - Present</div>
                <ul>
                    <li>Berkontribusi sebagai core member di technical division fokus pada Android dan Multiplatform</li>
                    <li>Berkolaborasi dengan team members untuk mengembangkan dan berbagi knowledge mengenai teknologi modern, khususnya Flutter</li>
                    <li>Berpartisipasi dalam diskusi teknis, workshop, dan sesi knowledge-sharing internal</li>
                    <li>Mendukung pengembangan community-driven projects dan learning initiatives</li>
                </ul>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">Pendidikan</div>
            
            <div class="education-item">
                <div class="degree">Bachelor of Informatics Engineering (S1 Teknik Informatika)</div>
                <div class="school">Universitas Muslim Indonesia (UMI)</div>
                <div class="year">Jul 2023 - Present</div>
                <ul style="margin-left: 0; margin-top: 8px; font-size: 11px;">
                    <li>GPA: 3.89 / 4.00</li>
                    <li>Laboratory Assistant, Faculty of Computer Science</li>
                    <li>Relevant Coursework: Mobile Development, Web Development, Database Systems, Object-Oriented Programming</li>
                    <li>Active member: Developer Student Club (DSC)</li>
                </ul>
            </div>
            
            <div class="education-item">
                <div class="degree">Senior High School - Social Sciences (IPS)</div>
                <div class="school">SMA Negeri 1 Manuju</div>
                <div class="year">May 2020 - 2023</div>
                <ul style="margin-left: 0; margin-top: 8px; font-size: 11px;">
                    <li>Final Score: 85.56</li>
                    <li>Top Academic Performer</li>
                    <li>Class Leader</li>
                </ul>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">Keahlian Teknis</div>
            
            <div class="skills-grid">
                <div class="skill-category">
                    <strong>Mobile Development</strong>
                    <div class="skill-item">Flutter</div>
                    <div class="skill-item">Dart</div>
                    <div class="skill-item">Multiplatform Development</div>
                    <div class="skill-item">Android Development</div>
                </div>
                
                <div class="skill-category">
                    <strong>Web Development</strong>
                    <div class="skill-item">Laravel</div>
                    <div class="skill-item">PHP</div>
                    <div class="skill-item">HTML5</div>
                    <div class="skill-item">CSS3</div>
                </div>
                
                <div class="skill-category">
                    <strong>Database</strong>
                    <div class="skill-item">MySQL</div>
                    <div class="skill-item">SQL</div>
                    <div class="skill-item">Database Design</div>
                </div>
                
                <div class="skill-category">
                    <strong>Programming Concepts</strong>
                    <div class="skill-item">Object-Oriented Programming</div>
                    <div class="skill-item">Problem Solving</div>
                    <div class="skill-item">Debugging</div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">Sertifikasi</div>
            
            <div class="certification-item">Junior Web Developer – Vocational School Graduate Academy (VSGA)</div>
            <div class="certification-item">Belajar Membuat Aplikasi Flutter untuk Pemula – Dicoding Indonesia</div>
            <div class="certification-item">Fundamentals Of Deep Learning – NVIDIA</div>
        </div>
    </div>
    
    <script>
        // Auto-print when opened
        setTimeout(() => {
            window.print();
        }, 500);
    </script>
</body>
</html>
    `;
    
    // Create a Blob from the HTML content
    const blob = new Blob([cvContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV-Zaki-Falihin-Ayyubi-${new Date().getFullYear()}.html`;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
    
    // Show success message
    showNotification('CV berhasil diunduh! File siap untuk di-print atau dibagikan.');
}

// ============================================
// NOTIFICATION FUNCTION
// ============================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        font-size: 14px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Add animation styles for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
