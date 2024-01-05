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

  // Map each list item to its corresponding glow color
  const glowColors = {
      'fire': 'red',
      'water': 'blue',
      'leaf': 'green',
      'air': 'purple'
  };

  // Add click event listener to the image list
  imageList.addEventListener('click', function (event) {
      const clickedElement = event.target;

      // Check if the clicked element is an image inside a list item
      if (clickedElement.tagName === 'IMG' && clickedElement.parentElement.tagName === 'LI') {
          // Get the id of the clicked list item
          const itemId = clickedElement.parentElement.id;

          // Change the glow color based on the clicked item
          glowingCircle.style.borderColor = glowColors[itemId] || 'white';
      }
  });
});