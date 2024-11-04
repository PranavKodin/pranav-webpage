document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        var hoverSound = document.getElementById('hoverSound');
        hoverSound.play();
    });
});

document.querySelectorAll('.socialmediaico i').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        var hoverSound = document.getElementById('socialmediahoverSound');
        hoverSound.play();
    });
});
const playSound = () => {
    const hoverSound = document.getElementById('buttonclickSound');
    hoverSound.currentTime = 0; // Reset to start
    hoverSound.play();
};

document.querySelectorAll('.socialmediaico i, button').forEach(element => {
    element.addEventListener('click', playSound);
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

var btn = $('check');

// Select the tooltip element
const tooltip = document.getElementById('tooltip');

// Add event listeners for each hover element
document.querySelectorAll('#me_main').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        // Set tooltip text from data attribute
        tooltip.textContent = e.target.getAttribute('tooltip');
        tooltip.style.opacity = 1; // Show the tooltip
    });

    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = 0; // Hide the tooltip
    });

    element.addEventListener('mousemove', (e) => {
        // Position the tooltip near the cursor
        tooltip.style.left = e.pageX + 10 + 'px'; // 10px offset for better visibility
        tooltip.style.top = e.pageY + 10 + 'px';
    });
});

