let countdown = 10;
const countdownEl = document.getElementById('countdown');
const openLinkBtn = document.getElementById('openLinkBtn');

const timer = setInterval(() => {
  countdown--;
  countdownEl.textContent = countdown;
  if (countdown <= 0) {
    clearInterval(timer);
    countdownEl.parentElement.style.display = 'none';
    openLinkBtn.style.display = 'inline-block';
  }
}, 1000);

openLinkBtn.addEventListener('click', () => {
  window.location.href = 'https://drive.google.com/uc?export=download&id=1qbcRzYC6dwOyxvLI2KSGlOHLV-SgvryA';
});
