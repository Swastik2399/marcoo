function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        document.getElementById('response').innerText = "You said: " + command;

        if (command.includes("your name")) {
            respond("Naam mein kya rakha?");
        } else if (command.includes("make me laugh")) {
            fetch('http://localhost:5000/joke')
                .then(response => response.json())
                .then(data => respond(data.joke));
        } else {
            respond("I didn't understand that.");
        }
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error", event.error);
    };
}

function respond(message) {
    document.getElementById('response').innerText = message;
}
