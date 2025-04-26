function load(event) {
    if(event) {
        event.preventDefault();
    }
    const content = document.getElementById('form-content');
    content.classList.add('hidden');
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('hidden');
    var bar = document.getElementById('loading-bar');
    var width = 20;
    var text = document.getElementById('progress-text');
    text.innerHTML = loadingMessage();

    var messageInterval = setInterval(function() {
        text.innerHTML = loadingMessage();
    }, 2000);
    
    var id = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
          clearInterval(id);
          setTimeout(showMessage(), 500);
        } else {
            if(width < 50) {
                if(Math.random() < 0.3) {
                    width ++;
                }
            } else {
                width++;
            }
            bar.style.width = width + '%'; 
            bar.innerHTML = width * 1  + '%';
        }
      }
}

function loadingMessage() {
    const messages = [
        "Analyzing cloud patterns...",
        "Checking wind speed...",
        "Analyzing satellite data...",
        "Tracking humidity levels...",
        "Measuring atmospheric pressure changes...",
        "Identifying temperature gradients across regions...",
        "Assessing solar radiation levels..."
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

function showMessage() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
}

function reset() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');

    const bar = document.getElementById('loading-bar');
    bar.style.width = '5%';
    bar.innerHTML = '5%';
    
    const messageDiv = document.getElementById('message');
    messageDiv.classList.add('hidden');

    const content = document.getElementById('form-content');
    content.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', load());
});