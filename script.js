async function translateWord() {
    const inputWord = document.getElementById("search").value.toLowerCase();
    
    // Fetch the JSON file and convert it to a JavaScript object
    const response = await fetch('dictionary.json');
    const dictionary = await response.json();
    
    const translation = dictionary[inputWord];
    const resultElement = document.getElementById("result");

    if (translation) {
        resultElement.textContent = `Translation: ${translation}`;
    } else {
        resultElement.textContent = "Word not found in the dictionary.";
    }
}
