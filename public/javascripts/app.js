'use strict';

//Habit@
document.getElementById('pokedex').addEventListener('mouseover', function() {
  document.getElementById('pokedex-overlay').style.display = 'block';
});

document.getElementById('pokedex').addEventListener('mouseout', function() {
  document.getElementById('pokedex-overlay').style.display = 'none';
});

//Habit@
document.getElementById('habitat').addEventListener('mouseover', function() {
  document.getElementById('habitat-overlay').style.display = 'block';
});

document.getElementById('habitat').addEventListener('mouseout', function() {
  document.getElementById('habitat-overlay').style.display = 'none';
});

//games.lib
document.getElementById('games-lib').addEventListener('mouseover', function() {
  document.getElementById('games-lib-overlay').style.display = 'block';
});

document.getElementById('games-lib').addEventListener('mouseout', function() {
  document.getElementById('games-lib-overlay').style.display = 'none';
});

//Coming Soon
document.getElementById('tbd').addEventListener('mouseover', function() {
  document.getElementById('tbd-overlay').style.display = 'block';
});

document.getElementById('tbd').addEventListener('mouseout', function() {
  document.getElementById('tbd-overlay').style.display = 'none';
});
