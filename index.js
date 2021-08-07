const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startButton: document.querySelector('[data-action = "start"]'),
    stopButton: document.querySelector('[data-action = "stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorSwitchInterval = null;

const startColorSwitch = () => {
    refs.startButton.disabled = true;

    colorSwitchInterval = setInterval(() => {
        let randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
        let randomColor = colors[randomColorIndex];
        document.body.style.backgroundColor = randomColor;
    }, 1000)
};

const stopColorSwitch = () => {
    refs.startButton.disabled = false;
    
    clearInterval(colorSwitchInterval);
};

refs.startButton.addEventListener('click', startColorSwitch);
refs.stopButton.addEventListener('click', stopColorSwitch);
