// Speech Bubble Toggle
function showSpeechBubble() {
    const bubble = document.getElementById('speechBubble');
    bubble.style.display = bubble.style.display === 'block' ? 'none' : 'block';
    setTimeout(() => bubble.style.display = 'none', 3000); // Hide after 3s
}

// Contact Form Animation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.send-btn');
    btn.textContent = 'Sending...';
    btn.style.background = '#00DDEB';
    setTimeout(() => {
        btn.textContent = 'Sent!';
        btn.style.background = '#FF6F61';
    }, 2000);
});