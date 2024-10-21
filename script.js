document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        var hoverSound = document.getElementById('hoverSound');
        hoverSound.play();
    });
});

document.querySelectorAll('.socialmediaico i').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
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

