const defaultState = {
  points: 0,
  carIndex: 0,
  upgrades: { tires: 0, turbo: 0, ecu: 0 }
};

export const cars = [
  { name: 'Gol', color: 0xff0000, acceleration: 600, maxSpeed: 400 },
  { name: 'Jetta', color: 0x00ff00, acceleration: 620, maxSpeed: 420 },
  { name: 'Golf', color: 0x0000ff, acceleration: 630, maxSpeed: 430 },
  { name: 'Voyage', color: 0xffff00, acceleration: 610, maxSpeed: 410 },
  { name: 'Up', color: 0xff00ff, acceleration: 580, maxSpeed: 405 },
  { name: 'Chevette', color: 0x00ffff, acceleration: 590, maxSpeed: 400 },
  { name: 'Corsa', color: 0xffffff, acceleration: 600, maxSpeed: 415 }
];

export function loadState() {
  const data = localStorage.getItem('dragGameState');
  if (data) {
    return { ...defaultState, ...JSON.parse(data) };
  }
  return { ...defaultState };
}

export function saveState(state) {
  localStorage.setItem('dragGameState', JSON.stringify(state));
}
