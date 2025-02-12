document.getElementById('startButton').addEventListener('click', () => {
    startListening();
});

function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        document.getElementById('response').innerText = "You said: " + command;

        if (command.includes("your name")) {
            speak("Naam mein kya rakha?");
        } else if (command.includes("make me laugh")) {
            speak("Here's a joke! Why don't developers play hide and seek? Because good developers are always found.");
        } else {
            speak("I didn't understand that.");
        }
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error", event.error);
    };
}

function speak(message) {
    document.getElementById('response').innerText = message;
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "hi-IN";  // Hindi-like pronunciation
    speech.volume = 1;      // Full volume
    speech.rate = 1;        // Normal speed
    speech.pitch = 1;       // Normal pitch
    window.speechSynthesis.cancel(); // Reset speech synthesis
    window.speechSynthesis.speak(speech);
}
