const popupBtn = document.getElementById('popup-btn');
const popupBox = document.getElementById('popup-box');
const closeBtn = document.getElementById('close-btn');

// Show popup
popupBtn.addEventListener('click', () => {
  popupBox.classList.add('active');
});

// Hide popup
closeBtn.addEventListener('click', () => {
  popupBox.classList.remove('active');
});

// Optional: Also close popup if user clicks outside the popup-content
popupBox.addEventListener('click', (e) => {
  if (e.target === popupBox) {
    popupBox.classList.remove('active');
  }
});