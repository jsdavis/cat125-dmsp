function weightedRand(spec) {
  let table = [];
  for (let i in spec) {
    for (let j = 0; j < spec[i] * 100; ++j) {
      table.push(i);
    }
  }

  return () => table[Math.floor(Math.random() * table.length)];
}

const dice_colors = ['red', 'green', 'blue', 'yellow'];
const num_dice = weightedRand({ 1: .05, 2: .20,
                                3: .65, 4: .07, 5: .03 });

function dice() {
  const container = document.getElementById('dice_box');
  container.innerHTML = '<div class="loader"></div>';

  let box = [];
  for (let i = 0; i < num_dice(); ++i) {
    let idx = Math.floor(Math.random() * dice_colors.length);
    box.push(dice_colors[idx]);
  }

  const boxDiv = document.createElement('div');
  box.forEach(die => {
    let div = document.createElement('div');
    div.classList.add('die');
    div.classList.add(die);
    boxDiv.appendChild(div);
  });

  setTimeout(() => container.innerHTML = boxDiv.innerHTML, 2250);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dice_box').addEventListener('click', dice);
  document.getElementById('dice_again').addEventListener('click', dice);
});
