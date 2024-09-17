const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    prev.disabled = true;
    next.disabled = true;
    createConfetti();
    createFirework();
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

function createConfetti() {
  const numberOfConfetti = 100;
  for (let i = 0; i < numberOfConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * 100 + 'vh';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000); 
  }
}

function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.left = '50%';
  firework.style.top = '50%';
  firework.style.transform = 'translate(-50%, -50%)'; 
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 1000); 
}
