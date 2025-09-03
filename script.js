// Sliders
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");

// Inputs numéricos
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Otros elementos
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");
const colorPicker = document.getElementById("colorPicker");
const copyHex = document.getElementById("copyHex");
const copyRgb = document.getElementById("copyRgb");

// Función para actualizar color desde RGB
function updateColor(r, g, b) {
  r = Math.min(255, Math.max(0, parseInt(r) || 0));
  g = Math.min(255, Math.max(0, parseInt(g) || 0));
  b = Math.min(255, Math.max(0, parseInt(b) || 0));

  // Sincronizar sliders e inputs
  redRange.value = r;
  greenRange.value = g;
  blueRange.value = b;
  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  // Generar colores
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  const hexColor = "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  // Aplicar
  colorBox.style.backgroundColor = rgbColor;
  hexCode.textContent = hexColor.toUpperCase();
  rgbCode.textContent = rgbColor;
  colorPicker.value = hexColor;
}

// Función desde colorPicker
function updateFromPicker(hex) {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  updateColor(r, g, b);
}

// Eventos sliders
redRange.addEventListener("input", () => updateColor(redRange.value, greenRange.value, blueRange.value));
greenRange.addEventListener("input", () => updateColor(redRange.value, greenRange.value, blueRange.value));
blueRange.addEventListener("input", () => updateColor(redRange.value, greenRange.value, blueRange.value));

// Eventos inputs numéricos
redInput.addEventListener("input", () => updateColor(redInput.value, greenInput.value, blueInput.value));
greenInput.addEventListener("input", () => updateColor(redInput.value, greenInput.value, blueInput.value));
blueInput.addEventListener("input", () => updateColor(redInput.value, greenInput.value, blueInput.value));

// Evento colorPicker
colorPicker.addEventListener("input", () => updateFromPicker(colorPicker.value));

// Copiar al portapapeles
copyHex.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCode.textContent);
  alert("✅ HEX copiado: " + hexCode.textContent);
});

copyRgb.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbCode.textContent);
  alert("✅ RGB copiado: " + rgbCode.textContent);
});

// Inicializar
updateColor(0, 0, 0);
