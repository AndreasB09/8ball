const answers = [
  "Yes",
  "No",
  "Ask again later",
  "Cannot predict now",
  "Don't count on it",
  "Most likely",
  "Outlook not so good",
  "Certainly",
  "Without a doubt",
  "My sources say no",
  "Maybe",
  "Reply hazy, try again",
  "Concentrate and ask again",
  "Very doubtful",
  "You may rely on it",
  "As I see it, yes"
];

const resultElement = document.getElementById('result')
const shakeBtn = document.querySelector('.shake-btn')

shakeBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * answers.length);
  resultElement.textContent = answers[randomIndex];
});

function changeImage(id) {
  document.querySelectorAll('.image-list li img').forEach(function (img) {
      img.src = img.src.replace('_yellow', '_white');
  });

  let imgElement = document.getElementById(id).querySelector('img');
  imgElement.src = `./images/${id}_${getColor(id)}.svg`;

  document.querySelectorAll('.image-list li').forEach(function (item) {
      item.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');

  let styleElement = document.createElement('style');
  document.head.appendChild(styleElement);

  styleElement.textContent = `
    @keyframes pulse {
      0% {
        box-shadow: 0 0 5px ${getPulseStartColor(id)};
      }
      100% {
        box-shadow: 0 0 20px ${getPulseEndColor(id)};
      }
    }
    .circle.active {
      animation: pulse 1s infinite alternate;
    }
  `;

  document.querySelector('.circle').classList.add('active');
}

function getPulseStartColor(id) {
  switch (id) {
      case 'water':
          return '#00B4D8';
      case 'leaf':
          return '#9EF01A';
      case 'air':
          return '#C77DFF';
      default:
          return '#FFB703';
  }
}

function getPulseEndColor(id) {
  switch (id) {
      case 'water':
          return '#0077B6';
      case 'leaf':
          return '#70E000';
      case 'air':
          return '#9D4EDD';
      default:
          return '#FB8500';
  }
}

function getColor(id) {
  switch (id) {
      case 'water':
          return 'blue';
      case 'leaf':
          return 'green';
      case 'air':
          return 'purple';
      default:
          return 'yellow';
  }
}