function towerOfHanoi (layer, origin, dest, buffer) {
  // n++;
  if (layer === 1) {
    console.log(`${origin} -> ${dest}`)
    return;
  }

  towerOfHanoi(layer - 1, origin, buffer, dest)
  console.log(`${origin} -> ${dest}`)
  towerOfHanoi(layer - 1, buffer, dest, origin)
  // console.log(n)
}
towerOfHanoi (3, 'A', 'C', 'B')