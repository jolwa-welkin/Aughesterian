document.getElementById("translateButton").addEventListener("click", function() {
    const word = document.getElementById("inputWord").value.toLowerCase();
    fetch("dictionary.json")
        .then(response => response.json())
        .then(data => {
            const translation = data[word];
            const result = document.getElementById("result");
            if (translation) {
                result.textContent = `Translation: ${translation}`;
            } else {
                result.textContent = "Word not found in the dictionary.";
            }
        })
        .catch(error => console.error("Error loading the dictionary:", error));
});
