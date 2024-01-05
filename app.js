const answers = [
'Yes',
'No'
];

const resultElement = document.getElementById('result')
const shakeBtn = document.querySelector('.shake-btn')

shakeBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * answers.length);
  resultElement.textContent = answers[randomIndex];
});

document.addEventListener('DOMContentLoaded', function () {
  const glowingCircle = document.getElementById('glowingCircle');
  const imageList = document.querySelector('.image-list');

 
  const glowColors = {
      'fire': 'red',
      'water': 'blue',
      'leaf': 'green',
      'air': 'purple'
  };

  
  imageList.addEventListener('click', function (event) {
      const clickedElement = event.target;

      if (clickedElement.tagName === 'IMG' && clickedElement.parentElement.tagName === 'LI') {
          const itemId = clickedElement.parentElement.id;

          glowingCircle.style.borderColor = glowColors[itemId] || 'white';
      }
  });
});