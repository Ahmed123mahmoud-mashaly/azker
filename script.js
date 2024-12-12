// script.js

const morningAzkar = [
    "سبحان الله وبحمده، سبحان الله العظيم",
    "الحمد لله",
    "لا إله إلا الله",
    "الله أكبر"
];

const eveningAzkar = [
    "اللهم إني أعوذ بك من الهم والحزن",
    "أستغفر الله وأتوب إليه",
    "لا حول ولا قوة إلا بالله",
    "اللهم صل وسلم على نبينا محمد"
];

let currentList = [];
let currentIndex = 0;
let currentCount = 0;

const currentZekrElement = document.getElementById('currentZekr');
const countElement = document.getElementById('count');

function displayCurrentZekr() {
    if (currentList.length === 0 || currentIndex < 0 || currentIndex >= currentList.length) {
        currentZekrElement.textContent = "لا توجد أذكار لعرضها";
        return;
    }
    currentZekrElement.textContent = currentList[currentIndex];
    updateCounter();
}

function updateCounter() {
    countElement.textContent = currentCount;
}

document.getElementById('startMorning').addEventListener('click', () => {
    currentList = morningAzkar;
    currentIndex = 0;
    currentCount = 0;
    displayCurrentZekr();
});

document.getElementById('startEvening').addEventListener('click', () => {
    currentList = eveningAzkar;
    currentIndex = 0;
    currentCount = 0;
    displayCurrentZekr();
});

document.getElementById('prevZekr').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        currentCount = 0;
        displayCurrentZekr();
    }
});

document.getElementById('nextZekr').addEventListener('click', () => {
    if (currentIndex < currentList.length - 1) {
        currentIndex++;
        currentCount = 0;
        displayCurrentZekr();
    }
});

document.getElementById('repeatZekr').addEventListener('click', () => {
    if (currentList.length === 0) return;
    currentCount++;
    if (currentCount > 33) {
        currentCount = 0;
        if (currentIndex < currentList.length - 1) {
            currentIndex++;
        }
        displayCurrentZekr();
    }
    updateCounter();
});
