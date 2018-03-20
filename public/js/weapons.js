function weightedRand(spec) {
  let table = [];
  for (let i in spec) {
    for (let j = 0; j < spec[i] * 100; ++j) {
      table.push(i);
    }
  }
  return () => table[Math.floor(Math.random() * table.length)];
}

const weapon_path = '/assets/weapons/';
const weapon_ext = '.jpg';
const weapons = [ 'armored_gauntlet', 'dh-17', 'dl-44', 'e-11', 'gaffi_stick', 'hand_cannon', 'tattooine_hunting_rifle', 'vibroblade', 'a280', 't-21', 'vibro-ax', 'vibrosword', 'pulse_cannon', 'force_pike' ];
const get_weapon = weightedRand({ 0: 0.09, 1: 0.09, 2: 0.09, 3: 0.09,
                                  4: 0.09, 5: 0.09, 6: 0.09, 7: 0.09,
                                  8: 0.05, 9: 0.05, 10: 0.05, 11: 0.05,
                                  12: 0.04, 13: 0.04 });

function weapon() {
  const container = document.getElementById('weapon_box');
  container.innerHTML = '<div class="loader"></div>';

  let box = [ weapons[get_weapon()], weapons[get_weapon()] ];

  const boxDiv = document.createElement('div');
  box.forEach(weapon => {
    let img = document.createElement('img');
    img.classList.add('weapon');
    img.src = weapon_path + weapon + weapon_ext;
    boxDiv.appendChild(img);
  });

  setTimeout(() => container.innerHTML = boxDiv.innerHTML, 2250);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('weapon_box').addEventListener('click', weapon);
  document.getElementById('weapon_again').addEventListener('click', weapon);
});
