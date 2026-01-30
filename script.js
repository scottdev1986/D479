// Mobile Menu
function toggleMobileMenu() {
    document.getElementById('mobileNav').classList.toggle('active');
}

// Transport Tabs
function showTransportTab(index) {
    // Update tab buttons
    document.querySelectorAll('.transport-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });

    // Show/hide content sections
    document.querySelectorAll('.transport-section').forEach(section => {
        section.style.display = section.dataset.tab == index ? 'block' : 'none';
    });
}

// FAQ Accordion
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('open');
    element.querySelector('span').textContent = faqItem.classList.contains('open') ? '−' : '+';
}

// Filter buttons (demo - just toggle active state)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // For demo purposes, just toggle first button active state
        if (!this.classList.contains('active')) {

        }
    });
});