        let cartItems = [];
        let cartCount = 0;
        
        function addToCart(product, price) {
            cartItems.push({ product, price });
            cartCount++;
            
            document.getElementById('cartCount').textContent = cartCount;
            
            showNotification(`${product} added to cart!`);
        }
        
        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notificationText');
            
            notificationText.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        function scrollToProducts() {
            document.getElementById('products').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
        
        // Scroll indicator
        window.addEventListener('scroll', () => {
            const scrollIndicator = document.getElementById('scrollIndicator');
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollIndicator.style.width = scrolled + '%';
        });
        
        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(20, 20, 20, 0.95)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.05)';
            }
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe product cards
        document.querySelectorAll('.product-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
        
        // Observe feature cards
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.2}s`;
            observer.observe(card);
        });
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('show');
}
// Optional: Close menu on link click
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.remove('show');
    });
  });
});
