window.addEventListener('load', function() {
    const welcomeAnimation = document.getElementById('welcomeAnimation');
    setTimeout(() => {
        welcomeAnimation.style.display = 'none';
    }, 5000);
});

document.getElementById('surpriseButton').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';

    setTimeout(() => {
        surprise.style.display = 'none';
    }, 3000);
});
