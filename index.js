const inputan = document.getElementById("inputan");
const keFahrenheit = document.getElementById("keFahrenheit");
const keCelsius = document.getElementById("keCelsius");
const fkeKelvin = document.getElementById("fkeKelvin");
const ckeKelvin = document.getElementById("ckeKelvin");
const kelkeF = document.getElementById("kelkeF");
const kelkeC = document.getElementById("kelkeC");


const hasil = document.getElementById("hasil");

let temp;


function konversi() {

    if (keFahrenheit.checked) {
        temp = Number(inputan.value);
        temp = temp * 9 / 5 + 32;
        hasil.textContent = temp.toFixed(2) + "°F"
    } else if (keCelsius.checked) {
        temp = Number(inputan.value);
        temp = (temp - 32) * (5 / 9);
        hasil.textContent = temp.toFixed(2) + "°C"

    } else if (fkeKelvin.checked) {
        temp = Number(inputan.value);
        temp = (temp + 459.67) * (5 / 9);
        hasil.textContent = temp.toFixed(2) + "K"
    } else if (ckeKelvin.checked) {
        temp = Number(inputan.value);
        temp = (temp + 273.15);
        hasil.textContent = temp.toFixed(2) + "K"
    } else if (kelkeF.checked) {
        temp = Number(inputan.value);
        temp = (temp * (9 / 5)) - 459.67;
        hasil.textContent = temp.toFixed(2) + "°F"
    } else if (kelkeC.checked) {
        temp = Number(inputan.value);
        temp = (temp - 273.15);
        hasil.textContent = temp.toFixed(2) + "°C"
    } else {
        hasil.textContent = "Pilih Unit";
    }

}