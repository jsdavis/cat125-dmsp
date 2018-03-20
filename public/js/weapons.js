function weightedRand(spec) {
  let table = [];
  for (let i in spec) {
    for (let j = 0; j < spec[i] * 100; ++j) {
      table.push(i);
    }
  }

  return () => table[Math.floor(Math.random() * table.length)];
}

function weapon() {
  const container = document.getElementById('weapon_box');
  container.innerHTML = '<div class="loader"></div>';

  const comingSoon = "<p>Weapon box support is under development right now. It'll be done soon!</p>";
  setTimeout(() => container.innerHTML = comingSoon, 2250);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('weapon_box').addEventListener('click', weapon);
  document.getElementById('weapon_again').addEventListener('click', weapon);
});
