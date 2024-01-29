let data = new XMLHttpRequest();

function getData() {
    let kanji = document.querySelector("#kanji-input").value;
    let url = "https://kanjiapi.dev/v1/kanji/".concat(kanji);

    data.open('get', url, true);
    data.send();
    data.onreadystatechange = () => {
        if (data.readyState === 4 && data.status === 200) {
            let kanjiObj = JSON.parse(data.response);
            console.log(kanjiObj);

            displayKanji(kanjiObj);
        }
    }

    
}


let kanjiCharacter = document.querySelector("#kanji-character > p");
let kanjiMeaning = document.querySelector("#kanji-meaning");
let kunReading = document.querySelector("#kun-reading");
let onReading = document.querySelector("#on-reading");
let formerJlptLevel = document.querySelector("#former-jlpt-level");
let strokeCount = document.querySelector("#stroke-count");

function displayKanji(kanjiObj) {

    console.log(kanjiCharacter);
    // print Kanji
    kanjiCharacter.textContent = kanjiObj['kanji'];

    // print Meaning
    kanjiMeaning.textContent = kanjiObj['meanings'].join(', ');

    // print kun Reading
    kunReading.textContent = kanjiObj['kun_readings'].join(' , ');
    
    // print on Reading
    onReading.textContent = kanjiObj['on_readings'].join(' , ');

    // print Former JLPT test level
    formerJlptLevel.textContent = "N" + kanjiObj['jlpt'];

    // print Stroke count
    strokeCount.textContent = kanjiObj['stroke_count'];
}

let body = document.querySelector("body");
let displayArea = document.querySelector("#display-area");

let themeSwitchIcon = document.querySelector('#theme-switch > i');

let currentTheme = "light";
let sunIconClass = "fa fa-solid fa-sun";
let moonIconClass = "fa fa-solid fa-moon";

function changeTheme() {

    if (currentTheme === "light") {

        body.className = "dark";
        displayArea.className = "dark2";

        themeSwitchIcon.className = sunIconClass;

        currentTheme = "dark";

    } else if (currentTheme === "dark") {

        body.className = "light";
        displayArea.className = "light2";

        themeSwitchIcon.className = moonIconClass;

        currentTheme = "light";

    }
}

/* 
    LIGHT

        body
            background: #f9f9f9;
            font: #323232;

        display area
            background: #e0e0e0;

        kanji-character
            background: #f9f9f9;
        
    
    DARK
        
        body
            background: #323232;
            font: #f9f9f9;

        display area
            background: #565656;

        kanji-character
            background: #323232;

        
*/



// fetch('https://kanjiapi.dev/v1/kanji/蜜')
//     .then(data => data.json())
//     .then(kanjiObj => console.log(kanjiObj));
