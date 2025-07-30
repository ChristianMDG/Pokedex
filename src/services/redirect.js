const startBtn = document.getElementById('start-btn');
export function Animation() {
    startBtn.addEventListener('click', () => {
        startBtn.innerHTML = 'CHARGEMENT...';
        startBtn.classList.remove('animate-pulse');
        startBtn.classList.add('bg-yellow-500', 'text-black');
        
        setTimeout(() => {
            window.location.href = "pokedex.html"; 
        }, 2000);
    });
}