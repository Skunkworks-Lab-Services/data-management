// Placeholder for any interactivity you want to add, e.g., popups, animations, etc.
document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('mouseover', function() {
        this.querySelector('.tooltip').style.display = 'block';
    });
    circle.addEventListener('mouseout', function() {
        this.querySelector('.tooltip').style.display = 'none';
    });
});
