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