let points = 0;

document.getElementById("checkBtn").addEventListener("click", async() => {
    const inputText = document.getElementById("inputText").value;

    // Simulating grammar correction
    const correctedText = inputText.replace(/your\s/g, "you're "); // Example correction
    const suggestions = [
        { error: "your", suggestion: "you're", position: inputText.indexOf("your") }
    ];

    // Display suggestions
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "<h3>Suggestions:</h3>";
    suggestions.forEach((s, index) => {
        suggestionsDiv.innerHTML += `
      <p>${index + 1}. Replace "${s.error}" with "${s.suggestion}"</p>`;
    });

    // Update points for corrections
    points += suggestions.length;
    document.getElementById("points").innerText = `Points: ${points}`;
});