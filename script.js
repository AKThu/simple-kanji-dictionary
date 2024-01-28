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


let kanjiCharacter = document.querySelector("#kanji-character");
let kanjiMeaning = document.querySelector("#kanji-meaning");
let kunReading = document.querySelector("#kun-reading");
let onReading = document.querySelector("#on-reading");
let formerJlptLevel = document.querySelector("#former-jlpt-level");
let strokeCount = document.querySelector("#stroke-count");

function displayKanji(kanjiObj) {

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


// fetch('https://kanjiapi.dev/v1/kanji/蜜')
//     .then(data => data.json())
//     .then(kanjiObj => console.log(kanjiObj));
