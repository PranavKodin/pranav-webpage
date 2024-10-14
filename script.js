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