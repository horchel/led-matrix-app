const { GpioMapping, LedMatrix } = require('rpi-led-matrix');

// Matrix-Konfiguration
const matrixOptions = {
  rows: 48,
  cols: 96,
  chainLength: 1,
  parallel: 1,
  hardwareMapping: GpioMapping.AdafruitHat // Anpassbar je nach Hardware
};

// Initialisiere die Matrix
const matrix = new LedMatrix(matrixOptions);

// Fülle die Matrix mit Rot
matrix
  .clear()              // Matrix löschen
  .brightness(100)      // Helligkeit auf 100%
  .fgColor(0xff0000)    // Farbe auf Rot setzen
  .fill()               // Fülle die Matrix mit der Vordergrundfarbe
  .sync();              // Synchronisiere die Matrix
