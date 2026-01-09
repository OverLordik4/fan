document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 300);
    }
    
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    if (mobileMenuBtn && sidebar && mobileOverlay) {
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            mobileOverlay.classList.toggle('active');
            mobileMenuBtn.classList.toggle('hidden');
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
        });
        
        mobileOverlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            mobileOverlay.classList.remove('active');
            mobileMenuBtn.classList.remove('hidden');
            document.body.style.overflow = '';
        });
        
        // Close menu on nav item click
        sidebar.querySelectorAll('.nav-item').forEach(function(item) {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    mobileOverlay.classList.remove('active');
                    mobileMenuBtn.classList.remove('hidden');
                    document.body.style.overflow = '';
                }
            });
        });
    }
});

document.querySelectorAll('a[href]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href && !href.startsWith('#') && !href.startsWith('javascript:') && !this.hasAttribute('target')) {
            const preloader = document.getElementById('preloader');
            
            if (preloader) {
                e.preventDefault();
                preloader.classList.remove('hidden');
                
                setTimeout(function() {
                    window.location.href = href;
                }, 150);
            }
        }
    });
});

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }
});

