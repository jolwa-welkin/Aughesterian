function translateWord() {
    const inputWord = document.getElementById("search").value.toLowerCase();
    const table = document.getElementById("dictionaryTable");
    const rows = table.getElementsByTagName("tr");
    let translation = null;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const word = cells[0].textContent.toLowerCase();
        const translatedWord = cells[1].textContent;

        if (word === inputWord) {
            translation = translatedWord;
            break;
        }
    }

    const resultElement = document.getElementById("result");
    if (translation) {
        resultElement.textContent = `Translation: ${translation}`;
    } else {
        resultElement.textContent = "Word not found in the dictionary.";
    }
}
