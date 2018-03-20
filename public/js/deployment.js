function weightedRand(spec) {
  let table = [];
  for (let i in spec) {
    for (let j = 0; j < spec[i] * 100; ++j) {
      table.push(i);
    }
  }

  return () => table[Math.floor(Math.random() * table.length)];
}

function deployment() {
  const container = document.getElementById('deployment_box');
  container.innerHTML = '<div class="loader"></div>';

  const comingSoon = "<p>Deployment box support is under development right now. It'll be done soon!</p>";
  setTimeout(() => container.innerHTML = comingSoon, 2250);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('deployment_box').addEventListener('click', deployment);
  document.getElementById('deployment_again').addEventListener('click', deployment);
});
