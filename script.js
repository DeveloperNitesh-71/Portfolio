// Custom cursor
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateCursorRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateCursorRing);
}
animateCursorRing();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursorRing.style.width = '50px';
    cursorRing.style.height = '50px';
    cursorRing.style.opacity = '0.8';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
    cursorRing.style.opacity = '0.5';
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Form submit
function handleSubmit(btn) {
  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';
  setTimeout(() => {
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'var(--accent3)';
    btn.style.opacity = '1';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = 'var(--accent)';
    }, 3000);
  }, 1500);
}

// Typed effect for hero tag
const tag = document.querySelector('.hero-tag');