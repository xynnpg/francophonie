document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const titleSection = document.querySelector('.title-section');
    
    // Initial animation for title section
    setTimeout(() => {
        titleSection.style.opacity = '1';
    }, 500);

    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    };

    // Function to handle scroll animations
    const handleScroll = () => {
        slides.forEach(slide => {
            if (isInViewport(slide)) {
                slide.classList.add('visible');
            }
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check for elements in viewport
    handleScroll();

    // Add parallax effect to title section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        titleSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Add mouse move effect to content cards
    document.querySelectorAll('.content').forEach(content => {
        content.addEventListener('mousemove', (e) => {
            const rect = content.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            content.style.transform = `
                perspective(1000px)
                rotateX(${(y - rect.height / 2) / 20}deg)
                rotateY(${(x - rect.width / 2) / 20}deg)
            `;
        });

        content.addEventListener('mouseleave', () => {
            content.style.transform = 'none';
        });
    });
}); 